import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description  } from './styles';


const ChannelInfo: React.FC = () => {

    return (
        <Container>
            <HashTagIcon />
            <Title>Chat Name</Title>
            <Separator />
            <Description>Canal aberto para conversas</Description>
        </Container>
    )
}

export default ChannelInfo;