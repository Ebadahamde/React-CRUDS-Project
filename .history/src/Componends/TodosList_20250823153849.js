import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

export default function BasicCard() {
  return (
    <Container maxWidth="md"   sx={{  display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
>
      <Card sx={{ minWidth: 900  , background:"#00000035"}}>
        <CardContent>
            <h1 style={{fontSize:"40PX"}}>MY TODOS</h1>
         
        </CardContent>
      </Card>
    </Container>
  );
}
