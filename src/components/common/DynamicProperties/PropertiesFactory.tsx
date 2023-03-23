import React from "react";
import { ProcssPropertiesSchema } from "../../../services/models/Process";
import DynamicInputTextProperty from "./InputTextProperty";

const DynamicPropertiesFactory = (propertyDetails: ProcssPropertiesSchema) => {
    switch (propertyDetails.propertyKind) {
        case "string":
          return <DynamicInputTextProperty {...propertyDetails}></DynamicInputTextProperty>
        default:
          return <div>Reload...</div>;
      }
}

export default DynamicPropertiesFactory