import { Link } from "react-router-dom";

const Meal = (meal) => {
  const mealDetail = meal.meal;
  console.log(mealDetail);
  const {strMealThumb, strMeal } = mealDetail;
  return (
    <>
      <div className="card card-compact lg:w-[300px] bg-base-100 shadow-xl">
        <figure>
          <img className="object-cover w-full h-[190px] " src={strMealThumb} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>

          <div className="card-actions  ">
            <Link className="w-full" to={`/meals/${strMeal}`} >
              <button className="btn hover:bg-[#1f1f1f] bg-black text-white w-full">
                Show Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
