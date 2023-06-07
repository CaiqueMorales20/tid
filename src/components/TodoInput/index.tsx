// Imports
import { useContext } from "react";

// Styled Components
import { InputIcon, InputS, TodoInputS } from "./style";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";

// Functional Component
export const TodoInput = () => {
	// Variables
	const { inputText, setInputText, addTask } = useContext(
		TodoContext
	) as TodoContextProps;

	// Rendering
	return (
		<TodoInputS>
			<InputS
				placeholder="Add a task..."
				placeholderTextColor="#202124"
				value={inputText}
				onChangeText={(e: any) => setInputText(e)}
				onSubmitEditing={() => addTask()}
			/>
			<InputIcon source={require("../../assets/icons/align.png")} />
		</TodoInputS>
	);
};
