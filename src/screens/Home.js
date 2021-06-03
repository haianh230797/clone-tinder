import React, { useRef, useState, useEffect } from 'react';
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

const WIDTH_PANDER = Dimensions.get('window').width / 1.25;
const HEIGHT_PANDER = Dimensions.get('window').height / 2;

export default function Home() {
    const [data, setData] = useState([{ title: 1 }, { title: 2 }]);

    return (
        <View style={{ flex: 1 }}>
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
                onSwiped={() => console.log('onSwiped')}
                onSwipedLeft={() => {
                    let arr = [...data];
                    arr.push({ title: Math.floor(Math.random() * 100) });
                    setData(arr);
                }}
                onSwipedRight={() => {
                    let arr = [...data];
                    arr.push({ title: Math.floor(Math.random() * 100) });
                    setData(arr);
                }}>
                {data.map((item) => (
                    <Card style={[styles.card, styles.card1]}>
                        <Text style={styles.label}>{item.title}</Text>
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
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 320,
        height: 470,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 55,
        height: 55,
        borderWidth: 6,
        borderColor: 'rgb(246,190,66)',
        borderRadius: 55,
        marginTop: -15,
    },
    green: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#01df8a',
    },
    red: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#fd267d',
    },
});
