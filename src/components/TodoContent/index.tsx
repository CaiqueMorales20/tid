// Imports
import { useContext } from "react";

// Imported Components
import { TodoItem } from "../../components/TodoItem";

// Styled Components
import { TodoContentS } from "./style";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";
import { TodoInput } from "../TodoInput";

// Functional Component
export const TodoContent = () => {
	// Variables
	const { todoList } = useContext(TodoContext) as TodoContextProps;

	// Rendering
	return (
		<TodoContentS>
			<TodoInput />
			{todoList.map((item) => {
				// Rendering
				return <TodoItem name={item.name} id={item.id} key={item.id} />;
			})}
		</TodoContentS>
	);
};
