// Types
export type TodoContextProps = {
	todoList: any[];
	setTodoList: (value: any) => void;
};

export type ContextComponentProps = {
	children: React.ReactNode;
};
