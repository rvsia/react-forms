import React from 'react';
import PropTypes from 'prop-types';

import { TextContent, Text } from '@patternfly/react-core';
<<<<<<< HEAD
<<<<<<< HEAD
import validTextFields from '@data-driven-forms/common/utils/valid-text-fields';
=======
import validTextFields from '@data-driven-forms/common/src/utils/valid-text-fields';
>>>>>>> 8a9ee0d9 (feat(pf4): Migrate to new build process.)
=======
import validTextFields from '@data-driven-forms/common/utils/valid-text-fields';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)

const PlainText = ({ component, label, name, variant, TextContentProps, ...rest }) => (
  <TextContent {...TextContentProps}>
    {typeof label === 'string'
      ? label.split('\n').map((paragraph, index) => (
          <Text component={variant} {...rest} key={`${name}-${index}`}>
            {paragraph}
          </Text>
        ))
      : label}
  </TextContent>
);

PlainText.propTypes = {
  variant: PropTypes.oneOf(validTextFields),
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  TextContentProps: PropTypes.object,
  component: PropTypes.string
};

PlainText.defaultProps = {
  variant: 'p'
};

export default PlainText;
