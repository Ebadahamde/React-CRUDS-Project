import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./Componends/TodosList";
import { createTheme, themeprovider } from "@mui/material/styles";
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
        backgroundImage: "url('/Background2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        fontFamily:"s"
      }}
    >
      <BasicCard />
    </div>
    </themeprovider>
  );
}

export default App;
