import React from "react";
import { useTranslation } from "react-i18next";
 
import './languageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        className="minimal"
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="pt"> Português</option>
        <option value="en">Inglês</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;