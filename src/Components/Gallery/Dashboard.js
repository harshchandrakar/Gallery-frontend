import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, loginMsg } from "../../actions/auth";
import classes from "../Style/Gallery.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import CreatePost from "../Utils/CreatePost";
function Dashboard() {
  const searchRef = useRef();
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((data) => data.auth);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    if (!open) {
      setopen(true);
    } else {
      setopen(false);
    }
  };
  const onLogout = () => {
    dispatch(loginMsg(false));
  };
  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    dispatch(getAllPost(searchRef.current.value));
  };
  return (
    <div className={classes.Dashboard}>
      <CreatePost open={open} handleClose={handleClose} />
      <div className={classes.header}>
        <div className={classes.headerbtn}>
          <button className={classes.btn} onClick={handleClose}>
            + New Post
          </button>

          <button className={classes.btn1} onClick={onLogout}>
            Logout
          </button>
        </div>
        <div className={classes.searchbar}>
          <input placeholder="  Search image by name" ref={searchRef} />
          <button className={classes.btn} onClick={handleSearch}>
            Search
          </button>
        </div>
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
        ) : (
          auth.posts.map((data, id) => (
            <div
              key={id}
              className={`${classes.Post} animate__animated animate__zoomIn animate__delay-1s `}
            >
              <img
                src={`data:${data.contentType};base64,${data.img}`}
                alt={data.name}
              />
              <h4>{data.name}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
