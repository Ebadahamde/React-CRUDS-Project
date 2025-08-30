import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
// TOGGLE GROUP
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// TOGGLE GROUP

export default function BasicCard() {
  return (
    <Container maxWidth="md"   sx={{  display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
>
      <Card sx={{ minWidth: 900  , background:"#00000035"}}>
        <CardContent>
            <h1 style={{fontSize:"40PX"}}>MY TODOS</h1>
                  <Divider />


                  
                  {/* TOGGLE GROUP */}
                      <ToggleButtonGroup
      color="primary"
    //   value={alignment}
      exclusive
    //   onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
                  {/* ====TOGGLE GROUP==== */}

         
        </CardContent>
      </Card>
    </Container>
  );
}
