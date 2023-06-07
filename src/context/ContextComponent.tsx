// Imports
import { createContext, useState } from "react";

// Types
import { ContextComponentProps, TodoContextProps } from "./types";

// Context
export const TodoContext = createContext<TodoContextProps | null>(null);

// Functional Component
export const ContextComponent = ({ children }: ContextComponentProps) => {
	// Variables
	const [todoList, setTodoList] = useState([]);

	// Rendering
	return (
		<TodoContext.Provider value={{ todoList, setTodoList }}>
			{children}
		</TodoContext.Provider>
	);
};
