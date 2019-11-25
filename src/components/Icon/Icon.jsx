import styled from 'styled-components'

export default styled.div`
	width: ${({ width }) => width ? width : '100%'};
	height: ${({ height }) => height ? height : '100%'};
	${({ bg }) => bg ? 
		`background-image: url(${bg});` : 
		``};
	background-size: ${({ size }) => size ? size : 'contain'};
	background-repeat: no-repeat;
	background-position: center;
	padding: 0;
	&:hover {
		cursor: pointer;
	}
`;