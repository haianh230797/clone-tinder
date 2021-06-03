import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '@screens/Home';
import Favorite from '@screens/Favorite';

const Tab = createMaterialTopTabNavigator();

export default function TopTap() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { backgroundColor: 'powderblue' },
            }}
            swipeEnabled={false}
            tabBarLabel={false}
            indicatorStyle={{ backgroundColor: 'red' }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Favorite} />
        </Tab.Navigator>
    );
}
