import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@material-ui/core';

import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../common/helpers';
<<<<<<< HEAD
<<<<<<< HEAD
import { meta, input } from '@data-driven-forms/common/prop-types-templates';
=======
import { meta, input } from '@data-driven-forms/common/src/prop-types-templates';
>>>>>>> ccf469ee (feat(mui): Migrate mapper to new build output structure.)
=======
import { meta, input } from '@data-driven-forms/common/prop-types-templates';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

const Textarea = (props) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    FormFieldGridProps,
    inputProps,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <MuiTextField
        {...input}
        fullWidth
        error={!!invalid}
        helperText={invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description}
        disabled={isDisabled}
        label={label}
        placeholder={placeholder}
        required={isRequired}
        inputProps={{
          readOnly: isReadOnly,
          ...inputProps
        }}
        {...rest}
        multiline
      />
    </FormFieldGrid>
  );
};

Textarea.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.node,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  inputProps: PropTypes.object
};

Textarea.defaultProps = {
  FormFieldGridProps: {},
  inputProps: {}
};

export default Textarea;