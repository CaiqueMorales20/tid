// Imported Components
import { StatusBar } from "expo-status-bar";

// Styled Components
import { Container, Content } from "./App.style";

// Screens
import { Todo } from "./src/screens/Todo/Todo";

// Functional Component
export default function App() {
	return (
		<Container>
			<StatusBar style="auto" />
			<Content>
				<Todo />
			</Content>
		</Container>
	);
}
