import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../Header';
import MainBlock from './Blocks/MainBlock';

const contentProfit = {
    title: 'Доход',
}

class MyPocket extends Component {
    render() {
        return (
            <View>
                <Header />
                <MainBlock content={contentProfit} />
            </View>
        );
    }
}

export default MyPocket;

