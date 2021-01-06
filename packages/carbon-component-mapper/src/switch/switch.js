import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { Toggle } from 'carbon-components-react';

<<<<<<< HEAD
<<<<<<< HEAD
import prepareProps from '../prepare-props';
=======
import prepareProps from './prepare-props';
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
=======
import prepareProps from '../prepare-props';
>>>>>>> 0ddadaea (fix(all): fix imports after build process update)
import HelperTextBlock from '../helper-text-block/helper-text-block';

const Switch = (props) => {
  const { input, meta, onText, offText, validateOnMount, helperText, WrapperProps, ...rest } = useFieldApi(prepareProps(props));

  const invalid = (meta.touched || validateOnMount) && (meta.error || meta.submitError);
  const warnText = (meta.touched || validateOnMount) && meta.warning;

  return (
    <div {...WrapperProps}>
      <Toggle {...input} key={input.name} id={input.name} labelA={offText} labelB={onText} {...rest} />
      <HelperTextBlock helperText={helperText} errorText={invalid} warnText={warnText} />
    </div>
  );
};

Switch.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  labelText: PropTypes.node,
  description: PropTypes.node,
  WrapperProps: PropTypes.object
};

export default Switch;
