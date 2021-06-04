import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { queryAllFavoriteList } from '@storage/Method';

export default function Favorite() {
    const [data, setData] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            queryAllFavoriteList()
                .then((res) => setData(res))
                .catch((err) => {
                    console.log('err when get data fav: ', err);
                });
        }, []),
    );

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    style={styles.stretch}
                    source={{
                        uri: item.picture,
                    }}
                />
                <Text style={styles.stretchText}>{item.lastName}</Text>
            </View>
        );
    };
    return (
        <ScrollView>
            <FlatList
                data={data}
                renderItem={renderItem}
                style={styles.flatlist}
                numColumns={4}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        flexDirection: 'row',
    },
    itemContainer: {},
    stretch: {
        height: 150,
        width: 80,
        alignSelf: 'center',
        margin: 10,
    },
    stretchText: {
        alignSelf: 'center',
    },
});
