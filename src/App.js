import "./App.css";
import "animate.css";
import Gallery from "./Components/Gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import ErrorPopup from "./Components/Utils/ErrorPopup";
import { updateErrors } from "./actions/auth";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((data) => data.auth);
  const handleError = () => {
    dispatch(
      updateErrors({
        issue: true,
        message: "",
      })
    );
  };
  return (
    <div className="App" id="background">
      <ErrorPopup open={auth.error.issue} handleClose={handleError} />
      <Gallery />
    </div>
  );
}

export default App;
