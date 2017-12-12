import React,{Component} from 'React';
import {TouchableOpacity} from 'react-native';
import {Container,Text,Content, List, ListItem, Thumbnail, Body, Left, Right, Icon, Header} from 'native-base';
import Hero from '../components/Hero';
import axios from'axios';

export default class Heroes extends Component{

    constructor(){
        super();
        this.state= {
           heroes: []
        }
    }

    componentDidMount(){
        // console.log(this.props.data);
        // const self = this;
        // axios.get('http://rest.learncode.academy/api/yudi/heroes')
        // .then(function (response) {
        //     console.log(response);
        //     self.setState({ heroes: response.data }) 
        // })
        // .catch(function (error) {
        //     console.log(error);   
        // });
        this.props.fetchHeroes();
    }
    
    // heroes = [       
    //     {
    //         name: "Miya",
    //         title: "Moonlight Archer",
    //         image: "http://www.mob-leg.pl/wp-content/uploads/2017/02/Miya.png"
    //     },
    //     {
    //         name: "Karina",
    //         title: "Shadow Blade",
    //         image: "https://img-cdn.mobilelegends.com/o_1biiq1h2t14gh1ln733f9ut1hvup.jpg?imageView2/0/w/400/h/300"
    //     }
    // ]

    renderHeader(){
        return(
            <Header>
                <Left/>
                <Body>
                   <Text style={{ color: '#ffff'}}>Heroes</Text> 
                </Body> 
                <Right>
                    <TouchableOpacity onPress={ ()=> this.props.navigator.push({screen: 'push.HeroAdd'})} >
                        <Icon name="add" style={{ color: '#ffff'}}/> 
                    </TouchableOpacity>
                </Right>
            </Header>
        )
    }

    render() { 
        if(this.props.data.fetching){
            return(
                <Content>
                    <Text>Loading...</Text>
                </Content>
            )
        }

        return(
            <Container>
                <Content>
                    {this.renderHeader()}
                    <List>
                        {this.props.data.heroes.map((hero, key)=> <Hero key={key} hero={hero} {...this.props}/> )}
                    </List>
                </Content>
            </Container>
        )
    }
}