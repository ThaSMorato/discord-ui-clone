import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const userData = {
    name: "Any User",
    id: "#4132"
}

const UseInfo: React.FC = () => {

    return (
        <Container>
          <Profile>
            <Avatar />

            <UserData>
                <strong>{userData.name}</strong>
                <span>{userData.id}</span>
            </UserData>
          </Profile>

           <Icons>
               <MicIcon />
               <HeadphoneIcon />
               <SettingsIcon />
           </Icons>
        </Container>
    )
}

export default UseInfo;