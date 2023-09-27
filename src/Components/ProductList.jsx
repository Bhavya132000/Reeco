import React, { useState } from "react";
import avocado from "../Image/Avocado Hass.jpg";
import tick from "../Image/check-solid.svg";
import xmark from "../Image/xmark-solid.svg";
import greentick from "../Image/greentick.png";
import redcross from "../Image/redcross.png";

function ProductList({
  setpopUp,
  missing,
  urgentMissing,
  seturgentMissing,
  setmissing,
  isApproved,
  setIsApproved,
}) {
  const handleTickClick = () => {
    setmissing(false);
    setIsApproved(true);
    seturgentMissing(false);
  };
  return (
    <div className="productListContainer">
      <table className="productTable">
        <tr>
          <th className="breadCrumb pname">Product Name</th>
          <th className="breadCrumb"> Brand</th>
          <th className="breadCrumb">Price</th>
          <th className="breadCrumb">Quantity</th>
          <th className="breadCrumb">Total</th>
          <th className="breadCrumb sts">Status</th>
        </tr>
        <div className="horizontalLine"></div>
        <tr>
          <td>
            <div className="productName">
              <img className="productImage" src={avocado} />
              <span>
                Chicken Breast Fillets, Boneless matuumaMarinated 6 ounces Raw,
                Invivid
              </span>
            </div>
          </td>
          <td>
            <div className="productName"> Hormel Black Labelmany</div>
          </td>
          <td>
            <div className="productName">$60.67/6*1LB</div>
          </td>
          <td>
            <div className="productName">0x6*1LB</div>
          </td>
          <td>
            <div className="productName">0</div>
          </td>
          <td className="productStatus">
            <div className="productSatusbtn">
              <div>
                <div
                  className={`productStatusAprv ${
                    isApproved ? "" : "disableAprv"
                  }`}
                >
                  Aproove
                </div>
              </div>
              <div>
                <div
                  className={`prdtcStsMissUrg ${
                    urgentMissing ? "" : "disableAprv"
                  }`}
                >
                  Missing-Urgent
                </div>
              </div>
              <div>
                <div className={`prdtcStsMiss ${missing ? "" : "disableAprv"}`}>
                  Missing
                </div>
              </div>
              <div>
                <button className="tick" onClick={handleTickClick}>
                  <img
                    className="tickImg"
                    src={!isApproved ? tick : greentick}
                  />
                </button>
              </div>
              <div>
                <button className="tick" onClick={() => setpopUp(true)}>
                  <img
                    className="tickImg"
                    src={!missing && !urgentMissing ? xmark : redcross}
                  />
                </button>
              </div>
              Edit
            </div>
          </td>
        </tr>{" "}
      </table>
    </div>
  );
}

export default ProductList;
