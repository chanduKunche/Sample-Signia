import "./App.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@wsa/echo-components";
import { Checkboxes } from "./HearingAids";
import { useState } from "react";

interface AssignedHearingAids {
  left: string | null;
  right: string | null;
}
function App() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/SelectedHAs");
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
    console.log("hearingAidInfo----->", hearingAidInfo);
  }
  const res = [
    {
      id: "3a25b831-17ed-4eb0-b6d4-6c1879322d4b",
      serialNumber: "6df89b41-ff81-44ef-a44f-85175f41884a",
      haName: null,
      brand: "Signia",
      earSide: "Right",
    },
    {
      id: "fd4cf856-54a6-41bd-b7b8-456844c3df4b",
      serialNumber: "bd913c1b-b58d-4cab-ab73-0e184db8f451",
      haName: null,
      brand: "Signia",
      earSide: "Left",
    },
    {
      id: "fd4cf856-54a6-41bd-b7b8-456844c3df4bdrff",
      serialNumber: "bd913c1b-b58d-4cab-ab73-0e184db8f451aaa",
      haName: null,
      brand: "Signia",
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
