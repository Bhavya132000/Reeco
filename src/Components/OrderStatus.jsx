import React from "react";
import petFood from "../Image/pet-food.png";
import burger from "../Image/burger.png";
import softDrink from "../Image/soft-drink.png";
import ac from "../Image/air-conditioner.png";

function OrderStatus() {
  return (
    <div className="orderStatusContainer">
      <div className="orderStatusHead">
        Supplier
        <div className="orderStatusData">East coast fruits & vegetables</div>
      </div>
      <div className="verticaleLine"></div>
      <div className="orderStatusHead">
        Shipping Date
        <div className="orderStatusData">Thu,Feb 10</div>
      </div>
      <div className="verticaleLine"></div>
      <div className="orderStatusHead">
        Total
        <div className="orderStatusData">$15,028.3</div>
      </div>
      <div className="verticaleLine"></div>
      <div className="orderStatusHead">
        Category
        <div className="categoryIconContainer">
          <div className="categoryIcons">
            <img className="categoryIcon" src={burger} />
            <img className="categoryIcon" src={ac} />
            <img className="categoryIcon" src={softDrink} />
            <img className="categoryIcon" src={petFood} />
          </div>
          <div className="categoryIcons">
            <img className="categoryIcon" src={burger} />
            <img className="categoryIcon" src={ac} />
            <img className="categoryIcon" src={softDrink} />
            <img className="categoryIcon" src={petFood} />
          </div>
        </div>
      </div>
      <div className="verticaleLine"></div>
      <div className="orderStatusHead">
        Department
        <div className="orderStatusData">300-4444-678</div>
      </div>
      <div className="verticaleLine"></div>
      <div className="orderStatusHead">
        Status
        <div className="orderStatusData">Awaiting your approval</div>
      </div>
    </div>
  );
}

export default OrderStatus;
