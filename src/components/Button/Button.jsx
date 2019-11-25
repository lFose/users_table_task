import styled from 'styled-components';

const Button = styled.button`
    padding: 14px 20px;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 12px 18px -6px rgba(0, 59, 133, 0.24), 0 8px 5px -6px rgba(0, 48, 109, 0.43);
    ${({ disable }) =>  disable ? 
    `background-color: #aaaaaa` : 
    `
    background-color: #2988ff;
    &:hover {
        cursor: pointer;
        background-color: #4e9cff;
    };
    &:active {
        background-color: #1f61b4
    };
    `}
`;

export default Button;