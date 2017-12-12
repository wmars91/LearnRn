
import axios from 'axios';

export function fetchHeroes(){
    return {
        type: 'FETCH_HEROES',
        payload: axios.get('http://rest.learncode.academy/api/yudi/heroes')
    }
}
