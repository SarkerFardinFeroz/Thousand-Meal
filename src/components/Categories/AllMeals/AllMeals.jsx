import { useEffect, useState } from "react";
import Allmeal from "../AllMeal/Allmeal";

const AllMeals = () => {
  const [AllMeals, setAllMeals] = useState({});
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await res.json();
      setAllMeals(data);
    };
    asyncFunc();
  }, []);
  const AllMeal = AllMeals.meals || [];
  console.log(AllMeal);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {AllMeal.map((AllMeal, idx) => (
        <Allmeal key={idx} AllMeal={AllMeal} />
      ))}
    </div>
  );
};

export default AllMeals;
