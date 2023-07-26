interface BMIResult {
    bmi: number;
    category: string;
  }
  
  const BMI_CATEGORIES: {
    category: string;
    range: { min: number; max: number };
  }[] = [
    { category: "Underweight", range: { min: 0, max: 18.5 } },
    { category: "Normal weight", range: { min: 18.5, max: 24.9 } },
    { category: "Overweight", range: { min: 25, max: 29.9 } },
    { category: "Obese", range: { min: 30, max: Infinity } },
  ];
  
  export const calculateBMI = (
    weight: number,
    height: number,
    unitSystem: string
  ): BMIResult | null => {
    const weightInKg = parseFloat(weight.toString());
    const heightInCm = parseFloat(height.toString());
    if (isNaN(weightInKg) || isNaN(heightInCm) || weightInKg <= 0 || heightInCm <= 0) {
        return null;
      }
    
      const weightFactor = unitSystem === "metric" ? 1 : 0.453592;
      const heightFactor = unitSystem === "metric" ? 0.01 : 0.0254;
    
      const weightInKgConverted = weightInKg * weightFactor;
      const heightInMeters = heightInCm * heightFactor;
    
      const bmi = weightInKgConverted / (heightInMeters * heightInMeters);
    
      let bmiCategory = "Unknown";
      for (const { category, range } of BMI_CATEGORIES) {
        if (bmi >= range.min && bmi < range.max) {
          bmiCategory = category;
          break;
        }
      }
    
      return { bmi,category: bmiCategory };
    };