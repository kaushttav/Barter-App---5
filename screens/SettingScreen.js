import React, { Component } from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class SettingsScreen extends Component{
    render() {
        return(
            <View style = {{
                flex: 1,
                backgroundColor: '#FFE0B2'
            }}>
                <SafeAreaProvider>
                <Header title = "Settings"/>
                </SafeAreaProvider>
                <Text style ={{
                    alignSelf: 'center'
                }}>Settings</Text>
            </View>
        )
    }
}