import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategory } from './styles';

const channels = [
    {id: 1, active: false, name: 'chat-livre'},
    {id: 2, active: false, name: 'CSGO'},
    {id: 3, active: false, name: 'LOL'},
    {id: 4, active: false, name: 'VALORANT'},
    {id: 5, active: false, name: 'Balada'},
    {id: 6, active: true, name: 'AFK~~*'}
]

const ChannelList: React.FC = () => {

    return (
        <Container>
            <Category> 
                <span>Canais de text</span>
                <AddCategory />
            </Category>

            { 
                channels.map((channel) => {
                    return ( <ChannelButton channelName={channel.name} key={channel.id} selected={channel.active} /> )
                    
                })
            } 
        </Container>
    )
}

export default ChannelList;