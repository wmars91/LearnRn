import React from 'React';
import {ListItem, Thumbnail, Body, Text} from 'native-base';


export default Hero = ({hero, navigator}) => (
        <ListItem 
            onPress={()=>navigator.push({
                screen: 'push.HeroView',
                passProps: {
                    hero : hero
                }
            })}
        >
            <Thumbnail 
            square
            size={80} 
            source={{ uri: hero.imageUri }}/>
            <Body>
                <Text>{hero.name}</Text>
                <Text>{hero.title}</Text>
            </Body>
        </ListItem>
)