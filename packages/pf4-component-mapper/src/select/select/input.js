import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import './input.css';
=======
import './input.scss';
>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.)

const getInputString = (filter, value) => {
  if (typeof filter === 'string') {
    return filter;
  }

  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value) && typeof value[0] === 'string') {
    return value[0];
  }

  return '';
};

const Input = ({ inputRef, isSearchable, isDisabled, getInputProps, value, ...props }) => {
  const inputProps = getInputProps({ disabled: isDisabled });
  const initialInputValue = getInputString(inputProps.value, value);
  return (
    <input
      value=""
      {...props}
      className="pf-c-form-control pf-c-select__toggle-typeahead"
      ref={inputRef}
      {...{
        ...inputProps,
        value: initialInputValue,
        onKeyDown: (event, ...args) => {
          event.stopPropagation();
          inputProps.onKeyDown(event, ...args);
        },
        onChange: inputProps.onChange || Function
      }}
    />
  );
};

Input.propTypes = {
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  getInputProps: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default Input;
