import React from "react";
import DynamicInputTextProperty from "./InputTextProperty";

export type DynamicInputTextPropertyProps = {
    displayName: string;
    name: string,
    type: string
}

const DynamicPropertiesFactory = (propertyDetails: DynamicInputTextPropertyProps) => {
    switch (propertyDetails.type) {
        case "string":
          return <DynamicInputTextProperty displayName={propertyDetails.displayName} name={propertyDetails.name} type={propertyDetails.type}></DynamicInputTextProperty>
        default:
          return <div>Reload...</div>;
      }
}

export default DynamicPropertiesFactory