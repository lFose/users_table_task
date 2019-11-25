import styled from 'styled-components';

export default styled.span`
    font-family: Verdana;
    font-size: 14px;
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
    display: inline-block;
`;