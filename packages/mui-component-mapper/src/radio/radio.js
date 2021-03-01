import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MUIRadio, FormControlLabel, FormControl, FormLabel, FormHelperText } from '@material-ui/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { wrapperProps } from '@data-driven-forms/common/multiple-choice-list';
=======
import { wrapperProps } from '@data-driven-forms/common/src/multiple-choice-list';
>>>>>>> ccf469ee (feat(mui): Migrate mapper to new build output structure.)
=======
import { wrapperProps } from '@data-driven-forms/common/multiple-choice-list';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import { makeStyles } from '@material-ui/core/styles';

import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../common/helpers';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

const useStyles = makeStyles(() => ({
  grid: {
    '&:first-child': {
      marginTop: 8
    }
  }
}));

const RadioOption = ({ name, option, isDisabled, isReadOnly, FormControlLabelProps, RadioProps: { inputProps, ...RadioProps }, ...props }) => {
  const { input } = useFieldApi({ name, type: 'radio', value: option.value });
  return (
    <FormControlLabel
      key={`${name}-${option.value}`}
      control={
        <MUIRadio
          {...input}
          name={name}
          disabled={isDisabled || isReadOnly}
          onChange={() => input.onChange(option.value)}
          inputProps={{
            readOnly: isReadOnly,
            ...inputProps
          }}
          {...RadioProps}
        />
      }
      label={option.label}
      {...FormControlLabelProps}
      {...props}
    />
  );
};

RadioOption.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.shape({ label: PropTypes.node.isRequired, value: PropTypes.any.isRequired }).isRequired,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  FormControlLabelProps: PropTypes.object,
  RadioProps: PropTypes.object
};

const Radio = ({ name, ...props }) => {
  const {
    options,
    isDisabled,
    label,
    isRequired,
    helperText,
    description,
    isReadOnly,
    meta,
    validateOnMount,
    FormFieldGridProps,
    FormControlProps,
    FormLabelProps,
    FormHelperTextProps,
    ...rest
  } = useFieldApi({
    ...props,
    name,
    type: 'radio'
  });
  const classes = useStyles();
  const invalid = validationError(meta, validateOnMount);
  const text = invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description;
  return (
    <FormFieldGrid className={classes.grid} {...FormFieldGridProps}>
      <FormControl required={isRequired} error={!!invalid} component="fieldset" {...FormControlProps}>
        <FormLabel component="legend" {...FormLabelProps}>
          {label}
        </FormLabel>
        {options.map((option) => (
          <RadioOption key={option.value} name={name} option={option} isDisabled={isDisabled} isReadOnly={isReadOnly} {...rest} />
        ))}
        {text && <FormHelperText {...FormHelperTextProps}>{text}</FormHelperText>}
      </FormControl>
    </FormFieldGrid>
  );
};

Radio.propTypes = {
  ...wrapperProps,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.node
    })
  ),
  label: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  FormControlProps: PropTypes.object,
  FormControlLabelProps: PropTypes.object,
  RadioProps: PropTypes.object,
  FormLabelProps: PropTypes.object,
  FormHelperTextProps: PropTypes.object
};

Radio.defaultProps = {
  options: [],
  FormFieldGridProps: {},
  FormControlProps: {},
  FormControlLabelProps: {},
  RadioProps: {},
  FormLabelProps: {},
  FormHelperTextProps: {}
};

export default Radio;
