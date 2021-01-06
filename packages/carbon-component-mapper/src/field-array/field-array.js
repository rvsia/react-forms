import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
<<<<<<< HEAD
import { createUseStyles } from 'react-jss';
=======
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

import { useFieldApi, useFormApi, FieldArray as FieldArrayFF } from '@data-driven-forms/react-form-renderer';

import { Button, FormGroup } from 'carbon-components-react';
import { AddAlt32, Subtract32 } from '@carbon/icons-react';

<<<<<<< HEAD
import prepareProps from '../prepare-props';

const useStyles = createUseStyles({
  add: {
    marginTop: 16
  },
  addContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  remove: {
    marginTop: 8,
    marginBottom: 8
  },
  formGroup: {
    '.bx--form__requirements': {
      color: '#da1e28'
    }
  }
});

const ArrayItem = ({ remove, fields, name, removeText, buttonDisabled, RemoveButtonProps, ArrayItemProps }) => {
  const formOptions = useFormApi();
  const { remove: removeStyle } = useStyles();
=======
import './field-array.scss';

import prepareProps from '../prepare-props';

const ArrayItem = ({ remove, fields, name, removeText, buttonDisabled, RemoveButtonProps, ArrayItemProps }) => {
  const formOptions = useFormApi();
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)

  const editedFields = fields.map((field) => ({
    ...field,
    ...(field.name ? { name: `${name}.${field.name}` } : { name })
  }));

  return (
    <div {...ArrayItemProps}>
      {formOptions.renderForm(editedFields, formOptions)}
      <Button
        disabled={buttonDisabled}
        renderIcon={Subtract32}
        id={`remove-${name}`}
        kind="danger"
        onClick={remove}
        {...RemoveButtonProps}
<<<<<<< HEAD
        className={clsx(removeStyle, RemoveButtonProps.className)}
=======
        className={clsx('ddorg__carbon-field-array-remove', RemoveButtonProps.className)}
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
      >
        {removeText}
      </Button>
    </div>
  );
};

ArrayItem.propTypes = {
  remove: PropTypes.func,
  fields: PropTypes.array,
  name: PropTypes.string,
  removeText: PropTypes.node,
  buttonDisabled: PropTypes.bool,
  RemoveButtonProps: PropTypes.object,
  ArrayItemProps: PropTypes.object
};

ArrayItem.defaultProps = {
  RemoveButtonProps: {},
  ArrayItemProps: {}
};

const FieldArray = (props) => {
  const {
    AddContainerProps,
    AddButtonProps,
    FormGroupProps,
    WrapperProps,
    ArrayItemProps,
    RemoveButtonProps,
    defaultItem,
    maxItems,
    minItems,
    fields,
    input,
    arrayValidator,
    labelText,
    buttonLabels,
    noItemsMessage,
    meta,
    validateOnMount
  } = useFieldApi(prepareProps(props));

<<<<<<< HEAD
  const { formGroup, addContainer, add } = useStyles();

=======
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
  const buttonLabelsFinal = {
    add: 'Add',
    remove: 'Remove',
    ...buttonLabels
  };

  const invalid = (meta.touched || validateOnMount) && !Array.isArray(meta.error) && (meta.error || meta.submitError);

  return (
    <FormGroup
      legendText={labelText || ''}
      invalid={Boolean(invalid)}
      message={Boolean(invalid)}
      messageText={invalid || ''}
      {...FormGroupProps}
<<<<<<< HEAD
      className={clsx(formGroup, FormGroupProps.className)}
=======
      className={clsx('ddorg__carbon-field-array-form-group', FormGroupProps.className)}
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
    >
      <FieldArrayFF name={input.name} validate={arrayValidator}>
        {(fieldArrayProps) => (
          <div {...WrapperProps}>
            {fieldArrayProps.fields.length === 0 && noItemsMessage}
            {fieldArrayProps.fields.map((name, index) => (
              <ArrayItem
                removeText={buttonLabelsFinal.remove}
                key={index}
                remove={() => fieldArrayProps.fields.remove(index)}
                name={name}
                fields={fields}
                buttonDisabled={minItems >= fieldArrayProps.fields.length}
                ArrayItemProps={ArrayItemProps}
                RemoveButtonProps={RemoveButtonProps}
              />
            ))}
<<<<<<< HEAD
            <div {...AddContainerProps} className={clsx(addContainer, AddContainerProps.className)}>
=======
            <div {...AddContainerProps} className={clsx('ddorg__carbon-field-array-add-container', AddContainerProps.className)}>
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
              <Button
                disabled={fieldArrayProps.fields.length >= maxItems}
                renderIcon={AddAlt32}
                id={`add-${input.name}`}
                onClick={() => fieldArrayProps.fields.push(defaultItem)}
                {...AddButtonProps}
<<<<<<< HEAD
                className={clsx(add, AddButtonProps.className)}
=======
                className={clsx('ddorg__carbon-field-array-add', AddButtonProps.className)}
>>>>>>> a4fc282c (feat(carbon): Migrate to new build process.)
              >
                {buttonLabelsFinal.add}
              </Button>
            </div>
          </div>
        )}
      </FieldArrayFF>
    </FormGroup>
  );
};

FieldArray.propTypes = {
  noItemsMessage: PropTypes.node,
  maxItems: PropTypes.number,
  minItems: PropTypes.number,
  buttonLabels: PropTypes.shape({
    add: PropTypes.node,
    remove: PropTypes.node
  }),
  AddContainerProps: PropTypes.object,
  AddButtonProps: PropTypes.object,
  FormGroupProps: PropTypes.object,
  WrapperProps: PropTypes.object,
  ArrayItemProps: PropTypes.object,
  RemoveButtonProps: PropTypes.object,
  defaultItem: PropTypes.any,
  isRequired: PropTypes.bool,
  fields: PropTypes.array
};

FieldArray.defaultProps = {
  noItemsMessage: 'No items',
  maxItems: Infinity,
  minItems: 0,
  AddContainerProps: {},
  AddButtonProps: {},
  FormGroupProps: {},
  WrapperProps: {},
  ArrayItemProps: {},
  RemoveButtonProps: {}
};

export default FieldArray;
