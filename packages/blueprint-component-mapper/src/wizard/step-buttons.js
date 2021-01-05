import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import selectNext from '@data-driven-forms/common/wizard/select-next';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { Button, Intent } from '@blueprintjs/core';

=======
import selectNext from '@data-driven-forms/common/src/wizard/select-next';
=======
import selectNext from '@data-driven-forms/common/wizard/select-next';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import clsx from 'clsx';

import { Button, Intent } from '@blueprintjs/core';

import './step-buttons.scss';

>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)
const NextButton = ({ nextStep, handleNext, buttonLabels, getState, handleSubmit, isDisabled, ...props }) => (
  <Button
    disabled={isDisabled}
    onClick={() => (nextStep ? handleNext(selectNext(nextStep, getState)) : handleSubmit())}
    rightIcon={nextStep ? 'arrow-right' : 'arrow-up'}
    intent={Intent.SUCCESS}
    {...props}
  >
    {nextStep ? buttonLabels.next : buttonLabels.submit}
  </Button>
);

NextButton.propTypes = {
  handleNext: PropTypes.func,
  formOptions: PropTypes.shape({
    onCancel: PropTypes.func,
    renderForm: PropTypes.func,
    getState: PropTypes.func
  }),
  buttonLabels: PropTypes.object,
  nextStep: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  getState: PropTypes.func,
  handleSubmit: PropTypes.func,
  isDisabled: PropTypes.bool
};

<<<<<<< HEAD
const useStyles = createUseStyles({
  buttonGroup: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-between',

    '& button:not(:first-child)': {
      marginLeft: 8
    }
  }
});

=======
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)
const StepButtons = ({
  handleNext,
  currentStep,
  formOptions,
  activeStepIndex,
  buttonLabels,
  handlePrev,
  isNextDisabled,
  ButtonToolbarProps,
  DirectionButtonProps,
  CancelButtonProps,
  BackButtonProps,
  NextButtonProps,
  SubmitButtonProps
<<<<<<< HEAD
}) => {
  const { buttonGroup } = useStyles();

  return (
    <div {...ButtonToolbarProps} className={clsx(buttonGroup, ButtonToolbarProps && ButtonToolbarProps.className)}>
      <Button onClick={formOptions.onCancel} minimal {...CancelButtonProps}>
        {buttonLabels.cancel}
      </Button>
      <div {...DirectionButtonProps}>
        <Button onClick={handlePrev} disabled={activeStepIndex === 0} {...BackButtonProps}>
          {buttonLabels.back}
        </Button>
        <NextButton
          getState={formOptions.getState}
          nextStep={currentStep.nextStep}
          buttonLabels={buttonLabels}
          handleNext={handleNext}
          isDisabled={!formOptions.valid || isNextDisabled}
          handleSubmit={formOptions.handleSubmit}
          {...(currentStep.nextStep ? NextButtonProps : SubmitButtonProps)}
        />
      </div>
    </div>
  );
};
=======
}) => (
  <div {...ButtonToolbarProps} className={clsx('ddorg__blueprint_mapper--wizard-button-group', ButtonToolbarProps && ButtonToolbarProps.className)}>
    <Button onClick={formOptions.onCancel} minimal {...CancelButtonProps}>
      {buttonLabels.cancel}
    </Button>
    <div {...DirectionButtonProps}>
      <Button onClick={handlePrev} disabled={activeStepIndex === 0} {...BackButtonProps}>
        {buttonLabels.back}
      </Button>
      <NextButton
        getState={formOptions.getState}
        nextStep={currentStep.nextStep}
        buttonLabels={buttonLabels}
        handleNext={handleNext}
        isDisabled={!formOptions.valid || isNextDisabled}
        handleSubmit={formOptions.handleSubmit}
        {...(currentStep.nextStep ? NextButtonProps : SubmitButtonProps)}
      />
    </div>
  </div>
);
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)

StepButtons.propTypes = {
  currentStep: PropTypes.object,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  formOptions: PropTypes.shape({
    onCancel: PropTypes.func,
    renderForm: PropTypes.func,
    getState: PropTypes.func,
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool
  }),
  activeStepIndex: PropTypes.number,
  buttonLabels: PropTypes.object,
  isNextDisabled: PropTypes.bool,
  ButtonToolbarProps: PropTypes.object,
  DirectionButtonProps: PropTypes.object,
  CancelButtonProps: PropTypes.object,
  BackButtonProps: PropTypes.object,
  NextButtonProps: PropTypes.object,
  SubmitButtonProps: PropTypes.object
};

export default StepButtons;
