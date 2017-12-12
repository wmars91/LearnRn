import React, {Component} from 'react';
import { Container, Content, Text, Header, Left, Body, Right, Icon, Form, Item, Input, Label} from 'native-base';
import { TouchableOpacity} from 'react-native';
import axios from'axios';

export default class HeroAdd extends Component {

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    }

    constructor(){
        super();
        this.state = {
            name : "",
            title: "",
            role: "",
            speciality: "",
            imageUri: "",
            isValid: false
        }
    }

    handleDone(){
        // alert(JSON.stringify(this.state));

        const self = this;
        axios({
            method: 'post',
            url: 'http://rest.learncode.academy/api/yudi/heroes',
            data: this.state
        }).then(()=> {
            self.props.navigator.pop();
        });
    }

    _checkisValis(){
        const self = this;
        setTimeout(()=>{
            const {name, title, role, speciality, imageUri} = this.state;
            if(name != "" && title != "" && role != "" && speciality != "" && imageUri != "" ){
                self.setState({isValid: true});
            } else {
                self.setState({ isValid: false });
            }
        },1000);
        
    }

    renderHeader(){
        const {isValid} = this.state;
        return(
            <Header>
                <Left>
                    <TouchableOpacity onPress={()=> this.props.navigator.pop()}>
                        <Icon name="arrow-back" style={{ color: '#FFFFFF'}}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{ color: '#ffff'}}>Add Hero</Text>
                </Body>

                <Right>
                    {
                        isValid?
                        (
                            <TouchableOpacity onPress={()=> this.handleDone()}>
                                <Text style={{ color: '#ffff'}}>Done</Text>
                            </TouchableOpacity>
                        ):
                        (
                            <Text style={{ color: '#D0D0D0'}}></Text>
                        )
                    }
                </Right>
 
            </Header>
        )
    }

    render() {
        return(
            <Container>
                <Content>
                    {this.renderHeader()}
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input onChangeText={(text) =>{
                                this.setState({name: text});
                                this._checkisValis();
                            }}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Title</Label>
                            <Input onChangeText={(text) =>{
                                this.setState({title: text});
                                this._checkisValis();
                            }}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Role</Label>
                            <Input onChangeText={(text) =>{
                                this.setState({role: text});
                                this._checkisValis();
                            }}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Speciality</Label>
                            <Input onChangeText={(text) =>{
                                this.setState({speciality: text});
                                this._checkisValis();
                            }}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Image Uri</Label>
                            <Input onChangeText={(text) =>{
                                this.setState({imageUri: text});
                                this._checkisValis();
                            }}/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}