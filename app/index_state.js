import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
// import Cup from './components/Cup';

class Index extends Component {

    // state = {
    //     number: 0,
    //     name:""
    // }

    constructor(){
        super();
        this.state = {
            number: 0,
            name:""
        }
    }

    componentDidMount(){
        this.setState({
            number: this.state.number + 1
        })
    }


    handleClick(myName){
        // console.log('my name is '+ myName);
        this.setState({
            number: this.state.number + 1,
            name: "Wahyudin Marsaoly"
        })
    }


    render(){
        const myName = "Wahyudin Marsaoly";
        return (
            <View>
                {/*<Cup/>*/}
                <Text>Please Click Button Below!</Text>
                <Text>Nama: {this.state.name}</Text>
                <Text>{this.state.number}</Text>
                <TouchableOpacity onPress={()=> this.handleClick(myName)}>
                    <Text>Click!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Index;

