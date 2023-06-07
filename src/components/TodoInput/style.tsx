// Imports
import styled from "styled-components/native";

// Styled Components
export const TodoInputS = styled.View`
	flex-direction: row;
	align-items: center;
	position: relative;
	background-color: #fefefe;
	padding: 15px 20px;
	padding-left: 0;
`;

export const InputS = styled.TextInput`
	height: 100%;
	width: 100%;
	color: #fefefe;
	padding-left: 30px;
	z-index: 2;
`;

export const InputIcon = styled.Image`
	width: 20px;
	height: 20px;
	position: absolute;
	left: 5px;
`;
