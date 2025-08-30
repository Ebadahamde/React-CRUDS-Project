import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./Componends/TodosList";
import { createTheme, themeprovider } from "@mui/material/styles";
import { MyToDoContext } from "./contexts/Todoscontext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

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
    const [Todos, settodos] = useState(initialtodos);
  
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
      <MyToDoContext.Provider value={}>
      <BasicCard />
      </MyToDoContext.Provider>
    </div>
    </themeprovider>
  );
}

export default App;
