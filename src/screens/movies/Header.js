import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";

function Header() {
  const [pathName, setPathName] = useState("");
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    setPathName(location.pathName);
  }, []);
  const redirectTo = (pathName) => {
    setPathName(pathName);
    history.push(pathName);
  };
  return (
    <header className="header">
      <nav className="nav">
        <p
          className={`{"nav-item $pathName" === "/" ? "selected" : ""}`}
          onClick={() => {
            redirectTo;
          }}
        >
          Movies
        </p>
        <p
          className={`{"nav-item $pathName" === "/series" ? "selected" : ""}`}
          onClick={() => {
            redirectTo;
          }}
        >
          Series
        </p>
        <p
          className={`{"nav-item $pathName" === "/anime" ? "selected" : ""}`}
          onClick={() => {
            redirectTo;
          }}
        >
          Anime
        </p>
      </nav>
    </header>
  );
}

export default Header;
