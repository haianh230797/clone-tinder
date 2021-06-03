import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import TopTap from '@routes/index';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <TopTap />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
