import React from "react";
import xmark from "../Image/xmark-solid.svg";

function PopUp({
  popUp,
  setpopUp,
  setmissing,
  seturgentMissing,
  setIsApproved,
}) {
  const handlePopNoBtn = () => {
    setmissing(true);
    setpopUp(false);
    seturgentMissing(false);
    setIsApproved(false);
  };
  const handlePopYesBtn = () => {
    seturgentMissing(true);
    setpopUp(false);
    setmissing(false);
    setIsApproved(false);
  };

  return (
    <>
      {popUp && (
        <div className="popUpContainer">
          <div className="popUp">
            <div className="popUpHeading">
              <div>Missing Product</div>
              <div>
                <button className="cross" onClick={() => setpopUp(false)}>
                  <img className="crossImg" src={xmark} />
                </button>
              </div>
            </div>
            <div className="popData">
              Is 'Chicken Breast Fillet, Boneless...'Urgent?
            </div>
            <div className="popYNCon">
              <button className="popYN" onClick={handlePopNoBtn}>No</button>
              <button className="popYN" onClick={handlePopYesBtn}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
