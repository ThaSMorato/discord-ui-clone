import React from 'react';

import { Container, Role, User, Avatar } from './styles';

const Roles = [
    {id: 11, name: 'God', },
    {id: 2, name: 'Disponivel'},
    {id: 1, name: 'OffLine'}
]

const Users = [
    {id: 1, isBot: false, name: 'user1', on: true, role: 11},
    {id: 12, isBot: false, name: 'user2', on: false, role: 11},
    {id: 13, isBot: false, name: 'user31', on: true, role: 11},
    {id: 14, isBot: true, name: 'BotG0d', on: true, role: 11},
    {id: 15, isBot: false, name: 'user51', on: false, role: 0},
    {id: 16, isBot: false, name: 'user61', on: false, role: 0},
    {id: 17, isBot: false, name: 'user71', on: false, role: 0},
    {id: 18, isBot: false, name: 'user71', on: false, role: 0},
    {id: 19, isBot: false, name: 'user81', on: false, role: 0},
    {id: 111, isBot: false, name: 'user331', on: false, role: 0},
    {id: 112, isBot: true, name: 'Botuser1', on: false, role: 0},
    {id: 113, isBot: true, name: 'Botuser2', on: true, role: 0},
    {id: 114, isBot: false, name: 'user1', on: true, role: 0},
    {id: 115, isBot: false, name: 'user23421', on: true, role: 0},
    {id: 116, isBot: false, name: 'user41', on: true, role: 0},
    {id: 117, isBot: false, name: 'user123', on: true, role: 0},
    {id: 118, isBot: false, name: 'user1321', on: true, role: 0},
    {id: 119, isBot: false, name: 'user11', on: true, role: 0},
    {id: 199, isBot: false, name: 'user81', on: false, role: 0},
    {id: 1112, isBot: false, name: 'user331', on: false, role: 0},
    {id: 1123, isBot: true, name: 'Botuser11', on: false, role: 0},
    {id: 1134, isBot: true, name: 'Botuser22', on: true, role: 0},
    {id: 1145, isBot: false, name: 'user1', on: true, role: 0},
    {id: 1156, isBot: false, name: 'user23421', on: true, role: 0},
    {id: 1167, isBot: false, name: 'user41', on: true, role: 0},
]

export interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot? 'bot' : ''} />
            <strong> {nickname} </strong>

            {isBot && <span>bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {

    return (
        <Container>
            {   
                Roles.map(role => {
                    
                    let filter = {
                        role: role.id !== 1 && role.id !== 2? role.id : 0, 
                        on: role.id !== 1? true : false 
                    }

                    let onlineUsers = Users.filter((user)=>{ 
                        if(role.id === 1){
                            if(user.on === filter.on) return true;
                        }
                        else if(user.on === filter.on && user.role === filter.role){ 
                            return true
                        } else return false
                    });

                    return (
                        <>
                            <Role key={role.id}>{role.name} - {onlineUsers.length }</Role>
                            {
                                onlineUsers.map(
                                    user => {
                                        
                                        return <UserRow key={user.id} nickname={user.name} isBot={user.isBot}/>

                                    }
                                )
                            }
                        </>
                    )
                })
            }
            
        </Container>
    )
}

export default UserList;