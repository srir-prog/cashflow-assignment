import React from "react";
import Button from "./../Generic/Button";
import {
  deleteItemFromStore,
  updateItemInStore,
} from "../../store/budgetSlice";
import { useDispatch } from "react-redux";
import Input from "./../Generic/Input";

const IncomeList = ({ income }) => {
  const { id, description, cost } = income;

  const dispatch = useDispatch();
  const [updateDesc, setUpdateDesc] = React.useState(description);
  const [updateCost, setUpdateCost] = React.useState(cost);

  const handleDeleteBtnClick = (id) => {
    const payload = { id, type: "income" };
    //dispatch an action to store.
    dispatch(deleteItemFromStore(payload));
  };

  const handleUpdateBtnClick = (income) => {
    //Validate the updated fields.
    if (!updateDesc) {
      return alert("Please enter the required value.");
    }
    if (updateCost === 0) {
      return alert("Please enter the required value.");
    }

    //Update the exisitng expense object with latest values.
    const updatedIncome = {
      ...income,
      description: updateDesc,
      cost: +updateCost, //To covert a string to a number.
      type: "income",
    };
    //dispatch an action to store the data.
    dispatch(updateItemInStore(updatedIncome));
  };

  return (
    <div className="item clearfix">
      <div className="item__description">
        <Input
          type="text"
          name="description"
          className="add__update__description "
          placeholder="Add description"
          value={updateDesc}
          onChange={(event) => setUpdateDesc(event.target.value)}
        />
      </div>
      <div className="right clearfix">
        <div className="item__value">
          <Input
            type="number"
            name="value"
            className="add__value"
            placeholder="Value"
            value={updateCost}
            onChange={(event) => setUpdateCost(event.target.value)}
          />
        </div>
        <div className="item__delete" style={{ paddingRight: "20px" }}>
          <Button
            onClick={() => handleUpdateBtnClick(income)}
            buttonIcon="ion-ios-refresh-outline"
            className="item__delete--btn"
          />
        </div>
        <div className="item__delete">
          <Button
            onClick={() => handleDeleteBtnClick(id)}
            buttonIcon="ion-ios-close-outline"
            className="item__delete--btn"
          />
        </div>
      </div>
    </div>
  );
};

export default IncomeList;
