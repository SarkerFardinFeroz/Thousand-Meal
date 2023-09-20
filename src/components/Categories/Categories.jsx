import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import AllMeals from "./AllMeals/AllMeals";

const Categories = () => {
  const categoriesObject = useLoaderData();
  const categorizes = categoriesObject.categories;
  return (
    <div>
      <ul className="isActive flex flex-wrap justify-center  items-center gap-4 text-xl font-semibold">
        {categorizes.map((category, idx) => (
          <Category key={idx} category={category} />
        ))}
      </ul>

      <AllMeals />
    </div>
  );
};

export default Categories;
