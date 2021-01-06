import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { TextArea } from 'carbon-components-react';

<<<<<<< HEAD
<<<<<<< HEAD
import prepareProps from '../prepare-props';
=======
import prepareProps from './prepare-props';
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
=======
import prepareProps from '../prepare-props';
>>>>>>> 0ddadaea (fix(all): fix imports after build process update)

const Textarea = (props) => {
  const { input, meta, validateOnMount, helperText, ...rest } = useFieldApi(prepareProps(props));

  const invalid = (meta.touched || validateOnMount) && (meta.error || meta.submitError);
  const text = ((meta.touched || validateOnMount) && meta.warning) || helperText;

  return <TextArea {...input} key={input.name} id={input.name} invalid={Boolean(invalid)} invalidText={invalid || ''} helperText={text} {...rest} />;
};

Textarea.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  labelText: PropTypes.node,
  description: PropTypes.node,
  helperText: PropTypes.node
};

export default Textarea;
