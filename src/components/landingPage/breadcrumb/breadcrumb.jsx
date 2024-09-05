import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./breadcrumb.css";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <div className="breadcrumb">
        <Link to="/" state={{ title: "Home" }}>Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const title = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <span key={to}>
              {" >> "}
              <Link to={to} state={{ title }}>
                {title}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
