import "./App.css";
import Main from "./components/Main";
import data from "../data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourseData } from "./redux/slices/courseDetailSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourseData(data));
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
