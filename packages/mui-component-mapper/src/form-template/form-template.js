import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button as MUIButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
<<<<<<< HEAD
import FormTemplate from '@data-driven-forms/common/form-template';
=======
import FormTemplate from '@data-driven-forms/common/src/form-template';
>>>>>>> ccf469ee (feat(mui): Migrate mapper to new build output structure.)
=======
import FormTemplate from '@data-driven-forms/common/form-template';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)

const useStyles = makeStyles(() => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    '&>button:not(last-child)': {
      marginLeft: 8
    }
  }
}));

const Form = ({ children, GridContainerProps, GridProps, ...props }) => (
  <Grid item xs={12} {...GridProps}>
    <form noValidate {...props}>
      <Grid container item spacing={2} xs={12} {...GridContainerProps}>
        {children}
      </Grid>
    </form>
  </Grid>
);

Form.propTypes = {
  children: PropTypes.node,
  GridProps: PropTypes.object,
  GridContainerProps: PropTypes.object
};

const Description = ({ children, GridProps, ...props }) => (
  <Grid item xs={12} {...GridProps}>
    <Typography variant="body1" gutterBottom {...props}>
      {children}
    </Typography>
  </Grid>
);

Description.propTypes = {
  children: PropTypes.node,
  GridProps: PropTypes.object
};

const Title = ({ children, GridProps, ...props }) => (
  <Grid item xs={12} {...GridProps}>
    <Typography variant="h3" gutterBottom {...props}>
      {children}
    </Typography>
  </Grid>
);

Title.propTypes = {
  children: PropTypes.node,
  GridProps: PropTypes.object
};

const ButtonGroup = ({ children, GridProps, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} {...GridProps}>
      <div className={classes.buttonGroup} {...props}>
        {children}
      </div>
    </Grid>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  GridProps: PropTypes.object
};

const Button = ({ label, variant, children, buttonType, ...props }) => (
  <MUIButton color={variant} variant="contained" {...props}>
    {label || children}
  </MUIButton>
);

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  variant: PropTypes.string,
  buttonType: PropTypes.string
};

const MuiFormTemplate = (props) => (
  <FormTemplate FormWrapper={Form} Button={Button} ButtonGroup={ButtonGroup} Title={Title} Description={Description} {...props} />
);

export default MuiFormTemplate;
