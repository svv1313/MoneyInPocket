import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../styles';

class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text>Header</Text>
                <Text>Option</Text>
            </View>
        );
    }
}

export default Header;