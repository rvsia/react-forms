import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  helperTextStyle: {
    color: '#da1e28',
    display: 'block',
    overflow: 'initial'
  }
});

const HelperTextBlock = ({ helperText, errorText, warnText }) => {
  const { helperTextStyle } = useStyles();

  if (errorText) {
    return <div className={`bx--form-requirement ddorg__carbon-error-helper-text ${helperTextStyle}`}>{errorText}</div>;
  }

  if (warnText) {
    return <div className={`bx--form-requirement ddorg__carbon-error-helper-text ${helperTextStyle}`}>{warnText}</div>;
=======

import './helper-text-block.scss';

const HelperTextBlock = ({ helperText, errorText, warnText }) => {
  if (errorText) {
    return <div className="bx--form-requirement ddorg__carbon-error-helper-text">{errorText}</div>;
  }

  if (warnText) {
    return <div className="bx--form-requirement ddorg__carbon-warning-helper-text">{warnText}</div>;
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
  }

  if (helperText) {
    return <div className="bx--form__helper-text">{helperText}</div>;
  }

  return null;
};

HelperTextBlock.propTypes = {
  helperText: PropTypes.node,
  errorText: PropTypes.node,
  warnText: PropTypes.node
};

export default HelperTextBlock;
