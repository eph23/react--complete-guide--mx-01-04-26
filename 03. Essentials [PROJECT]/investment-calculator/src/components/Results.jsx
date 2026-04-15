import { calculateInvestmentResults } from "../util/investment";

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return <div>results</div>;
}

export default Results;
