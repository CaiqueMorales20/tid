// Imports
import { useContext, useState } from "react";
import {
	NativeSyntheticEvent,
	TextInputChangeEventData,
	TextInputSubmitEditingEventData,
} from "react-native";

// Styled Components
import {
	IconContainer,
	ImageS,
	InputS,
	PressableS,
	TextS,
	ViewS,
} from "./style";

// Types
import { TodoItemProps } from "./types";

// Context
import { TodoContext } from "../../context/ContextComponent";
import { TodoContextProps } from "../../context/types";

// Functional Component
export const TodoItem = (props: TodoItemProps) => {
	// Variables
	const [renaming, setRenaming] = useState(false);
	const [newName, setNewName] = useState("");
	const { deleteTask, updateTask } = useContext(
		TodoContext
	) as TodoContextProps;

	// Function
	const onChange = (
		e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	): void => {
		const value = e.nativeEvent.text;
		setNewName(value);
	};

	// Rendering
	return (
		<ViewS>
			{renaming ? (
				<InputS
					autoFocus
					placeholder={props.name}
					defaultValue={props.name}
					onChange={onChange}
					onEndEditing={() => {
						updateTask(props.id, newName);
					}}
				/>
			) : (
				<TextS>{props.name}</TextS>
			)}
			<IconContainer>
				<PressableS onPress={() => setRenaming(true)}>
					<ImageS source={require("../../assets/icons/edit.png")} />
				</PressableS>
				<PressableS onPress={() => deleteTask(props.id)}>
					<ImageS source={require("../../assets/icons/delete.png")} />
				</PressableS>
			</IconContainer>
		</ViewS>
	);
};
