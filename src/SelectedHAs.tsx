import "./index.css";
import { Button } from "@wsa/echo-components";
import { HearingAidsIndicator } from "@wsa/echo-components";
import { Location, useLocation, useNavigate } from "react-router-dom";


export const SelectedHAs = () => {
  const navigate = useNavigate();
const handleDisconnect = () => {
  navigate('/')
}
  const temp: Location = {key: "", pathname: "", state: {}, search: "", hash: };
  console.log(temp);
  
  const {state} = useLocation();
  return (
    <div className="Selected-ha">
      <HearingAidsIndicator style={{ marginLeft: "150px" }} side="right">
        R
      </HearingAidsIndicator>
      <p className="ha-p">{state.right}</p>
      <Button variant="secondary" onClick={handleDisconnect}>
        Disconnect
      </Button>

      <p className="ha-p">{state.left}</p>
      <HearingAidsIndicator style={{ marginRight: "150px" }} side="left">
        L
      </HearingAidsIndicator>
    </div>
  );
};
