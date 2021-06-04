import React from 'react';

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
            indicatorStyle={{ display: 'none ' }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
    );
}
