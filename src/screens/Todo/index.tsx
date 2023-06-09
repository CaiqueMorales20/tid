// Styled Components
import { TodoS, Title } from "./style";
import { TodoContent } from "../../components/TodoContent";
import { StatusBar } from "expo-status-bar";

// Functional Component
export const Todo = () => {
	// Variables

	// Rendering
	return (
		<TodoS>
			<StatusBar backgroundColor="red" />
			<Title>Things i Have To Do</Title>
			<TodoContent />
		</TodoS>
	);
};
