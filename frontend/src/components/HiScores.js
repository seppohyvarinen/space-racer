import { useEffect } from "react";

import axios from "axios";

const HiScores = () => {
  const fetchScore = async () => {
    try {
      let result = await axios.get("/scores");
      console.log(result);
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
