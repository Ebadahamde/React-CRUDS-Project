import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <Card sx={{ background: "#00000035", minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid  size={7} >
           <h3 style={{fontSize:"" }}>first todo</h3>
          </Grid>
          <Grid   size={5}>
          
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
