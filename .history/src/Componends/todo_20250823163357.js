import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Todo() {
  return (
    <Card sx={{ background: "#00000035", minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <p style={{fontWeight:"" , fontSize: "24px", textAlign: "left" }}>First Todo</p>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            size={4}
          >
            <>
              <Stack direction="row" spacing={2}>
                <IconButton>
                  <DoneAllIcon  />
                </IconButton>
                <IconButton>
                  <BorderColorIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton></IconButton>
              </Stack>
            </>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
