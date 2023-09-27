import React, { useState } from "react";
import printerIcon from "../Image/print.png";
import ProductList from "./ProductList";
import PopUp from "./PopUp";
function ProductModule() {
  const [popUp, setpopUp] = useState(false);
  const [missing, setmissing] = useState(false);
  const [urgentMissing, seturgentMissing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <>
      <div className="productModuleContainer">
        <div className="productModuleHead">
          <div>
            <input className="productSearch" placeholder="Search..." />
          </div>
          <div className="productAddPrint">
            <button className="headerBtnBack">Add Item</button>
            <div>
              <img className="printerIcon" src={printerIcon} />
            </div>
          </div>
        </div>
        <div>
          <ProductList
            popUp={popUp}
            setpopUp={setpopUp}
            setmissing={setmissing}
            missing={missing}
            urgentMissing={urgentMissing}
            seturgentMissing={seturgentMissing}
            isApproved={isApproved}
            setIsApproved={setIsApproved}
          />

          <PopUp
            popUp={popUp}
            setpopUp={setpopUp}
            missing={missing}
            setmissing={setmissing}
            urgentMissing={urgentMissing}
            seturgentMissing={seturgentMissing}
            isApproved={isApproved}
            setIsApproved={setIsApproved}
          />
        </div>
      </div>
    </>
  );
}

export default ProductModule;
