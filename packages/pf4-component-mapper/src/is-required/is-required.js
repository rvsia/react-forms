import React from 'react';
<<<<<<< HEAD
import { childrenPropTypes } from '@data-driven-forms/common/prop-types-templates';
=======
import { childrenPropTypes } from '@data-driven-forms/common/src/prop-types-templates';
>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.)

const IsRequired = ({ children }) => (
  <React.Fragment>
    {children}
    <span className="pf-c-form__label-required" aria-hidden="true">
      *
    </span>
  </React.Fragment>
);

IsRequired.propTypes = {
  children: childrenPropTypes
};

export default IsRequired;
