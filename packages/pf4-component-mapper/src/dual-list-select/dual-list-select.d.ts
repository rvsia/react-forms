import { UseFieldApiComponentConfig, AnyObject } from "@data-driven-forms/react-form-renderer";
import { DualListSelectorProps } from "@patternfly/react-core";
import { ReactNode } from "react";
<<<<<<< HEAD
import FormGroupProps from "../form-group";
=======
<<<<<<<< HEAD:packages/pf4-component-mapper/src/dual-list-select/dual-list-select.d.ts
import FormGroupProps from "../form-group";
import { FormGroupProps as FormGrpProps, ListProps, ToolbarProps, TextInputProps, ButtonProps, GridProps, GridItemProps, TextContentProps, FlexProps, FlexItemProps } from "@patternfly/react-core";
import { SVGIconProps } from "@patternfly/react-icons/dist/js/createIcon";

========
import FormGroupProps from "./form-group";
>>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.):packages/pf4-component-mapper/src/files/dual-list-select.d.ts
>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.)
export interface DualListSelectOption extends AnyObject {
  value: any;
  label: ReactNode | string;
}

export type GetValueFromNode = (node: ReactNode) => string;

interface InternalDualListSelectProps {
  options: Array<DualListSelectOption | string>;
  getValueFromNode?: GetValueFromNode;
  isSortable?: boolean;
}

export type DualListSelectProps = InternalDualListSelectProps & FormGroupProps & UseFieldApiComponentConfig & DualListSelectorProps;

declare const DualListSelect: React.ComponentType<DualListSelectProps>;

export default DualListSelect;
