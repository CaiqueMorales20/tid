// Imports
import { createContext, useEffect, useState } from "react";

// Types
import { ContextComponentProps, TodoContextProps } from "./types";

// Context
export const TodoContext = createContext<TodoContextProps | null>(null);

// Functional Component
export const ContextComponent = ({ children }: ContextComponentProps) => {
	// Variables
	const [todoList, setTodoList] = useState([]);
	const [inputText, setInputText] = useState("");
	const [prevId, setPrevId] = useState(0);

	// Functions
	const addTask = () => {
		if (inputText.length == 0) return;
		setTodoList((prev: any) => [
			...prev,
			{ name: inputText, id: prevId == 0 ? 1 : prevId + 1 },
		]);
		setPrevId((prev) => prev + 1);
		setInputText("");
	};

	const deleteTask = (idToDelete: number) => {
		setTodoList(
			todoList.filter((item) => {
				return item.id != idToDelete;
			})
		);
	};

	const updateTask = (idToUpdate: number, newName: string) => {
		setTodoList(
			todoList.map((item) => {
				if (item.id === idToUpdate) {
					return { ...item, name: newName };
				}
			})
		);
	};

	useEffect(() => {
		console.log(todoList);
	}, [todoList]);

	// Rendering
	return (
		<TodoContext.Provider
			value={{
				todoList,
				setTodoList,
				inputText,
				setInputText,
				addTask,
				deleteTask,
				updateTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
