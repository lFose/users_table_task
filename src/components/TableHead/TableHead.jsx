import React from 'react';
import styled from 'styled-components';

const TableHead = styled.thead`
    background-color: #f0f0f0;
`;

export default ({ children }) => (
    <TableHead>
        <tr>{children}</tr>
    </TableHead>
);