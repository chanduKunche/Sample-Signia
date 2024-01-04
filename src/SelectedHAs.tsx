import "./index.css";
import { Button } from "@wsa/echo-components";

import { HearingAidsIndicator } from "@wsa/echo-components";
export const SelectedHAs = () => {
  return (
    <div className="Selected-ha" >
      <HearingAidsIndicator style={{marginLeft: "150px"}}side="right">R</HearingAidsIndicator>
      <p className="ha-p">Styletto 7AX S(110/46)</p>
      <Button variant="secondary">Disconnect</Button>
     
      <p className="ha-p">Styletto 7AX S(110/46)</p>
      <HearingAidsIndicator style={{marginRight: "150px"}} side="left">L</HearingAidsIndicator>
    </div>
  );
};
