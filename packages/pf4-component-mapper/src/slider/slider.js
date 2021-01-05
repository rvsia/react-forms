import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
<<<<<<< HEAD
import FormGroup from '../form-group';
import { Slider as PF4Slider } from '@patternfly/react-core';
=======
<<<<<<<< HEAD:packages/pf4-component-mapper/src/slider/slider.js
import FormGroup from '../form-group/form-group';
import { Badge, Grid, GridItem } from '@patternfly/react-core';

import './slider.scss';
========
import FormGroup from '../common/form-group';
import { Slider as PF4Slider } from '@patternfly/react-core';
>>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.):packages/pf4-component-mapper/src/files/slider.js
>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.)

const Slider = (props) => {
  const {
    label,
    isRequired,
    helperText,
    meta,
    validateOnMount,
    description,
    input,
    isReadOnly,
    isDisabled,
    id,
    FormGroupProps,
    ...rest
  } = useFieldApi(props);

  return (
    <FormGroup
      label={label}
      isRequired={isRequired}
      helperText={helperText}
      meta={meta}
      validateOnMount={validateOnMount}
      description={description}
      id={id || input.name}
      FormGroupProps={FormGroupProps}
    >
      <PF4Slider onChange={input.onChange} onValueChange={input.onChange} currentValue={input.value} inputValue={input.value} {...rest} />
    </FormGroup>
  );
};

Slider.propTypes = {
  label: PropTypes.node,
  validateOnMount: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  helperText: PropTypes.node,
  description: PropTypes.node,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  FormGroupProps: PropTypes.object
};

export default Slider;
