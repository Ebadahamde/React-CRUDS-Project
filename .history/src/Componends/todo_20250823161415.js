import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <Card sx={{ background: "#00000035", minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid  size={7} >
           <h5>first todo</h5>
          </Grid>
          <Grid   size={5}>
          icons
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
