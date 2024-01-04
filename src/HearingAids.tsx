//import { useState } from "react";
import "./index.css";
import { Checkbox } from "@wsa/echo-components";
import React from "react";
//import useAssignHearingAids from "./useAssignHearingAids";

interface Prop {
  id : string;
  // toggleHearingAid : Function,
  updateHearingAid: Function,
  hearingAidInfo: any
}


export const Checkboxes = (props : Prop) => {

  //const{myLeftCheckbox, myRightCheckbox, onLeftCheck, onRightCheck} = useAssignHearingAids();

  // console.log("heraingaidcomp",props.hearingAidInfo.right.serialNumber)
 
  // const onLeftCheck = () => {
  //   setMyLeftCheckbox(!myLeftCheckbox);
  //   setMyRightCheckbox(false);
  // };

  // const onRightCheck = () => {
  //   setMyRightCheckbox(!myRightCheckbox);
  //   setMyLeftCheckbox(false);
  // };

  const commonHA = (
    <>
      <h6>Styletto 7AX S (110/46)</h6>
      <h6>Serial No. SF00310</h6>
    </>
  );

  // const [myLeftCheckbox, setMyLeftCheckbox] = useState(false);
  // const [myRightCheckbox, setMyRightCheckbox] = useState(false);
  const onHearingAidSideButtonClick = (serialNo: string, side: "left" | "right") => {
    props.updateHearingAid(serialNo, side);
};
  return (
    <div className="hearing-aid">
      <Checkbox
        checked={props.hearingAidInfo.right === props.id}
        className="right-checkbox"
        label="R"
        id="myCheckboxR"
        onChange={() => {
          // onRightCheck();
         onHearingAidSideButtonClick(props.id, "right");
          }}
      />
      {(props.hearingAidInfo.right == props.id || props.hearingAidInfo.left == props.id) ? (
        <div
          className="ha"
         style={{backgroundColor: props.hearingAidInfo.right === props.id ? "#ED0400" : "#00508E", color : '#fff'}}
        >
          {commonHA}
        </div>
      ) : (
        <div className="ha">{commonHA}</div>
      )}

      <Checkbox
        checked={ props.hearingAidInfo.left === props.id}
        className="left-checkbox"
        label="L"
        id="myCheckboxL"
        onChange={() => {
          // onLeftCheck();
          onHearingAidSideButtonClick(props.id, "left");
          }}
      />
    </div>
  );
};
