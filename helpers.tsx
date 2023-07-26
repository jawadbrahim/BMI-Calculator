import { useState } from "react";
import { calculateBMI } from "./calculator";

export const useUnitSystem = (initialValue: string) => {
  const [unitSystem, setUnitSystem] = useState(initialValue);

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnitSystem(event.target.value);
  };

  return { unitSystem, handleUnitChange };
};

export const useBMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBMIResult] = useState<{ bmi: number; category: string } | null>(null);

  const handleCalculateBMI = (unitSystem: string) => {
    const result = calculateBMI(parseFloat(weight), parseFloat(height), unitSystem);
    setBMIResult(result);
  };

  return {
    weight,
    setWeight,
    height,
    setHeight,
    bmiResult,
    handleCalculateBMI,
  };
};
