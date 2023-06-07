// Imports
import { useContext } from "react";

// Imported Components
import { TodoItem } from "../../components/TodoItem";

// Styled Components
import { TodoContentS } from "./style";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";

// Functional Component
export const TodoContent = () => {
	// Variables
	const { todoList } = useContext(TodoContext) as TodoContextProps;

	// Rendering
	return (
		<TodoContentS>
			{todoList.map((item, index) => {
				// Rendering
				return <TodoItem name={item} key={index} />;
			})}
		</TodoContentS>
	);
};
