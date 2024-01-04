import "./App.css";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@wsa/echo-components";
import { Checkboxes } from "./HearingAids";
import { useEffect, useState } from "react";
import { SelectedHAs } from "./SelectedHAs";
// import useAssignHearingAids from "./useAssignHearingAids";

interface AssignedHearingAids {
  left: string | null;
  right: string | null;
}
function App() {
  const navigate = useNavigate();
  function handleClick() {
    // navigate("/SelectedHAs");
    setProceed(true)
  }



  // const{myLeftCheckbox, myRightCheckbox, onLeftCheck, onRightCheck, toggleHearingAid} = useAssignHearingAids();

  const [hearingAidInfo, setHearingAIdInfo] = useState<AssignedHearingAids>({right: "",left: ""});
  const [proceed, setProceed] = useState(false)
  function updateHearingAid(id: string, value: "left" | "right"){
   
    // if(hearingAidInfo[value] != undefined){
    //   delete hearingAidInfo[value];
    // }
    // hearingAidInfo.value = id;
    // if(value==="left"){
    //   setHearingAIdInfo({right: "",left: id});
    // }
    // else{
    //   setHearingAIdInfo({right: id,left: ""});
    // }


    setHearingAIdInfo(prevHearingAid => {
      const updatedHearingAid = { ...prevHearingAid };
      const oppositeSide = value === "left" ? "right" : "left";
      if (prevHearingAid[oppositeSide] === id) {
          updatedHearingAid[oppositeSide] = null;
      }
      if (prevHearingAid[value] === id) {
          updatedHearingAid[value] = null;
      } else {
          updatedHearingAid[value] = id;
      }
      return updatedHearingAid;
  });
    console.log("hearingAidInfo----->",hearingAidInfo)
    
  }

  useEffect(() => {
    console.log("hearingAidInfoNew----->",hearingAidInfo)
  },[hearingAidInfo])
  const res =[
    {
        id: " SF00310",
        serialNumber: "Serial No. SF00310",
        haName: null,
        brand: "Styletto 7AX S (110/46)",
        earSide: "Right",
    },
    {
        id: "2 SF00310",
        serialNumber: "Serial No. SF00311",
        haName: null,
        brand: "Styletto pro 7AX S (110/46)",
        earSide: "Left",
    },
    {
      id: "S SF00310",
      serialNumber: "Serial No. SF00312",
      haName: null,
      brand: "Styletto pro 7AX S (110/46)",
      earSide: "Left",
  },
]


  return (
    <>{
      proceed ? 
      <SelectedHAs hearingAidInfo={hearingAidInfo} />
       :
       <div className="container">
       <h3>Connect Hearing Aids</h3>
       {
         res.map((i,index) => (
           <>
           <Checkboxes  key={index} id={i.serialNumber} name={i.brand}updateHearingAid={updateHearingAid} hearingAidInfo={hearingAidInfo}/>

           </>
         ))
       }
         <div className="button-container">
         <Button size="small" variant="secondary" style={{ marginRight:"340px"}}>Retry</Button>
         <Button size="small" onClick={handleClick} >OK</Button>
         <Button  size="small" variant="secondary" style={{ marginRight:"5px"}}>Cancel</Button>
         </div>
     </div>
      }
    </>
  );
}

export default App;


