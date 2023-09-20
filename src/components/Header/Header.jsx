import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-3">
      <nav
        id="nav"
        className="flex flex-wrap justify-between rounded-xl bg-white  shadow-md border items-center p-4 mt-7"
      >
        <h2 className=" text-2xl p-2 md:text-4xl font-bold">
          Thousand<span className="text-red-900">Meal</span>
        </h2>
        <ul className="flex flex-wrap items-center gap-5 text-xl font-semibold">
          <li className="p-2 rounded-lg ">
            <NavLink to={""}>Home</NavLink>
          </li>
          <li className=" p-2 rounded-lg ">
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
          <li className=" p-2 rounded-lg ">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className=" p-2 rounded-lg ">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
