import React, { useCallback, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ToastAndroid,
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon } from 'native-base';
import moment from 'moment';

import Colors from '@components/Colors';
import { homeStyles } from '@components/homeStyles';
import { insertNewPFavoriteList } from '@storage/Method';

const BASE_LINK = 'https://randomuser.me/api/0.4/?randomapi';

export default function Home() {
    const [dataUser, setDataUser] = useState([]);
    const [ageUser, setAgeUser] = useState();

    const [focusType, setFocusType] = useState({
        name: 'user-circle',
        type: 'FontAwesome',
        active: true,
        content: 'name',
    });
    const [dataListFeature, setDataListFeature] = useState([
        {
            name: 'user-circle',
            type: 'FontAwesome',
            active: true,
            content: 'name',
        },
        {
            name: 'calendar',
            type: 'Entypo',
            active: false,
            content: 'age',
        },
        {
            name: 'location-outline',
            type: 'Ionicons',
            active: false,
            content: 'address',
        },
        {
            name: 'call-outline',
            type: 'Ionicons',
            active: false,
            content: 'phone',
        },
        {
            name: 'unlocked',
            type: 'Fontisto',
            active: false,
            content: 'unknown',
        },
    ]);
    useEffect(() => {
        getData();
        setDataListFeature(dataListFeature);
    }, [dataListFeature, getData]);

    useEffect(() => {
        if (dataUser.length !== 0) {
            let date = new Date(1000 * dataUser[dataUser.length - 1].dob);
            let newDate = moment(date.toString()).fromNow().slice(0, 2);
            setAgeUser(newDate);
        }
    }, [dataUser]);

    const getData = useCallback(() => {
        fetch(BASE_LINK)
            .then((response) => response.json())
            .then((data) => {
                let arr = [...dataUser];
                arr.push(data.results[0].user);
                setDataUser(arr);
            })
            .catch((err) => console.log('err when get data: ', err));
    }, [dataUser]);

    const _onPressFeature = (index) => {
        let arr = [...dataListFeature];
        arr.forEach((itemArr) => (itemArr.active = false));
        arr[index].active = true;
        setFocusType(arr[index]);
        setDataListFeature(arr);
    };

    const insertFav = (data) => {
        const newFavitem = {
            id: Math.floor(Math.random() * 1000000),
            firstName: data.name.first,
            lastName: data.name.first,
            location: data.location.street,
            dob: ageUser,
            phone: data.phone,
            picture: data.picture,
        };
        insertNewPFavoriteList(newFavitem)
            .then(() => {
                console.log('insertNewPFavoriteList success ');
            })
            .catch((err) => {
                console.log('err insertNewPFavoriteList: ', err);
            });
    };

    const _renderItemListFeature = ({ index, item }) => {
        return (
            <TouchableOpacity
                style={styles.listFeatureItem}
                onPress={() => _onPressFeature(index)}>
                <Icon
                    name={item.name}
                    type={item.type}
                    style={{
                        ...styles.listFeatureIcon,
                        color:
                            item.active === true ? Colors.JADE : Colors.SILVER,
                    }}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerBox} />
            <CardStack style={styles.content} onSwiped={() => getData()}>
                {dataUser.map((itemUser) => (
                    <Card
                        key={itemUser.email}
                        style={styles.card}
                        onSwipedLeft={() => {}}
                        onSwipedRight={() => {
                            console.log('itemUser: ', itemUser);
                            insertFav(itemUser);
                            ToastAndroid.show(
                                `Added ${itemUser.name.first} ${itemUser.name.last} to favorite`,
                                3000,
                            );
                        }}>
                        <View>
                            <View style={styles.topBox} />
                            <View style={styles.bottomBox}>
                                <View style={styles.addressBox}>
                                    <Text style={styles.addressTitle}>
                                        My {focusType.content}  is
                                    </Text>
                                    {focusType.name === 'user-circle' ? (
                                        <Text style={styles.addressContent}>
                                            {itemUser.name.first}{' '}
                                            {itemUser.name.last}
                                        </Text>
                                    ) : focusType.name === 'calendar' ? (
                                        <Text style={styles.addressContent}>
                                            {ageUser}
                                        </Text>
                                    ) : focusType.name ===
                                      'location-outline' ? (
                                        <Text style={styles.addressContent}>
                                            {itemUser.location.street}
                                        </Text>
                                    ) : focusType.name === 'call-outline' ? (
                                        <Text style={styles.addressContent}>
                                            {itemUser.phone}
                                        </Text>
                                    ) : (
                                        <Text style={styles.addressContent}>
                                            {''}
                                        </Text>
                                    )}
                                </View>
                                <View style={styles.listFeature}>
                                    <FlatList
                                        horizontal={true}
                                        data={dataListFeature}
                                        renderItem={_renderItemListFeature}
                                        keyExtractor={(item) => item.name}
                                    />
                                </View>
                            </View>
                            <View style={styles.stretchBox}>
                                <Image
                                    style={styles.stretch}
                                    source={{
                                        uri: itemUser.picture,
                                    }}
                                />
                            </View>
                        </View>
                    </Card>
                ))}
            </CardStack>
        </View>
    );
}

const styles = StyleSheet.create({
    ...homeStyles,
});
