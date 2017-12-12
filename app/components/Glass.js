import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Coffee from './Coffee';

export default class Glass extends Component {
    render(){
        const info = {
            color: "Black near Brown",
            taste: "realy good"
        }
        return(
            <View>
                <Text>Glass</Text>
                <Coffee type="Expresso" bean="Robusta" volume={1} info={info}/>
            </View>
        );
    };
};