import normalize from 'react-native-normalize';
import { StyleSheet } from 'react-native';

import Colors from '@components/Colors';

export const homeStyles = StyleSheet.create({
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
        paddingTop: normalize(120),
        paddingBottom: normalize(200),
        justifyContent: 'space-between',
    },
    addressBox: {
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
        paddingHorizontal: normalize(50, 'width'),
    },
    listFeatureItem: {
        paddingHorizontal: normalize(10, 'width'),
    },
    listFeatureIcon: {
        fontSize: 40,
    },
});
