import { Link } from "react-router-dom";

const ErrorPage = () => {
  const backgroundColor = "white";
  const textColor = "black";
  const themeColor = "#531313";
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor }}
    >
      <div className="text-center shadow-xl border p-16 ">
        <h1 className={`text-6xl font-semibold text-[${themeColor}]`}>Oops! 😶‍🌫️</h1>
        <div className="my-6">
        <p className={`text-[${textColor}] mt-2 text-2xl `}>Something went wrong.</p>
        <p className={`text-[${textColor}] text-2xl `}>
          We apologize for the inconvenience.
        </p>
        </div>
        <Link to={"/categories"}>
          <button
            className={`mt-4 px-4 py-2 btn bg-[${themeColor}] text-white rounded hover:bg-[#3d1717]  `}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
