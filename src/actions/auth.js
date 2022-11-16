import {
  LOGIN_SUCCESSFUL,
  UPDATED_ID,
  UPDATED_POSTS,
  UPDATE_ISSUE,
} from "./actionTypes";
import { APIUrls } from "../Components/Helpers/urls";

export function timeProfiler(newtime) {
  return {
    type: "profiling time",
    newtime,
  };
}
export function loginMsg(data) {
  return {
    type: LOGIN_SUCCESSFUL,
    data,
  };
}
export function updateId(data) {
  return {
    type: UPDATED_ID,
    data,
  };
}
export function updatePosts(data) {
  return {
    type: UPDATED_POSTS,
    data,
  };
}
export function updateErrors(data) {
  return {
    type: UPDATE_ISSUE,
    data,
  };
}
//API Calls
export function sendLoginRequest(email, password) {
  return (dispatch) => {
    let body = JSON.stringify({
      email: email,
      password: password,
    });
    const url = APIUrls.Login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          dispatch(loginMsg(true));
          dispatch(updateId(data.id));
          dispatch(updatePosts(data.posts));
        } else {
          dispatch(
            updateErrors({
              issue: data.success,
              message: data.message,
            })
          );
        }
      });
  };
}
export function createPost(name, file) {
  return (dispatch, getState) => {
    const { auth } = getState();
    let form = new FormData();
    form.append("name", name);
    form.append("uid", auth.id);
    form.append("img", file[0]);
    console.log(form);
    const url = APIUrls.createPost();
    fetch(url, {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          console.log(true);
        } else {
          dispatch(
            updateErrors({
              issue: data.success,
              message: data.message,
            })
          );
        }
      });
  };
}

export function registerUser(data) {
  return (dispatch) => {
    const body = JSON.stringify(data);
    const url = APIUrls.Register();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          dispatch(
            updateErrors({
              issue: data.success,
              message: data.message,
            })
          );
        }
      });
  };
}
export function getAllPost(name) {
  return (dispatch, getState) => {
    const { auth } = getState();

    let url = APIUrls.getAllPost() + `id=${auth.id}&name=${name}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          dispatch(
            updateErrors({
              issue: data.success,
              message: data.message,
            })
          );
        } else dispatch(updatePosts(data.posts));
      });
  };
}
