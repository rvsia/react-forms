import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import validTextFields from '@data-driven-forms/common/utils/valid-text-fields';
=======
import validTextFields from '@data-driven-forms/common/src/utils/valid-text-fields';
>>>>>>> 704f14c3 (feat(suir): Migrate to new build process.)

const PlainText = ({ variant, label, name, ...rest }) =>
  typeof label === 'string'
    ? label.split('\n').map((paragraph, index) => React.createElement(variant, { key: `${name}-${index}`, ...rest }, paragraph))
    : { label };

PlainText.propTypes = {
  variant: PropTypes.oneOf(validTextFields),
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

PlainText.defaultProps = {
  variant: 'p'
};

export default PlainText;
