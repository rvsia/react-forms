import { ValidatorType } from "../files/use-field-api";
import { ReactNode } from "react";
<<<<<<< HEAD:packages/react-form-renderer/src/form-renderer/validator-helpers.d.ts
import { ValidatorMapper } from "../files/validator-mapper";
import { DataType } from "../files/data-types";
import { ValidatorFunction } from "../files/validators";
=======
import { ValidatorMapper } from "../validator-mapper";
import { DataType } from "../data-types";
import { ValidatorFunction } from "../validators/validators";
>>>>>>> 1b5a7810 (fix renderer tests after new build process):packages/react-form-renderer/src/use-field-api/validator-helpers.d.ts

export type convertToWarning = (validator: ValidatorType) => ValidatorFunction;

export function prepareValidator(
  validator: ValidatorFunction | ValidatorType,
  mapper: ValidatorMapper): ValidatorFunction;

export function getValidate(
  validate?: Array<ValidatorFunction | ValidatorType>,
  dataType?: DataType,
  mapper?: ValidatorMapper): ValidatorFunction[];

export function prepareArrayValidator(validation: ValidatorFunction[]): ValidatorFunction;
