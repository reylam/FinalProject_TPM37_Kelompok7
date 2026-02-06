import { useState } from "react";

const Login = () => {
  const [groupName, setGroupName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // idk buat API cuy
    console.log("Login data:", {
      groupName,
      password,
    });

    if (!groupName || !password) {
      alert("Please fill in all fields");
      return;
    }

    alert("Login successful (frontend only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-700 to-purple-900">
      <div className="bg-[#0f1b3d] w-full max-w-md rounded-2xl shadow-xl p-8">
        

        <div className="flex justify-center mb-6">
          <div className="bg-white px-10 py-4 rounded-md font-bold">
            LOGO
          </div>
        </div>


        <h2 className="text-white text-2xl font-bold text-center mb-6">
          LOG IN AND COMPETE
        </h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm block mb-1">
              Group Name
            </label>
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
