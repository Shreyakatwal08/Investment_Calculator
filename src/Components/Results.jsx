import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
  const reslutsData = calculateInvestmentResults(input);
  console.log(reslutsData);
  return <p>Results...</p>;
};

export default Results;
