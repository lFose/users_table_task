import React from 'react';
import styled from 'styled-components';
import { TypographyTitle } from 'components/Typography';

const Overlay = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, .5);
`;

const Center = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 36px 24px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export default ({ open = false, title = '', children = [] }) => (
    open ?
        <Overlay>
            <Center>
                <Content>
                    <div style={{marginBottom: '41px'}}>
                        <TypographyTitle>{title}</TypographyTitle>
                    </div>
                    {children}
                </Content>
            </Center>
        </Overlay> :
        null
);