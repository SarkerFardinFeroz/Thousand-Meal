import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const { meals } = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"  >
      {meals.map((meal, idx) => (
        <Meal key={idx} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
