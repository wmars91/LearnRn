import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Glass from './Glass';

export default class Cup extends Component {
    render(){
        return(
            <View>
                <Text>Cup</Text>
                <Glass/>
            </View>
        )
    }
}