// Imports
import { useContext } from "react";

// Styled Components
import { IconContainer, ImageS, PressableS, TextS, ViewS } from "./style";

// Types
import { TodoItemProps } from "./types";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";

// Functional Component
export const TodoItem = (props: TodoItemProps) => {
	// Variables
	const { deleteTask } = useContext(TodoContext) as TodoContextProps;

	// Rendering
	return (
		<ViewS>
			<TextS>{props.name}</TextS>
			<IconContainer>
				<ImageS source={require("../../assets/icons/edit.png")} />
				<PressableS onPress={() => deleteTask(props.id)}>
					<ImageS source={require("../../assets/icons/delete.png")} />
				</PressableS>
			</IconContainer>
		</ViewS>
	);
};
