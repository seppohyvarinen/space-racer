import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScoreTable, getHiScores } from "../redux/HiScoreSlice";

import axios from "axios";
import Store from "../redux/Store";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const HiScores = () => {
  const dispatch = useDispatch();
  const scoretable = useSelector((state) => state.HiScore.scoretable);
  const fetchScore = async () => {
    try {
      let result = await axios.get("/scores");
      console.log(result.data);
      dispatch(setScoreTable(result.data));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, maxWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoretable.map((row) => (
              <TableRow key={row.player_name}>
                <TableCell component="th" scope="row">
                  {row.player_name}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HiScores;

/*       {scoretable.map(({ player_name, score }) => (
        <div style={{ color: "white" }}>{player_name + " - " + score}</div>
      ))}
    </div> */
