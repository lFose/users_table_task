import React from 'react';
import styled from 'styled-components';

import chevron from 'static/ico-chevron-down.svg';

const Checkbox = styled.div`
    & input[type="checkbox"] {
        opacity: 0;
        & + label::after {
            content: none
        }
        &:checked + label::after {
            content: '';
        }
    };
    & label::before {
        content: "";
        position: absolute;
        top: -3px;
        left: -15px;
        display: inline-block;
        
        height: 24px;
        width: 24px;
        
        border: 1px solid #2988ff;
        background-color: #f5faff;
        border-radius: 4px;
    };
    & label::after {
        content: '';
        position: absolute;
        left: -10px;
        top: 3px;
        display: inline-block;
        height: 16px;
        width: 16px;
        background-image: url(${chevron});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    & label {
        position: relative;
    }
`;

export default ({ id, getRef, onChange }) => (
    <Checkbox>
        <input ref={getRef} 
            type='checkbox' 
            id={`checkbox_${id}` }
            onChange={onChange} />
        <label htmlFor={`checkbox_${id}`} />
    </Checkbox>
)