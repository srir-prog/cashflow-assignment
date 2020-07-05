import React from "react";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import { useTranslation } from "react-i18next";

const BudgetList = ({ allItems }) => {
  //For internationalisation.
  const [t] = useTranslation("common");
  const { income: incomes, expense: expenses } = allItems;
  return (
    <div className="container clearfix">
      <div className="income">
        <h2 className="icome__title">{t("bottom.income")}</h2>
        <div className="income__list">
          {incomes.length > 0 &&
            incomes.map((income) => (
              <IncomeList key={income.id} income={income} />
            ))}
        </div>
      </div>
      <div className="expenses">
        <h2 className="expenses__title">{t("bottom.expenses")}</h2>
        <div className="expenses__list">
          {expenses.length > 0 &&
            expenses.map((expense) => (
              <ExpenseList key={expense.id} expense={expense} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetList;
