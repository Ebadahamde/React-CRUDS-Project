import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./Componends/TodosList";
import { createTheme, themeprovider } from "@mui/material/styles";
im
const theme = createTheme({
  typography: {
    fontFamily: ["syne"],
  },
});

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
