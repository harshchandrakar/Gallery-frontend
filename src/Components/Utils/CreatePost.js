import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material/";
import { useDispatch } from "react-redux";
import classes from "../Style/Utils.module.css";
import { createPost } from "../../actions/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  maxWidth: "680px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "40px",
  p: 4,
  height: "200px",
  textAlign: "center",
};
function CreatePost(props) {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState(null);
  const nameRef = React.useRef();
  const handleCreatePost = () => {
    dispatch(createPost(nameRef.current.value, file));
    props.handleClose();
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.CreatePost}>
          <input
            type="text"
            placeholder="Title"
            className={classes.input}
            ref={nameRef}
          />
          <label for="files">Select Image</label>
          <input
            type="file"
            id="files"
            accept="image/png,image/jpg,image/jpeg"
            onChange={(e) => {
              setFile(e.target.files);
            }}
            className={classes.file}
          />
          <button className={classes.btn} onClick={handleCreatePost}>
            Create Post
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default CreatePost;
