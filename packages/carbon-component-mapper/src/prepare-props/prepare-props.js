import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import WithDescription from '../with-description';
=======
import WithDescription from '../common/with-description';
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
=======
import WithDescription from '../with-description';
>>>>>>> 0ddadaea (fix(all): fix imports after build process update)
import IsRequired from '../is-required/is-required';

export const buildLabel = (label, isRequired) => (label && (isRequired ? <IsRequired>{label}</IsRequired> : label)) || undefined;

const prepareProps = ({ isDisabled, isReadOnly, isRequired = false, label, description, ...props }) => ({
  disabled: isDisabled,
  labelText: buildLabel(label, isRequired),
  readOnly: isReadOnly,
  ...props,
  ...(description ? { labelText: <WithDescription description={description} labelText={buildLabel(label || props.labelText, isRequired)} /> } : {})
});

export default prepareProps;
