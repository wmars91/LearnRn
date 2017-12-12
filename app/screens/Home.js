import React from 'React';
import {Container, Text, Content, Thumbnail, Button} from 'native-base';
import '../components/TryRedux';

export default home = (props) => (
    <Container style={{ justifyContent: "center", alignSelf: "center" }}>
        <Content>
            <Thumbnail large source={{uri: 'https://3.bp.blogspot.com/-IJpVSekzVw8/WGPI7yeAejI/AAAAAAAAAq8/1dDFI-oL5Fghx5GjurUVuSJJ8gkkHjrKACLcB/s1600/logo.png'}} 
            style={{
                alignItems: 'center',
                width: 350,
                height: 200
            }}/>
            <Text style={nbStyle.subtitle}>
                Welcome to Mobile Legend
            </Text>
            <Text style={nbStyle.subtitle}>
                Heroes Dictionary
            </Text>
            <Text style={nbStyle.subtitle}>
                Start Exploring/Creating your Favorites Heroes
            </Text> 
            <Button 
                block 
                style={nbStyle.btn} 
                onPress={()=> props.navigator.switchToTab({
                    tabIndex: 1
                }) }
            >
                <Text>Start</Text>
            </Button>
        </Content>
    </Container>
) 

const nbStyle = {
    subtitle: {
        textAlign: 'center',
        color: '#ACD2FA',
        marginTop: 10
    },
    btn: {
        marginTop: 15
    }
}
