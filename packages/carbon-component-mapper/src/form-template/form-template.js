import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
<<<<<<< HEAD
import { createUseStyles } from 'react-jss';

import { Form as CarbonForm, Button as CarbonButton, ButtonSet } from 'carbon-components-react';

import FormTemplate from '@data-driven-forms/common/form-template';

const useStyles = createUseStyles({
  buttons: {
    marginTop: 48
  },
  header: {
    marginBottom: 40,
    div: {
      marginTop: 8
    }
  },
  form: {
    '&>:not(:last-child)': {
      marginBottom: 32
    }
  }
});
=======

import { Form as CarbonForm, Button as CarbonButton, ButtonSet } from 'carbon-components-react';

import FormTemplate from '@data-driven-forms/common/form-template';

import './form-template.scss';
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

export const Button = ({ label, buttonType, ...props }) => (
  <CarbonButton kind={buttonType === 'submit' ? 'primary' : 'secondary'} {...props}>
    {label}
  </CarbonButton>
);

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  buttonType: PropTypes.string
};

<<<<<<< HEAD
export const ButtonGroup = ({ children, className, ...props }) => {
  const { butttons } = useStyles();

  return (
    <ButtonSet {...props} className={clsx(butttons, className)}>
      {children}
    </ButtonSet>
  );
};
=======
export const ButtonGroup = ({ children, className, ...props }) => (
  <ButtonSet {...props} className={clsx('ddorg__carbon-form-template-buttons', className)}>
    {children}
  </ButtonSet>
);
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string
};

export const Title = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export const Description = ({ children, ...props }) => <div {...props}>{children}</div>;

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

<<<<<<< HEAD
export const Form = ({ children, className, ...props }) => {
  const { form } = useStyles();

  return (
    <CarbonForm noValidate {...props} className={clsx(form, className)}>
      {children}
    </CarbonForm>
  );
};
=======
export const Form = ({ children, className, ...props }) => (
  <CarbonForm noValidate {...props} className={clsx('ddorg__carbon-form-template-form', className)}>
    {children}
  </CarbonForm>
);
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string
};

<<<<<<< HEAD
export const Header = (props) => {
  const { header } = useStyles();

  return <div className={header} {...props} />;
};
=======
export const Header = (props) => <div className="ddorg__carbon-form-template-header" {...props} />;
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

const WrappedFormTemplate = (props) => (
  <FormTemplate
    FormWrapper={Form}
    Button={Button}
    ButtonGroup={ButtonGroup}
    Title={Title}
    Description={Description}
    buttonOrder={['submit', 'reset', 'cancel']}
    Header={Header}
    {...props}
  />
);

export default WrappedFormTemplate;
