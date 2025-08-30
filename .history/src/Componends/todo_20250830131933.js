import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// CONTEXT
import { MyToDoContext } from "../contexts/Todoscontext";
import { useContext, useState } from "react";
// dialog imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todo }) {
  const { Todos, settodos } = useContext(MyToDoContext);
  const [ShowDialog, setShowDialog] = useState(false);
  const [ShowUpdateDialog, setShowUpdateDialog] = useState(false);
  const [NewupdateInpout, setNewupdateInpout] = useState({
    title: "",
    details: "",
  });

  function HnadelCheckClick() {
    const updateddoto = Todos.map((x) => {
      if (x.id === todo.id) {
        x.iscompleted = !x.iscompleted;
      }
      return x;
    });
    settodos(updateddoto);
    localStorage.setItem("todos", JSON.stringify(updateddoto));
  }
  function HandelShowDialog() {
    setShowDialog(true);
  }
  function HandelClose() {
    setShowDialog(false);
  }
  function HandelDelateConferm() {
    const newTodo = Todos.filter((x) => {
      return x.id != todo.id;
    });
    settodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }
  function HandelOpenUpdateDialog() {
    setNewupdateInpout({ title: todo.title, details: todo.details }); // جاب البيانات القديمة

    setShowUpdateDialog(true);
  }
  function HandelCloseUpdateDialog() {
    setShowUpdateDialog(false);
  }
  function HandelUpdateNewTodo() {
    const NewUpdateTodo = Todos.map((x) => {
      if (x.id === todo.id) {
        return {
          ...x,
          title: NewupdateInpout.title,
          details: NewupdateInpout.details,
        };
      } else {
        return x;
      }
    });
    settodos(NewUpdateTodo);
    localStorage.setItem("todos", JSON.stringify(NewUpdateTodo));

    setShowUpdateDialog(false);
  }

  return (
    <>
      {/* delate dialog */}
      <Dialog
        onClose={HandelClose}
        open={ShowDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          "Are you sure you want to delete this item? This action cannot be undone."
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={HandelClose}> Disagree</Button>
          <Button onClick={HandelDelateConferm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* ====delate dialog===== */}
      {/* edit dialog */}
      <Dialog
        onClose={HandelCloseUpdateDialog}
        open={ShowUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{wi}}
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "You can add details or edit the title."
          </DialogContentText>
        </DialogContent>
        <TextField
          sx={{ margin: "10px " }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={NewupdateInpout.title}
          onChange={(x) => {
            setNewupdateInpout({ ...NewupdateInpout, title: x.target.value });
          }}
        />

        <TextField
          sx={{ margin: "10px " }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={NewupdateInpout.details}
          onChange={(x) => {
            setNewupdateInpout({ ...NewupdateInpout, details: x.target.value });
          }}
        />

        <DialogActions>
          <Button onClick={HandelCloseUpdateDialog}> Disagree</Button>
          <Button onClick={HandelUpdateNewTodo} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* ====edit dialog===== */}

      <Card sx={{ marginTop: "30px", background: "#a9a9a935", minWidth: 275 }}>
        <CardContent className="maincard">
          <Grid container spacing={2}>
            <Grid size={8}>
              <p
                style={{
                  color: "#ffffff",
                  paddingLeft: "30PX",
                  fontFamily: "syne",
                  fontWeight: "700",
                  fontSize: "24px",
                  textAlign: "left",
                }}
              >
                {todo.title}{" "}
              </p>
              <p
                style={{
                  color: "#ffffff",
                  paddingLeft: "30PX",
                  fontFamily: "syne",
                  fontWeight: "500",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                {todo.details}{" "}
              </p>
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
                  color: todo.iscompleted ? "#ffffff" : "#88ff00ff",
                  background: todo.iscompleted ? "#88ff003e" : "#ffffff10",
                  border: todo.iscompleted
                    ? "solid #88ff003e 2px"
                    : "solid #88ff00ff 2px",
                }}
                onClick={HnadelCheckClick}
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
                onClick={HandelOpenUpdateDialog}
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
                onClick={HandelShowDialog}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
