import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScoreTable, getHiScores } from "../redux/HiScoreSlice";

import axios from "axios";
import Store from "../redux/Store";

const HiScores = () => {
  const dispatch = useDispatch();
  const scoretable = useSelector((state) => state.HiScore.scoretable);
  const fetchScore = async () => {
    try {
      let result = await axios.get("/scores");
      console.log(result.data);
      dispatch(setScoreTable(result.data));
      console.log(scoretable);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <div>
      {scoretable.map(({ player_name, score }) => (
        <div style={{ color: "white" }}>{player_name + " - " + score}</div>
      ))}
    </div>
  );
};

export default HiScores;
