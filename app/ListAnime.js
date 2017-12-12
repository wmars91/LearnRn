import React,{Component} from 'react';
import { Container, Header, Content, List } from 'native-base'; 
import Anime from './components/Anime';

export default class ListAnime extends Component {

    animes = [
        'List 1',
        'List 2',
        'List 3',
        'List 4'
    ]

    constructor(){
        super();
     //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.animes)
        // }
    }

    render(){
        return(
            <Container>
                <Header />
                <Content>
                    <List>
                        {this.animes.map((anime, key) => <Anime key={key} anime={anime} />)}
                    </List>
                </Content>
            </Container>
        )
    }

}