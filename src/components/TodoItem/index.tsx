// Styled Components
import { IconContainer, ImageS, TextS, ViewS } from "./style";

// Types
import { TodoItemProps } from "./types";

// Functional Component
export const TodoItem = (props: TodoItemProps) => {
	// Rendering
	return (
		<ViewS>
			<TextS>{props.name}</TextS>
			<IconContainer>
				<ImageS source={require("../../assets/icons/edit.png")} />
				<ImageS source={require("../../assets/icons/delete.png")} />
			</IconContainer>
		</ViewS>
	);
};
