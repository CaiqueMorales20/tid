// Styled Components
import { TodoS, TextS } from "./style";
import { TodoContent } from "../../components/TodoContent";

// Functional Component
export const Todo = () => {
	// Variables

	// Rendering
	return (
		<TodoS>
			<TextS>Todo</TextS>
			<TodoContent />
		</TodoS>
	);
};
