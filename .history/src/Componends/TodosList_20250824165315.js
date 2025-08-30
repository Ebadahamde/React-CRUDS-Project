import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

// TOGGLE GROUP
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./todo";
// TOGGLE GROUP
const Todos = [
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

const Todosjsx = Todos.map((x) => {
  return <Todo title={x.title} details={x.details} />;
});
export default function BasicCard() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        borderRadius: "100px",
      }}
    >
      <Card sx={{ maxHeight: "90vh", overflowY:"scroll" , minWidth: 900, background: "#9c9c9c35" }}>
        <CardContent>
          <h1
            style={{
              fontWeight: "700",
              fontSize: "40px",
              color:"#ffffff"
            }}
          >
            MY TODOS
          </h1>
          <Divider />

          {/* TOGGLE GROUP */}
          <ToggleButtonGroup
            color="primary"
            //   value={alignment}
            exclusive
            //   onChange={handleChange}
            aria-label="Platform"
            style={{   marginTop: "30px", marginBottom: "30px" }}
          >
            <ToggleButton value="web">Web</ToggleButton>
            <ToggleButton value="android">Android</ToggleButton>
            <ToggleButton value="ios">iOS</ToggleButton>
          </ToggleButtonGroup>
          {/* ====TOGGLE GROUP==== */}
          <Container sx={{}}>{Todosjsx}</Container>
          {/* inpout & button */}
          <Grid
            style={{
              marginTop: "30px",
              width: "97%",
              display: "flex",
              justifyContent: "center", // توسيط أفقي فقط
            }}
            container
            spacing={0}
          >
            <Grid size={8}>
              {" "}
              <TextField
                style={{ width: "90%" }}
                id="outlined-basic"
                label="inpout"
                variant="outlined"
              />
            </Grid>
            <Grid size={4}>
              {" "}
              <Button
                style={{ width: "90%", height: "100%" }}
                variant="contained"
              >
                supmet
              </Button>
            </Grid>
          </Grid>
          {/* ==== inpout & button ====*/}
        </CardContent>
      </Card>
    </Container>
  );
}
