import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { WizardContext } from '@data-driven-forms/react-form-renderer';
<<<<<<< HEAD
<<<<<<< HEAD
import Wizard from '@data-driven-forms/common/wizard/wizard';
=======
import Wizard from '@data-driven-forms/common/src/wizard/wizard';
>>>>>>> 704f14c3 (feat(suir): Migrate to new build process.)
=======
import Wizard from '@data-driven-forms/common/wizard/wizard';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import WizardNav from './wizard-nav';
import WizardStepButtons from './step-buttons';

const WizardInternal = ({ buttonLabels, stepsInfo }) => {
  const { formOptions, currentStep, handlePrev, onKeyDown, handleNext, activeStepIndex, prevSteps } = useContext(WizardContext);

  const buttonLabelsFinal = {
    next: 'Continue',
    submit: 'Submit',
    cancel: 'Cancel',
    back: 'Back',
    ...buttonLabels
  };

  return (
    <div onKeyDown={onKeyDown}>
      {stepsInfo && <WizardNav stepsInfo={stepsInfo} activeStepIndex={activeStepIndex} />}
      <div>
        {currentStep.fields.map((item) => formOptions.renderForm([item], formOptions))}
        <WizardStepButtons
          {...currentStep}
          formOptions={formOptions}
          buttonLabels={buttonLabelsFinal}
          handleNext={handleNext}
          handlePrev={handlePrev}
          disableBack={prevSteps.length === 0}
        />
      </div>
    </div>
  );
};

WizardInternal.propTypes = {
  buttonLabels: PropTypes.object,
  stepsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      label: PropTypes.node,
      StepLabelProps: PropTypes.object,
      StepProps: PropTypes.object
    })
  )
};

const SuirWizard = (props) => <Wizard Wizard={WizardInternal} {...props} />;

export default SuirWizard;
