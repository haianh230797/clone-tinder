import React, { useCallback, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Animated,
    StyleSheet,
    Text,
    View,
    PanResponder,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import normalize from 'react-native-normalize';
import Colors from '@components/Colors';
import { Icon } from 'native-base';

const BASE_LINK = 'https://randomuser.me/api/0.4/?randomapi';

export default function Home() {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        getData();
    }, [getData]);

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

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerBox} />
            <CardStack
                style={styles.content}
                renderNoMoreCards={() => (
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: 18,
                            color: 'gray',
                        }}>
                        No more cards :(
                    </Text>
                )}
                onSwiped={() => getData()}>
                {dataUser.map((item) => (
                    <Card
                        style={styles.card}
                        onSwipedLeft={() => {}}
                        onSwipedRight={() => {
                            console.log(item);
                        }}>
                        <View>
                            <View style={styles.topBox} />
                            <View style={styles.bottomBox}>
                                <View style={styles.addressBox}>
                                    <Text style={styles.addressTitle}>
                                        My address is{' '}
                                    </Text>
                                    <Text style={styles.addressContent}>
                                        {item.location.street}
                                    </Text>
                                </View>
                                <View style={styles.listFeature}>
                                    <TouchableOpacity>
                                        <Icon
                                            name="user-circle"
                                            type="FontAwesome"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="calendar" type="Entypo" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon
                                            name="location-outline"
                                            type="Ionicons"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon
                                            name="call-outline"
                                            type="Ionicons"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="unlocked" type="Fontisto" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.stretchBox}>
                                <Image
                                    style={styles.stretch}
                                    source={{
                                        uri: item.picture,
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
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ATHENS_GRAY,
    },
    headerBox: {
        height: 120,
        backgroundColor: Colors.OXFORD_BLUE,
    },
    card: {
        width: normalize(360, 'width'),
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        bottom: normalize(50, 'height'),
    },
    stretchBox: {
        height: normalize(170, 'height'),
        width: normalize(200, 'width'),
        position: 'absolute',
        top: normalize(40),
        alignSelf: 'center',
        borderRadius: 300,
        borderWidth: 0.5,
        borderColor: Colors.DUSTY_GRAY,
        justifyContent: 'center',
        backgroundColor: Colors.CONCRETE,
    },
    stretch: {
        height: '95%',
        width: '95%',
        borderRadius: 300,
        alignSelf: 'center',
    },
    topBox: {
        height: normalize(120, 'height'),
        borderBottomWidth: 2,
        borderColor: Colors.SILVER,
        backgroundColor: Colors.ATHENS_GRAY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    bottomBox: {
        height: normalize(450, 'height'),
        backgroundColor: Colors.CONCRETE,
    },
    addressBox: {
        top: normalize(120),
        alignSelf: 'center',
    },
    addressTitle: {
        fontSize: 25,
        color: Colors.SILVER,
        alignSelf: 'center',
    },
    addressContent: {
        fontSize: 35,
        color: Colors.OXFORD_BLUE,
        alignSelf: 'center',
    },
    listFeature: {
        flexDirection: 'row',
    },
});
