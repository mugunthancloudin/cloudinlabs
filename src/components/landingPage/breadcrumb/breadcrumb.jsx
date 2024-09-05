import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./breadcrumb.css";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Determine the current page name
  const currentPage = pathnames.length
    ? pathnames[pathnames.length - 1]
    : "Home";
  const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <nav aria-label="breadcrumb">
      <div className="breadcrumb">
        {/* Correctly pass the state */}
        <Link to="/" state={{ title: pageTitle }}>Home</Link> &gt; {pageTitle}
      </div>
    </nav>
  );
}
