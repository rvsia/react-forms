<<<<<<< HEAD
<<<<<<< HEAD
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
=======
import FormTemplateCommonProps from "@data-driven-forms/common/src/form-template";
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)
=======
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import { ReactNode } from "react";

export interface FormTemplateProps extends FormTemplateCommonProps {
  requiredLabelInfo?: ReactNode;
}

declare const FormTemplate: React.ComponentType<FormTemplateProps>;

export default FormTemplate;
