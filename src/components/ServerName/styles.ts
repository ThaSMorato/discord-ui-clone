import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px 0 16px;

    background-color: var(--secondary);

    box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
    z-index: 2;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;

    color: #fff;
    cursor: pointer;
`;
