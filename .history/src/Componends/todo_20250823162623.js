import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from '@mui/material/Stack';
import BorderColorIcon from '@mui/icons-material/BorderColor';


export default function Todo() {
  return (
    <Card sx={{ background: "#00000035", minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={0}>
          <Grid size={7}>
            <h3 style={{ fontSize: "24px", textAlign: "left" }}>First Todo</h3>
          </Grid>
          <Grid size={5}>
            <>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                  <CheckIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                  <BorderColorIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                </IconButton>
              </Stack>
            </>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
