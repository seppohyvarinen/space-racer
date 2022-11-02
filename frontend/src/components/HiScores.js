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
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";
import "../hiscore.css";

const HiScores = () => {
  const dispatch = useDispatch();
  const classes = useStyles(theme);
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
    <div style={{ width: "100%" }}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">
                Score
              </TableCell>
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
    </div>
  );
};

export default HiScores;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ["Press Start 2P", "cursive"].join(","),
  },
  table: {
    minWidth: 400,
    maxWidth: 500,
    margin: "auto",
  },
  tableContainer: {
    borderRadius: 15,
    margin: "auto",
    maxWidth: 600,
    padding: "10px, 20px, 20px, 10px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#AAAAAA",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#11cb5f",
      dark: "#AAAAAA",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

/*       {scoretable.map(({ player_name, score }) => (
        <div style={{ color: "white" }}>{player_name + " - " + score}</div>
      ))}
    </div> */
