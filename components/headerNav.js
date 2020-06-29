import Link from "next/link";
import Head from "next/head";

import React, { useState, useEffect } from "react";

import headerStyles from "./header.module.css";

export default function HeaderNav() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  let hamburgerButtonClasses =
    "navbar__button hamburger hamburger--elastic " +
    headerStyles.responsiveShow;

  return (
    <div>
      <nav className={headerStyles.navbar}>
        <button
          className={
            showMe
              ? hamburgerButtonClasses + " is-active"
              : hamburgerButtonClasses
          }
          onClick={toggle}>
          <span className="hamburger-box">
            <span
              className={
                headerStyles.hamburgerWhite + " hamburger-inner"
              }></span>
          </span>
        </button>

        <ul className={headerStyles.linkList + ' ' + (!showMe ? headerStyles.hideResponsive : '')} >
          <li className="">
            <Link href="/">
              <a className="page-scroll">Home</a>
            </Link>
          </li>
          <li className="">
            <Link href="/team">
              <a className="page-scroll">Team</a>
            </Link>
          </li>
          <li className="">
            <a
              className="page-scroll"
              href="/press">
              Press
            </a>
          </li>
        </ul>
        <img
          src="/images/logo_name.png"
          alt="Broken Frame Logo"
        />
      </nav>
    </div>
  );
}
