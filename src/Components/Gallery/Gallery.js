import React, { useState } from "react";
import Login from "../Utils/Login";
import classes from "../Style/Gallery.module.css";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import Dashboard from "./Dashboard";
function Gallery() {
  const auth = useSelector((data) => data.auth);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.Gallery}>
      {isLoading ? (
        <Player
          style={{
            height: "300px",
            marginTop: "91px",
          }}
          src="https://assets10.lottiefiles.com/private_files/lf30_l8csvun7.json"
          autoplay
          loop
        ></Player>
      ) : auth.isLogged ? (
        <Dashboard />
      ) : (
        <Login loading={setIsLoading} />
      )}
    </div>
  );
}

export default Gallery;
