import "./App.css";

import { Button } from "@wsa/echo-components";
import { HearingAids } from "./HearingAids";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AssignedHearingAids = {
  left: string | null;
  right: string | null;
};

const App = () => {
  const [hearingAidInfo, setHearingAIdInfo] = useState<AssignedHearingAids>({
    right: "",
    left: "",
  });

  const navigate = useNavigate();
  const handleClick = () => {
    const aidList = [];
    for(const hearingAid of HearingAidsInformation){
      if(hearingAid.serialNumber == hearingAidInfo.left){
        aidList[1] = hearingAid
      }
      if(hearingAid.serialNumber == hearingAidInfo.right){
        aidList[0] = hearingAid
      }
    }
    navigate("/SelectedHAs", { state: aidList });
  };

  const updateHearingAid = (id: string, value: "left" | "right") => {
    setHearingAIdInfo((prevHearingAid) => {
      const updatedHearingAid = { ...prevHearingAid };
      const oppositeSide = value === "left" ? "right" : "left";
      if (prevHearingAid[oppositeSide] === id) {
        updatedHearingAid[oppositeSide] = null;
      }
      updatedHearingAid[value] = prevHearingAid[value] === id ? null : id;
      return updatedHearingAid;
    });
  };

  const HearingAidsInformation = [
    {
      id: 1,
      serialNumber: "Serial No. SF00310",
      brand: "Styletto 7AX S (110/46)",
    },
    {
      id:2,
      serialNumber: "Serial No. SF00311",
      brand: "Styletto pro 7AX S (110/46)",
    },
    {
      id:3,
      serialNumber: "Serial No. SF00312",
      brand: "Styletto pro 7AX S (110/46)",
    },
  ];

  return (
    <>
      <div className="container">
        <h3>Connect Hearing Aids</h3>
        {HearingAidsInformation.map((i, index) => (
          <>
            <HearingAids
              key={index}
              id={i.serialNumber}
              name={i.brand}
              updateHearingAid={updateHearingAid}
              hearingAidInfo={hearingAidInfo}
            />
          </>
        ))}
        <div className="button-container">
          <Button
            size="small"
            variant="secondary"
            style={{ marginRight: "340px" }}
          >
            Retry
          </Button>
          <Button size="small" onClick={handleClick}>
            OK
          </Button>
          <Button
            size="small"
            variant="secondary"
            style={{ marginRight: "5px" }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
