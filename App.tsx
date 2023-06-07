// Imported Components
import { StatusBar } from "expo-status-bar";
import { ContextComponent } from "./src/context/ContextComponent";

// Styled Components
import { Container, Content } from "./App.style";

// Screens
import { Todo } from "./src/screens/Todo";

// Functional Component
export default function App() {
	return (
		<ContextComponent>
			<Container>
				<StatusBar style="auto" />
				<Content>
					<Todo />
				</Content>
			</Container>
		</ContextComponent>
	);
}
