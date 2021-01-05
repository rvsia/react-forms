import React from 'react';
<<<<<<< HEAD
import { childrenPropTypes } from '@data-driven-forms/common/prop-types-templates';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  isRequired: {
    color: '#E0182D',
    marginRight: 4
  }
});

const IsRequired = ({ children }) => {
  const { isRequired } = useStyles();

  return (
    <React.Fragment>
      <span className={`ddorg__carbon-component-mapper_is-required ${isRequired}`} aria-hidden="true">
        *
      </span>
      {children}
    </React.Fragment>
  );
};
=======
import { childrenPropTypes } from '@data-driven-forms/common/src/prop-types-templates';

import './is-required.scss';

const IsRequired = ({ children }) => (
  <React.Fragment>
    <span className="ddorg__carbon-component-mapper_is-required" aria-hidden="true">
      *
    </span>
    {children}
  </React.Fragment>
);
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

IsRequired.propTypes = {
  children: childrenPropTypes
};

export default IsRequired;
