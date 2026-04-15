import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      
      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold text-red-500 drop-shadow-lg">
        404
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">
        Oops! Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-300 text-center max-w-md mb-6">
        {error?.statusText || error?.message || 
        "The page you are looking for doesn’t exist or has been moved."}
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-lg text-lg font-medium shadow-lg">
          ⬅️ Back to Home
        </button>
      </Link>


      
    </div>
  );
};

export default ErrorPage;
