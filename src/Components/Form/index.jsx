import "./index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Form({
  open,
  handleClose,
  title,
  content,
  setTitle,
  setContent,
  color,
  handleSave,
  edit
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: color || "#f1f1f1",
          width: "100%",
          maxWidth: "720px!important",
        },
      }}
    >
      <DialogTitle>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogTitle>
      <DialogContent>
        <TextField
          id="content"
          className="CustomDialogContent"
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          maxRows={6}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button style={{ color: "#000" }} onClick={handleClose}>
          Cancel
        </Button>
        <Button style={{ color: "#000" }} onClick={handleSave}>
          {edit? "Save": "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
