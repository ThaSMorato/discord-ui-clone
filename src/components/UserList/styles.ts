import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;
    background-color: var(--secondary);

    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role = styled.span`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User = styled.div`
    display: flex;
    margin-top: 5px;
    padding: 5px;
    align-items: center;
    cursor:pointer;
    border-radius: 4px;
    background: transparent;
    transition: background .2s;
    &:hover {
        background: rgba(255,255,255, .1);
    }

    > strong {
        margin-left: 5px;
        font-weight: 500;
        color: #fff;
        opacity: .7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    >span {
        text-transform: uppercase;
        margin-left: 9px;
        color: #fff;
        background-color: var(--discord);
        border-radius: 4px;
        padding: 4px 5px;

        font-weight: bold;
        font-size: 11px;
    }
`;

export const Avatar  = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    background: var(--primary);
    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`;
