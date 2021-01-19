import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const servers = [
    {id: 1, hasNotifications: false, mentions: 0},
    {id: 2, hasNotifications: false, mentions: 0},
    {id: 3, hasNotifications: false, mentions: 4},
    {id: 4, hasNotifications: true, mentions: 0},
    {id: 5, hasNotifications: false, mentions: 10},
    {id: 6, hasNotifications: false, mentions: 0},
    {id: 7, hasNotifications: true, mentions: 6},
    {id: 8, hasNotifications: false, mentions: 0},
    {id: 9, hasNotifications: false, mentions: 0},
    {id: 10, hasNotifications: false, mentions: 9},
    {id: 11, hasNotifications: false, mentions: 0},
    {id: 12, hasNotifications: false, mentions: 0},
    {id: 13, hasNotifications: false, mentions: 4},
    {id: 14, hasNotifications: true, mentions: 0},
    {id: 15, hasNotifications: false, mentions: 10},
    {id: 16, hasNotifications: false, mentions: 0},
    {id: 17, hasNotifications: true, mentions: 6},
    {id: 18, hasNotifications: false, mentions: 0},
    {id: 19, hasNotifications: false, mentions: 0},];

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome mentions={0}/>

          <Separator />

            {
                servers.map((
                    server =>{ 
                        return (<ServerButton key={server.id} hasNotifications={server.hasNotifications} mentions={server.mentions}/>)
                    } 
                ))
            }

      </Container>
  );
}

export default ServerList;