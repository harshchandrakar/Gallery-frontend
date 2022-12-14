import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material/";
import classes from "../Style/Utils.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

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
  p: 3,
  height: "200px",
  textAlign: "center",
  minWidth: "250px",
};

function ErrorPopup(props) {
  const auth = useSelector((data) => data.auth);
  return (
    <Modal
      open={!props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.Errors}>
          <h1>ERROR !</h1>
          <p>{auth.error.message}</p>
          <CloseIcon
            fontSize="large"
            sx={{ position: "fixed", bottom: "1rem", ml: "-1.4rem" }}
            onClick={props.handleClose}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default ErrorPopup;
