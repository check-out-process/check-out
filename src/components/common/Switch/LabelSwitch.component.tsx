import * as React from "react";
import './LabelSwitch.component.css'
import { Button } from "@material-ui/core";

export type LabelSwitchProps = {
  leftText: string;
  rightText: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const LabelSwitch: React.FC<LabelSwitchProps> = ({ leftText, rightText, onLeftClick, onRightClick }) => {
  const [subType, setSubType] = React.useState("left");

  const isRightSide = () => subType === "right";

  return (
    <div style={{ display: "flex", direction: 'ltr' }}>
      <div className="mask-box">
        <div
          className="mask"
          style={{ transform: `translateX(${isRightSide() ? 0 : "100px"})` }}
        />
        <Button
          disabled={isRightSide()}
          style={{ color: isRightSide() ? "#ffffff" : "#5316AE" }}
          onClick={() => { onLeftClick(); setSubType("right") }}
        >
          {leftText}
        </Button>
        <Button
          disabled={!isRightSide()}
          style={{ color: !isRightSide() ? "#ffffff" : "#5316AE" }}
          onClick={() => { onRightClick(); setSubType("left") }}
        >
          {rightText}
        </Button>
      </div>
    </div>
  );

}

export default LabelSwitch