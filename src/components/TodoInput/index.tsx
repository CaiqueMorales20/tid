// Imports
import { useContext, useState } from "react";

// Styled Components
import { InputIcon, InputS, TodoInputS } from "./style";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";

// Functional Component
export const TodoInput = () => {
	// Variables
	const [inputText, setInputText] = useState("");
	const { setTodoList } = useContext(TodoContext) as TodoContextProps;

	// Functions
	const addTask = () => {
		setTodoList((prev: any) => [...prev, inputText]);
		setInputText("");
	};

	// Rendering
	return (
		<TodoInputS>
			<InputS
				value={inputText}
				onChangeText={(e: any) => setInputText(e)}
				placeholder="Add a task..."
				placeholderTextColor="#202124"
				onSubmitEditing={() => addTask()}
			/>
			<InputIcon source={require("../../assets/icons/align.png")} />
		</TodoInputS>
	);
};
