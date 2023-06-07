// Imports
import { createContext, useState } from "react";

// Types
import { ContextComponentProps, TodoContextProps } from "./types";

// Context
export const TodoContext = createContext<TodoContextProps | null>(null);

// Functional Component
export const ContextComponent = ({ children }: ContextComponentProps) => {
	// Variables
	const [todoList, setTodoList] = useState(["Tarefa", "Tarefa 2"]);

	// Rendering
	return (
		<TodoContext.Provider value={{ todoList }}>{children}</TodoContext.Provider>
	);
};
