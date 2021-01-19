import styled from 'styled-components';
import { PersonAdd, Settings } from 'styled-icons/material';
import { Hashtag} from 'styled-icons/heroicons-outline';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div{
        display: flex;
        align-items: center;
    }

    >div span {
        font-size: 15px;
        color: var(--senary);
        margin-left: 5px;
    }

    > .icons-wrapper svg{
        display: none;
    }

    &.active, &:hover {
        background-color: var(--quinary);

        > div span {
            color: #fff;
        }

        
        > .icons-wrapper svg{
            display: block;
        }

    }

`;

export const HashTagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: #fff;
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    margin-left: 5px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: #fff;
    }
`;
