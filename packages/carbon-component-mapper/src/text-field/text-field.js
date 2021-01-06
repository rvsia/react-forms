import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { TextInput, NumberInput } from 'carbon-components-react';

<<<<<<< HEAD
<<<<<<< HEAD
import prepareProps from '../prepare-props';
=======
import prepareProps from './prepare-props';
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
=======
import prepareProps from '../prepare-props';
>>>>>>> 0ddadaea (fix(all): fix imports after build process update)

const TextField = (props) => {
  const { input, meta, validateOnMount, labelText, ...rest } = useFieldApi(prepareProps(props));

  const Component = input.type === 'number' ? NumberInput : TextInput;

  const invalid = (meta.touched || validateOnMount) && (meta.error || meta.submitError);
  const warn = (meta.touched || validateOnMount) && meta.warning;

  return (
    <Component
      {...input}
      key={input.name}
      id={input.name}
      invalid={Boolean(invalid)}
      invalidText={invalid || ''}
      warn={Boolean(warn)}
      warnText={warn || ''}
      {...(input.type === 'number' ? { label: labelText } : { labelText })}
      {...rest}
    />
  );
};

TextField.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  labelText: PropTypes.node,
  description: PropTypes.node
};

export default TextField;
