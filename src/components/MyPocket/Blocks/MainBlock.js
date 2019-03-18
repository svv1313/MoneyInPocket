import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from '../../../styles';
import PropTypes from 'prop-types';

let defaultContent = [
    { title: 'Зарплата', cash: '3000$', icon: '', _id: 1 },
    { title: 'Депозит', cash: '300$', icon: '', _id: 2 },
    { title: 'Прочие', cash: '10$', icon: '', _id: 3 },
]

class MainBlock extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.content.title}</Text>
                <View style={style.blockStyle}>
                    {defaultContent.map(item => {
                        return (<View key={item._id}>
                            <Text>{item.title}</Text>
                            <Text>{item.cash}</Text>
                        </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}

MainBlock.propTypes = {
    content: PropTypes.object.isRequired
}

export default MainBlock;