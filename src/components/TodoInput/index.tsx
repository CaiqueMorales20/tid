// Styled Components
import { InputIcon, InputS, TodoInputS } from "./style";

// Functional Component
export const TodoInput = () => {
	// Rendering
	return (
		<TodoInputS>
			<InputS placeholder="Add a task..." placeholderTextColor="#202124" />
			<InputIcon source={require("../../assets/icons/align.png")} />
		</TodoInputS>
	);
};
