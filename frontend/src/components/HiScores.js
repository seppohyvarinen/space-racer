import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScoreTable } from "../redux/HiScoreSlice";

import axios from "axios";
import Store from "../redux/Store";

const HiScores = () => {
  const dispatch = useDispatch();
  const fetchScore = async () => {
    try {
      let result = await axios.get("/scores");
      console.log(result.data);
      dispatch(setScoreTable(result.data));
      console.log(Store.getState().HiScore.scoretable);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchScore();
  }, []);
  return <div>testing</div>;
};

export default HiScores;
