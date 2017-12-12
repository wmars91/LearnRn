import React from 'react';
import {Container, Header, Content, Footer, Left, Body, Right, Icon, Text, Button, Card, CardItem} from 'native-base';


export default NativeBaseAnatomy = () => (
    <Container>
        <Header>
            <Left>
                <Icon name="arrow-back" style={{color: '#ffff'}}/>
            </Left>
            <Body>
                <Text style={{color: '#ffff'}}>Body</Text>
            </Body>
            <Right />
        </Header>

        <Content>
            <Card>
                <CardItem header>
                    <Text>NativeBase Card</Text>
                </CardItem>
                <CardItem>
                    <Icon active name="logo-googleplus" style={{color: '#ef3232'}} />
                    <Text>Google Plus</Text>
                    <Right>
                        <Icon name="arrow-forward" style={{color: '#324bef'}}/>
                    </Right>
                </CardItem>
           </Card>
        </Content>

        <Footer>
            <Text style={{color: '#ffff'}}>Footer</Text>
        </Footer>
    </Container> 
)