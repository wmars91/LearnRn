import React from 'React';
import {Container,Text,Content, H3} from 'native-base';

export default setting = () => (
    <Container>
        <Content>
            <H3 style={nbStyes.subtitle}>Settings</H3>
        </Content>
    </Container>
) 

const nbStyes = {
    subtitle: {
        textAlign: 'center'
    }
}