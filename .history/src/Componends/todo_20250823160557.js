import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid sx={{background: "#123123"}} size={8} >
           <h5>first todo</h5>
          </Grid>
          <Grid  sx={{background: "#00ff8cff"}} size={4}>
          icons
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
