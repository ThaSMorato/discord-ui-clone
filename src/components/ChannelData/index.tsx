import React, {useRef, useEffect } from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { Mention } from '../ChannelMessage/styles';

const messages = [
    {id: 1, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 2, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 3, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 4, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 5, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 6, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 7, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 8, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 9, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 10, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 11, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 12, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 13, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 14, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 15, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 16, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 17, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 18, author: "user1321" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 19, author: "BotG0d" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: true, hasMention: false},
    {id: 20, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 21, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 22, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 23, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 24, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 25, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 26, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 27, author: "user23421" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 28, author: "BotG0d" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: true, hasMention: false},
    {id: 29, author: "user51" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 30, author: "user51" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 31, author: "user51" , date: "01/01/2030" , content: "any longer and detailed message for the sake of the example", isBot: false, hasMention: false},
    {id: 32, author: "user51" , date: "01/01/2030" , content: "@user1 any longer and detailed message for the sake of the example", isBot: false, hasMention: true},
    {id: 33, author: "user1" , date: "01/01/2030" , content: "@BotG0d say to everyone", isBot: false, hasMention: false},
    {id: 34, author: "BotG0d" , date: "01/01/2030" , content: "@everyone any longer and detailed message for the sake of the example", isBot: true, hasMention: true}
]

const createMention = (mention: string) => {
    let message = mention.split(" ");
    let msgMention = mention.match(/(@[a-zA-Z]*[0-9]*)/gm);


    return(
        <>
        {
            message.map(
                (m, index) => {
                    if(msgMention?.includes(m)){
                        return <Mention key={index}> {m}  </Mention>
                    }else{
                        return m + " ";
                    }
                }
            )
        }
        </>
    )

}


const ChannelData: React.FC = () => {

    const msgRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = msgRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [msgRef]);
    
    return (
        <Container>
           <Messages>
                {
                    messages.map((message) => {
                        return <ChannelMessage 
                                    key={message.id}
                                    date={message.date}
                                    author={message.author}
                                    content={createMention(message.content)}
                                    isBot={message.isBot}
                                    hasMention={message.hasMention}
                                />
                    })
                }
           </Messages>

           <InputWrapper>
                <Input type="text" placeholder="Conversar em #canal" />
                <InputIcon />
           </InputWrapper>
        </Container>
    )
}

export default ChannelData;