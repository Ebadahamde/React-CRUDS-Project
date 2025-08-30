import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// ICONS

import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";


export default function Todo() {
  return (
    <Card sx={{ background: "#00000035", minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <p style={{  paddingLeft:"30PX",fontWeight:"bold" , fontSize: "24px", textAlign: "left" }}>First Todo</p>
            <p style={{  paddingLeft:"30PX",fontWeight:"normal" , fontSize: "18px", textAlign: "left" }}>Quis reprehenderit voluptate enim qui ut reprehenderit.</p>
          </Grid>
          <Grid 
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center" 
              gap={4}
            >
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#88ff00ff",
                  border: "solid #88ff00ff 2px",
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  border: "solid #1769aa 2px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  // background: "white",
                  border: "solid #b23c17 2px",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
