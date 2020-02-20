import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import MUISwitch from '@material-ui/core/Switch';
import { meta, input } from '@data-driven-forms/common/src/prop-types-templates';

import FormFieldGrid from '../common/form-field-grid';
import { validationError } from '../common/helpers';

export const SwitchInternal = ({ input, isReadOnly, isDisabled, isRequired, label, helperText, validateOnMount, meta, onText, offText, ...rest }) => {
  const invalid = validationError(meta, validateOnMount);

  return (
    <FormFieldGrid>
      <FormControl required={isRequired} error={!!invalid} component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <MUISwitch
                {...rest}
                {...input}
                readOnly={isReadOnly}
                disabled={isDisabled || isReadOnly}
                checked={!!input.value}
                onChange={({ target: { checked } }) => input.onChange(checked)}
              />
            }
            label={<FormLabel>{input.value ? onText || label : offText || label}</FormLabel>}
          />
          {(invalid || helperText) && <FormHelperText>{invalid || helperText}</FormHelperText>}
        </FormGroup>
      </FormControl>
    </FormFieldGrid>
  );
};

SwitchInternal.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  onText: PropTypes.node,
  offText: PropTypes.node
};

const Switch = ({ FieldProvider, ...props }) => <FieldProvider {...props} component={SwitchInternal} />;

Switch.propTypes = {
  FieldProvider: PropTypes.any
};

export default Switch;
