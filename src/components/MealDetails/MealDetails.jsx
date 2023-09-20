import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  const mealDetail = mealDetails.meals[0];
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
  } = mealDetail;
  console.log(mealDetail);
  return (
    <div className="flex  gap-6 items-center">
      <img className="rounded-xl object-contain h-max w-1/2" src={strMealThumb} />
      <div className="space-y-5">
        <h1 className=" text-4xl font-bold">{strMeal}</h1>
        <p className="text-xl ">{strInstructions}</p>
        <div className="text-xl space-y-3">
          <h4 className="text-3xl">Ingredients</h4>
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
          <li>{strIngredient5}</li>
          <li>{strIngredient6}</li>
          <li>{strIngredient7}</li>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
