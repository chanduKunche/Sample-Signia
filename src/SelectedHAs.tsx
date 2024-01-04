import "./index.css";
import { Button } from "@wsa/echo-components";

type Prop = {
  hearingAidInfo : any
}

import { HearingAidsIndicator } from "@wsa/echo-components";
export const SelectedHAs = (props : Prop) => {
  return (
    <div className="Selected-ha" >
      <HearingAidsIndicator style={{marginLeft: "150px"}}side="right">R</HearingAidsIndicator>
      <p className="ha-p">{props.brand}{props.hearingAidInfo.right}</p>
      <Button variant="secondary">Disconnect</Button>
     
      <p className="ha-p">{props.brand}{props.hearingAidInfo.left}</p>
      <HearingAidsIndicator style={{marginRight: "150px"}} side="left">L</HearingAidsIndicator>
    </div>
  );
};
