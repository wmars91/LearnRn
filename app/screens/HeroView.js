import React,{Component, PropTypes} from 'React';
import {Container, Text, Content, Header, Left, Body, Right, Icon, List, ListItem, Thumbnail} from 'native-base';
import {TouchableOpacity} from 'react-native';

class HeroView extends Component {

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    }

    renderHeader(){
        return(
            <Header>
                <Left>
                    <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                        <Icon name='arrow-back' style={{ color : '#ffff'}}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{ color : '#ffff'}}> Hero Detail</Text>   
                </Body>
                <Right/>
            </Header>
        )   
    }

    render(){
        const {hero} = this.props; 

        return (    
            <Container>
                <Content>
                    {this.renderHeader()}
                    <List>
                        <ListItem>
                        <Thumbnail square size={80} source={{ uri: hero.imageUri }} />
                        <Body>
                            <Text>{hero.name}</Text>
                            <Text note>{hero.title}</Text>
                        </Body>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Role</Text>
                        </ListItem>
                        <ListItem >
                            <Text>{hero.role}</Text>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Speciality</Text>
                        </ListItem>
                        <ListItem >
                            <Text>{hero.speciality}</Text>
                        </ListItem>

                         <ListItem itemDivider>
                            <Text>Skills</Text>
                        </ListItem>
                        <ListItem>
                            <Text></Text>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        )
    }
} 

HeroView.PropTypes = {
        hero: PropTypes.object.isRequired
};

export default HeroView;
