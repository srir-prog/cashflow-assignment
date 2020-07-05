import React from "react";
import Select from "../Generic/Select";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import {
  addItemToStore,
  addTotalIncome,
  addDataForSankeyChart,
} from "../../store/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import BudgetList from "./BudgetList";
import { useTranslation } from "react-i18next";

const AddBudget = () => {
  //For internationalisation.
  const [t] = useTranslation("common");
  //Form a state object to store the values locally
  const [formData, setFormData] = React.useState({
    description: "",
    cost: "",
    type: "income",
  });

  //Destructuring form data.
  const { type, description, cost } = formData;

  //Making use of useDispatch hook from
  //"react-redux" to expose a dispatch function.
  const dispatch = useDispatch();

  //Making use of useSelector hook from
  //"react-redux" to access reuired state from the store
  const { allItems, totalIncome } = useSelector((state) => ({
    allItems: state.budget.allItems,
    totalIncome: state.budget.totals.income,
  }));

  //Hook to calculate total income and save it to store.
  React.useEffect(() => {
    if (allItems.income.length === 0) return;
    let totalIncome = 0;
    for (const income of allItems.income) {
      totalIncome += income.cost;
    }
    if (totalIncome > 0) {
      const payload = { totalIncome };
      dispatch(addTotalIncome(payload));
    }
  }, [allItems.income, dispatch]);

  //Hook to prepare data set for Sankey chart and save it to store.
  React.useEffect(() => {
    if (allItems.income.length === 0 || allItems.expense.length === 0) return;
    let sankeyItemIncomeArr = [];
    let sankeyItemExpenseArr = [];
    let sankeyItem = [];
    for (const income of allItems.income) {
      let sankeyItemIncome = {};
      sankeyItemIncome.from = `${income.description} (${income.cost})`;
      sankeyItemIncome.to = `Total Income (${totalIncome})`;
      sankeyItemIncome.value = income.cost;
      sankeyItemIncomeArr.push(sankeyItemIncome);
    }
    for (const expense of allItems.expense) {
      let sankeyItemExpense = {};
      sankeyItemExpense.to = `${expense.description} (${expense.cost})`;
      sankeyItemExpense.from = `Total Income (${totalIncome})`;
      sankeyItemExpense.value = expense.cost;
      sankeyItemExpenseArr.push(sankeyItemExpense);
    }
    //Concate both the array of objects.
    sankeyItem = [...sankeyItemIncomeArr, ...sankeyItemExpenseArr];
    const payload = { sankeyItem };
    if (sankeyItem.length > 0) {
      dispatch(addDataForSankeyChart(payload));
    }
  }, [allItems.expense, allItems.income, dispatch, totalIncome]);

  //EventHandler for Select box.
  const handleBudgetType = (event) => {
    setFormData({ ...formData, type: event.target.value });
  };

  //EventHandler for Description input field.
  const handleInputDescChange = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };

  //EventHandler for value input field.
  const handleInputValueChange = (event) => {
    setFormData({ ...formData, cost: +event.target.value });
  };

  const addItem = () => {
    let id = 0;
    let newItem = {};
    //Create a copy of form data to be reset.
    const clearFormData = { ...formData };
    //Validation for Input fields.
    if (!description) {
      return alert("Please enter the required value.");
    }
    if (!cost && cost !== 0) {
      return alert("Please enter the required value.");
    }

    //Create an id based on the available items in store.
    if (allItems[type].length > 0) {
      id = allItems[type][allItems[type].length - 1].id + 1;
    }

    //Based on the type of cash flow create respective objects for Income and Expenses.
    if (type === "income") {
      newItem.id = id;
      newItem.description = description;
      newItem.cost = cost;
      newItem.type = type;
    } else {
      newItem.id = id;
      newItem.description = description;
      newItem.cost = cost;
      newItem.type = type;
    }

    //Dispatch an action to add item to the store.
    dispatch(addItemToStore(newItem));
    //Reset inputs.
    setFormData({
      ...clearFormData,
      description: "",
      cost: "",
      type: "income",
    });
  };

  //EventHandler for Add button click.
  const handleAddBtnClick = () => {
    addItem();
  };

  //EventHandler for Keypress
  const handleKeyPressClick = (event) => {
    //To check only if enter key is pressed.
    if (event.keyCode === 13 || event.which === 13) {
      addItem();
    }
  };

  return (
    <div className="bottom">
      <div className="add" onKeyPress={handleKeyPressClick}>
        <div className="add__container">
          <Select
            onChange={handleBudgetType}
            value={type}
            className="add__type"
          />
          <Input
            type="text"
            name="description"
            className="add__description"
            placeholder={t("bottom.description")}
            value={description}
            onChange={handleInputDescChange}
          />
          <Input
            type="number"
            name="value"
            className="add__value"
            placeholder={t("bottom.value")}
            value={cost}
            onChange={handleInputValueChange}
          />
          <Button
            onClick={handleAddBtnClick}
            buttonIcon="ion-ios-checkmark-outline"
            className="add__btn"
          />
        </div>
      </div>
      <div className="container clearfix">
        <BudgetList allItems={allItems} />
      </div>
    </div>
  );
};

export default AddBudget;
