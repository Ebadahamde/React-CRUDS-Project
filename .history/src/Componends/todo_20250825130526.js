import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// ICONS

import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";


export default function Todo( {todo}) {
  return (
    <Card  sx={{  marginTop:"30px", background: "#a9a9a935", minWidth: 275 }}>
      <CardContent className="maincard">
        <Grid container spacing={2}>
          <Grid size={8}>
            <p style={{ color:"#ffffff", paddingLeft:"30PX", fontFamily:"syne" ,fontWeight:"700", fontSize: "24px", textAlign: "left" }}>{todo.title} </p>
            <p style={{ color:"#ffffff" , paddingLeft:"30PX",fontFamily:"syne" ,fontWeight:"500" , fontSize: "18px", textAlign: "left" }}>{todo.details} </p>
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
                onClick={}
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
