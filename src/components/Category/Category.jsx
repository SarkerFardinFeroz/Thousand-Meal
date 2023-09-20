import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const { strCategory } = category;
  return (
    <li className=" basis-[40%] md:basis-0 flex mr-6 bg-[#531313] text-white  py-1 px-3 rounded-lg ">
      <button><NavLink to={`/category/${strCategory}`}>{strCategory}</NavLink></button>
    </li>
  );
};

export default Category;
