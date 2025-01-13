// import React, { useEffect, useState } from "react";
// import Button from "../Button";
// import TemporaryDrawer from "./drawer";
// import "./styles.css";
// import Switch from "@mui/material/Switch";
// import { toast } from "react-toastify";

// function Header() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") == "dark" ? true : false
//   );

//   useEffect(() => {
//     if (localStorage.getItem("theme") == "dark") {
//       setDark();
//     } else {
//       setLight();
//     }
//   }, []);

//   const changeMode = () => {
//     if (localStorage.getItem("theme") != "dark") {
//       setDark();
//     } else {
//       setLight();
//     }
//     setDarkMode(!darkMode);
//     toast.success("Theme Changed!");
//   };

//   const setDark = () => {
//     localStorage.setItem("theme", "dark");
//     document.documentElement.setAttribute("data-theme", "dark");
//   };

//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
//   };

//   return (
//     <div className="header">
//       <h1>
//         CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
//       </h1>
//       <div className="links">
//         <Switch checked={darkMode} onClick={() => changeMode()} />
//         <a href="/">
//           <p className="link">Home</p>
//         </a>
//         <a href="/compare">
//           <p className="link">Compare</p>
//         </a>
//         <a href="/watchlist">
//           <p className="link">Watchlist</p>
//         </a>
//         <a href="/dashboard">
//           <Button text={"dashboard"} />
//         </a>
//       </div>
//       <div className="drawer-component">
//         <TemporaryDrawer />
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {
  // State to track if dark mode is enabled or not
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" // Direct comparison with "dark"
  );

  useEffect(() => {
    // Only update the theme when the component mounts
    const theme = darkMode ? "dark" : "light"; // Get the theme from state
    localStorage.setItem("theme", theme); // Store the theme in localStorage
    document.documentElement.setAttribute("data-theme", theme); // Set the theme on the document element
  }, [darkMode]); // Only re-run when darkMode changes

  const changeMode = () => {
    setDarkMode(!darkMode); // Toggle the theme
    toast.success("Theme Changed!"); // Notify user
  };

  return (
    <div className="header">
      <h1>
        CryptoInfo<span style={{ color: "var(--blue)" }}>...</span>
      </h1>
      <div className="links">
        {/* Dark mode toggle switch */}
        <Switch checked={darkMode} onChange={changeMode} />
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
