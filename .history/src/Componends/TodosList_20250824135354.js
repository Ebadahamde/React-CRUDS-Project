import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// TOGGLE GROUP
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./todo";
// TOGGLE GROUP

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
      <Card sx={{ minWidth: 900, background: "#00000035" }}>
        <CardContent>
          <h1
            style={{
              fontWeight: "700",
              fontSize: "40px",
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
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <ToggleButton value="web">Web</ToggleButton>
            <ToggleButton value="android">Android</ToggleButton>
            <ToggleButton value="ios">iOS</ToggleButton>
          </ToggleButtonGroup>
          {/* ====TOGGLE GROUP==== */}
          <Todo />
          {/* inpout & button */}
          <Grid style={{marginTop:"30px", width}} container spacing={1}>
            <Grid size={8}>
              {" "}
              <TextField style={{width:"100%" }}
                id="outlined-basic"
                label="inpout"
                variant="outlined"
              />
            </Grid>
            <Grid size={4}>
              {" "}
              <Button style={{width:"100%" , height :"100%"}} variant="contained">supmet</Button>
            </Grid>
          </Grid>
          {/* ==== inpout & button ====*/}
        </CardContent>
      </Card>
    </Container>
  );
}
