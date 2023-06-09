// Types
export type TodoContextProps = {
	todoList: any[];
	setTodoList: (value: any) => void;
	inputText: string;
	setInputText: (value: string) => void;
	addTask: () => void;
	deleteTask: (idToDelete: number) => void;
	updateTask: (idToUpdate: number, newName: string) => void;
};

export type ContextComponentProps = {
	children: React.ReactNode;
};
