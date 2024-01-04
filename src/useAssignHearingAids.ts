import React from "react";
import { useState } from "react";

const useAssignHearingAids = () => {
    const [myLeftCheckbox, setMyLeftCheckbox] = useState(false);
    const [myRightCheckbox, setMyRightCheckbox] = useState(false);
    const onLeftCheck = () => {
        setMyLeftCheckbox(!myLeftCheckbox);
        setMyRightCheckbox(false);
      };
    
      const onRightCheck = () => {
        setMyRightCheckbox(!myRightCheckbox);
        setMyLeftCheckbox(false);
      };
      // const toggleHearingAid = (key : number, selectSide : boolean) => {
      //   if(key && selectSide){
      //       setMyLeftCheckbox(false);
      //   }
      //   else if(key && selectSide){
      //       setMyRightCheckbox(false)
      //   }

      // }

    return {
        myLeftCheckbox,
        myRightCheckbox,
        onLeftCheck,
        onRightCheck,
        // toggleHearingAid
    }

}

export default useAssignHearingAids;