import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./Componends/TodosList";
import { createTheme, themeprovider } from "@mui/material/styles";
import { MyToDoContext } from "./contexts/Todoscontext";
const theme = createTheme({
  typography: {
    fontFamily: ["syne"],
  },
});

const initialtodos = [
  {
    id: uuidv4(),
    title: "text",
    details: "Quis reprehenderit voluptate enim qui ut reprehenderit. ",
    iscompleted: false,
  },
  {
    id: uuidv4(),
    title: "text ||",
    details: " Quis reprehenderit voluptate enim qui ut reprehenderit. ",
    iscompleted: false,
  },
  {
    id: uuidv4(),
    title: "text |||",
    details: " Quis reprehenderit voluptate enim qui ut reprehenderit. ",
    iscompleted: false,
  },
];









function App() {
  return (
    <themeprovider theme={theme}>
    <div
      className="App"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        fontFamily:"syne"
      }}
    >
      <BasicCard />
    </div>
    </themeprovider>
  );
}

export default App;
