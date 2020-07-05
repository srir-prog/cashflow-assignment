import React from "react";
import logo from "./../../../src/centime_logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("common");
  return (
    <div className="top">
      <img
        className="header__logo"
        src={logo}
        alt={t("header.imgDescription")}
      ></img>
      <div className="add__locale">
        <button id="english" onClick={() => i18n.changeLanguage("en")}>
          English
        </button>
        <button id="german" onClick={() => i18n.changeLanguage("de")}>
          German
        </button>
      </div>
    </div>
  );
};

export default Header;
