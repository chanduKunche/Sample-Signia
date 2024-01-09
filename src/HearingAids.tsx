
import "./index.css";
import { Checkbox } from "@wsa/echo-components";

type checkBoxProps = {
  id: string;
  name: string;
  updateHearingAid: Function;
  hearingAidInfo: any;
};

export const HearingAids = (props: checkBoxProps) => {
  const commonH6 = (

    <>
      <h6>{props.name}</h6>
      <h6>{props.id}</h6>
    </>
  );

  const onHearingAidSideButtonClick = (
    serialNo: string,
    side: "left" | "right"
  ) => {
    props.updateHearingAid(serialNo, side);
  };
  return (
    <div className="hearing-aid">
      <Checkbox
        checked={props.hearingAidInfo.right === props.id}
        className="right-HearingAidIndicator"
        label="R"
        id="myCheckboxR"
        onChange={() => {
          onHearingAidSideButtonClick(props.id, "right");
        }}
      />
      {props.hearingAidInfo.right == props.id ||
      props.hearingAidInfo.left == props.id ? (
        <div
          className="ha"
          style={{
            backgroundColor:
              props.hearingAidInfo.right === props.id ? "#ED0400" : "#00508E",
            color: "#fff",
          }}
        >

          {commonH6}

        </div>
      ) : (
        <div className="ha">{commonH6}</div>
      )}

      <Checkbox
        checked={props.hearingAidInfo.left === props.id}
        className="left-HearingAidIndicator"
        label="L"
        onChange={() => {
          onHearingAidSideButtonClick(props.id, "left");
        }}
      />
    </div>
  );
};
