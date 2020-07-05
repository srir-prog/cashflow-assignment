import React from "react";
import { useTranslation } from "react-i18next";
const Select = ({ onChange, value, className }) => {
  //For internationalisation.
  const [t] = useTranslation("common");
  return (
    <select className={className} onChange={onChange} value={value}>
      <option value="income" defaultValue>
        {t("bottom.income")}
      </option>
      <option value="expense"> {t("bottom.expense")}</option>
    </select>
  );
};

export default Select;
