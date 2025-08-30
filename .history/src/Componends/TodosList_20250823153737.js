import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function BasicCard() {
  return (
    <Container maxWidth="md"   sx={{  display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
>
      <Card sx={{ minWidth: 900  , background:"#00000035"}}>
        <CardContent>
            <h1MY TODOS</h1>
         
        </CardContent>
      </Card>
    </Container>
  );
}
