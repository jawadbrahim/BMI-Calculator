import React from "react";
import { useUnitSystem, useBMICalculator } from "./helpers";

const BMICalculator: React.FC = () => {
  const { unitSystem, handleUnitChange } = useUnitSystem("metric");
  const {
    weight,
    setWeight,
    height,
    setHeight,
    bmiResult,
    handleCalculateBMI,
  } = useBMICalculator();

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <label htmlFor="weight">
          Weight ({unitSystem === "metric" ? "kg" : "lb"}):
        </label>
        <input
          type="number"
          id="weight"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select value={unitSystem} onChange={handleUnitChange}>
          <option value="metric">kg/cm</option>
          <option value="imperial">lb/in</option>
        </select>
      </div>
      <div className="input-section">
        <label htmlFor="height">
          Height ({unitSystem === "metric" ? "cm" : "in"}):
        </label>
        <input
          type="number"
          id="height"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={() => handleCalculateBMI(unitSystem)}>Calculate BMI</button>

      {bmiResult && (
        <div className="result-section">
          <h2>Your BMI Result</h2>
          <p>
            <strong>BMI:</strong> {bmiResult.bmi.toFixed(2)}
          </p>
          <p>
            <strong>Category:</strong> {bmiResult.category}
          </p>
        </div>
      )}
    </div>
  );
};
//run application :npm run dev
//http://localhost:5173
export default BMICalculator;
