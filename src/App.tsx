import "./App.css";
import { Button } from "@wsa/echo-components";
import { Checkboxes } from "./HearingAids";
import { useState } from "react";
import { SelectedHAs } from "./SelectedHAs";
import { useNavigate } from "react-router-dom";

type AssignedHearingAids = {
  left: string | null;
  right: string | null;
};
const  App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/SelectedHAs', {state : hearingAidInfo})
  }

  const [hearingAidInfo, setHearingAIdInfo] = useState<AssignedHearingAids>({
    right: "",
    left: "",
  });

  function updateHearingAid(id: string, value: "left" | "right") {
    setHearingAIdInfo((prevHearingAid) => {
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
  }

  const res = [
    {
      id: 1,
      serialNumber: "Serial No. SF00310",
      brand: "Styletto 7AX S (110/46)",
      earSide: "Right",
    },
    {
      serialNumber: "Serial No. SF00311",
      brand: "Styletto pro 7AX S (110/46)",
      earSide: "Left",
    },
    {
      serialNumber: "Serial No. SF00312",
      brand: "Styletto pro 7AX S (110/46)",
      earSide: "Left",
    },
  ];

  return (
    <>
        <div className="container">
          <h3>Connect Hearing Aids</h3>
          {res.map((i, index) => (
            <>
              <Checkboxes
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
}

export default App;
