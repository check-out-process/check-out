import React from "react";
import { ProcssPropertiesSchema } from "../../../services/models/Process";
import CheckBoxProperty from "./CheckBoxProperty";
import InputTextProperty from "./InputTextProperty.component";


export type DynamicPropertyType = {
  property: ProcssPropertiesSchema,
  onChange: (key: any, value: any) => void
}

const DynamicPropertiesFactory = (props: DynamicPropertyType) => {
  switch (props.property.propertyKind) {
    case "string":
      return <InputTextProperty property={props.property} onChange={props.onChange}></InputTextProperty>
    case "checkbox":
      return <CheckBoxProperty property={props.property} onChange={props.onChange}></CheckBoxProperty>
    default:
      return <div>Reload...</div>;
  }
}

export default DynamicPropertiesFactory