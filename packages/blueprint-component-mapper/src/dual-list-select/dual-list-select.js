import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
<<<<<<< HEAD
import DualListSelectCommon from '@data-driven-forms/common/dual-list-select';
import { Menu, MenuItem, ButtonGroup, Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { FormGroupInternal } from '../form-group/form-group';

const useStyles = createUseStyles({
  menu: {
    height: '80%',
    overflow: 'auto'
  },
  buttonGroup: {
    justifyContent: 'center'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    minHeight: 250
  },
  '@media (max-width: 768px)': {
    wrapper: {
      flexDirection: 'column'
    }
  }
});

const List = ({ value, optionClick, noOptionsTitle, filterValue, filterValueText, selectedValues, MenuProps, MenuItemProps }) => {
  const { menu } = useStyles();

  return (
    <Menu {...MenuProps} className={clsx('bp3-elevation-1', menu, MenuProps.className)}>
      {value.length < 1 && <MenuItem text={filterValue ? filterValueText : noOptionsTitle} disabled {...MenuItemProps} />}
      {value.length > 0 &&
        value.map(({ value, label, MenuItemProps: ItemMenuItemProps }) => (
          <MenuItem
            onClick={(e) => optionClick(e, value)}
            key={value}
            active={selectedValues.includes(value)}
            text={label}
            {...MenuItemProps}
            {...ItemMenuItemProps}
          />
        ))}
    </Menu>
  );
};
=======
import DualListSelectCommon from '@data-driven-forms/common/src/dual-list-select';
=======
import DualListSelectCommon from '@data-driven-forms/common/dual-list-select';
>>>>>>> f3da8d35 (fix(common): Use correct common package build.)
import { Menu, MenuItem, ButtonGroup, Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import clsx from 'clsx';

import { FormGroupInternal } from '../form-group/form-group';

import './dual-list-select.scss';

const List = ({ value, optionClick, noOptionsTitle, filterValue, filterValueText, selectedValues, MenuProps, MenuItemProps }) => (
  <Menu {...MenuProps} className={clsx('bp3-elevation-1', 'ddorg__blueprint_mapper--dls-menu', MenuProps.className)}>
    {value.length < 1 && <MenuItem text={filterValue ? filterValueText : noOptionsTitle} disabled {...MenuItemProps} />}
    {value.length > 0 &&
      value.map(({ value, label, MenuItemProps: ItemMenuItemProps }) => (
        <MenuItem
          onClick={(e) => optionClick(e, value)}
          key={value}
          active={selectedValues.includes(value)}
          text={label}
          {...MenuItemProps}
          {...ItemMenuItemProps}
        />
      ))}
  </Menu>
);
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)

List.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  optionClick: PropTypes.func.isRequired,
  noOptionsTitle: PropTypes.node,
  filterValue: PropTypes.string,
  filterValueText: PropTypes.node,
  selectedValues: PropTypes.array,
  checkboxVariant: PropTypes.bool,
  MenuProps: PropTypes.object,
  MenuItemProps: PropTypes.object
};

List.defaultProps = {
  value: [],
  MenuProps: {},
  MenuItemProps: {}
};

const Toolbar = ({ sortTitle, onFilter, onSort, sortDirection, value, placeholder, ControlGroupProps, InputGroupProps, ButtonProps }) => (
  <ControlGroup {...ControlGroupProps}>
    <InputGroup placeholder={placeholder} onChange={(e) => onFilter(e.target.value)} value={value} {...InputGroupProps} />
    <Button icon={sortDirection ? 'sort-desc' : 'sort-asc'} title={sortTitle} onClick={onSort} {...ButtonProps} />
  </ControlGroup>
);

Toolbar.propTypes = {
  sortTitle: PropTypes.node,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortDirection: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  ControlGroupProps: PropTypes.object,
  InputGroupProps: PropTypes.object,
  ButtonProps: PropTypes.object
};

Toolbar.defaultProps = {
  ControlGroupProps: {},
  InputGroupProps: {},
  ButtonProps: {}
};

const DualListInternal = ({
  allToRight,
  allToLeft,
  leftTitle,
  moveAllLeftTitle,
  moveAllRightTitle,
  moveRightTitle,
  moveLeftTitle,
  rightTitle,
  noValueTitle,
  noOptionsTitle,
  filterOptionsTitle,
  filterValueTitle,
  filterValueText,
  filterOptionsText,
  state,
  sortOptions,
  filterOptions,
  handleOptionsClick,
  leftValues,
  handleMoveRight,
  handleMoveLeft,
  handleClearLeftValues,
  handleClearRightValues,
  sortValues,
  filterValues,
  rightValues,
  handleValuesClick,
  WrapperProps,
  LeftWrapperProps,
  RightWrapperProps,
  ButtonGroupProps,
  ToRightButtonProps,
  AllToRightButtonProps,
  AllToLeftButtonProps,
  ToLeftButtonProps,
  LeftControlGroupProps,
  LeftInputGroupProps,
  LeftButtonProps,
  RightControlGroupProps,
  RightInputGroupProps,
  RightButtonProps,
  LeftMenuProps,
  LeftMenuItemProps,
  RightMenuProps,
  RightMenuItemProps
}) => {
<<<<<<< HEAD
  const { buttonGroup, wrapper } = useStyles();

  return (
    <div {...WrapperProps} className={clsx(wrapper, WrapperProps.className)}>
=======
  return (
    <div {...WrapperProps} className={clsx('ddorg__blueprint_mapper--dls-wrapper', WrapperProps.className)}>
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)
      <div {...LeftWrapperProps}>
        {leftTitle}
        <Toolbar
          sortDirection={state.sortLeftDesc}
          onSort={sortOptions}
          onFilter={filterOptions}
          value={state.filterOptions}
          placeholder={filterOptionsTitle}
          ControlGroupProps={LeftControlGroupProps}
          InputGroupProps={LeftInputGroupProps}
          ButtonProps={LeftButtonProps}
        />
        <List
          optionClick={handleOptionsClick}
          value={leftValues}
          noOptionsTitle={noOptionsTitle}
          filterValue={state.filterOptions}
          filterValueText={filterOptionsText}
          selectedValues={state.selectedLeftValues}
          MenuProps={LeftMenuProps}
          MenuItemProps={LeftMenuItemProps}
        />
      </div>
<<<<<<< HEAD
      <ButtonGroup vertical alignText="center" {...ButtonGroupProps} className={clsx(buttonGroup, ButtonGroupProps.className)}>
=======
      <ButtonGroup
        vertical
        alignText="center"
        {...ButtonGroupProps}
        className={clsx('ddorg__blueprint_mapper--dls-button-group', ButtonGroupProps.className)}
      >
>>>>>>> 1cafc7dd (feat(blueprint): Migrate mapper to new build process.)
        <Button
          disabled={state.selectedLeftValues.length === 0}
          onClick={handleMoveRight}
          title={moveRightTitle}
          icon="chevron-right"
          {...ToRightButtonProps}
        />
        {allToRight && (
          <Button
            disabled={leftValues.length === 0}
            onClick={handleClearLeftValues}
            title={moveAllRightTitle}
            icon="double-chevron-right"
            {...AllToRightButtonProps}
          />
        )}
        {allToLeft && (
          <Button
            disabled={rightValues.length === 0}
            onClick={handleClearRightValues}
            title={moveAllLeftTitle}
            icon="double-chevron-left"
            {...AllToLeftButtonProps}
          />
        )}
        <Button
          disabled={state.selectedRightValues.length === 0}
          onClick={handleMoveLeft}
          title={moveLeftTitle}
          icon="chevron-left"
          {...ToLeftButtonProps}
        />
      </ButtonGroup>
      <div {...RightWrapperProps}>
        {rightTitle}
        <Toolbar
          sortDirection={state.sortRightDesc}
          onSort={sortValues}
          onFilter={filterValues}
          value={state.filterValue}
          placeholder={filterValueTitle}
          ControlGroupProps={RightControlGroupProps}
          InputGroupProps={RightInputGroupProps}
          ButtonProps={RightButtonProps}
        />
        <List
          optionClick={handleValuesClick}
          value={rightValues}
          noOptionsTitle={noValueTitle}
          filterValue={state.filterValue}
          filterValueText={filterValueText}
          selectedValues={state.selectedRightValues}
          MenuProps={RightMenuProps}
          MenuItemProps={RightMenuItemProps}
        />
      </div>
    </div>
  );
};

DualListInternal.propTypes = {
  leftTitle: PropTypes.node,
  rightTitle: PropTypes.node,
  moveLeftTitle: PropTypes.node,
  moveRightTitle: PropTypes.node,
  allToLeft: PropTypes.bool,
  allToRight: PropTypes.bool,
  validateOnMount: PropTypes.bool,
  moveAllLeftTitle: PropTypes.node,
  moveAllRightTitle: PropTypes.node,
  noValueTitle: PropTypes.node,
  noOptionsTitle: PropTypes.node,
  filterOptionsTitle: PropTypes.node,
  filterValueTitle: PropTypes.node,
  filterValueText: PropTypes.node,
  filterOptionsText: PropTypes.node,
  state: PropTypes.object,
  sortOptions: PropTypes.func,
  filterOptions: PropTypes.func,
  handleOptionsClick: PropTypes.func,
  leftValues: PropTypes.array,
  handleMoveRight: PropTypes.func,
  handleMoveLeft: PropTypes.func,
  handleClearLeftValues: PropTypes.func,
  handleClearRightValues: PropTypes.func,
  sortValues: PropTypes.func,
  filterValues: PropTypes.func,
  rightValues: PropTypes.array,
  handleValuesClick: PropTypes.func,
  WrapperProps: PropTypes.object,
  LeftWrapperProps: PropTypes.object,
  RightWrapperProps: PropTypes.object,
  ButtonGroupProps: PropTypes.object,
  ToRightButtonProps: PropTypes.object,
  AllToRightButtonProps: PropTypes.object,
  AllToLeftButtonProps: PropTypes.object,
  ToLeftButtonProps: PropTypes.object,
  LeftControlGroupProps: PropTypes.object,
  LeftInputGroupProps: PropTypes.object,
  LeftButtonProps: PropTypes.object,
  RightControlGroupProps: PropTypes.object,
  RightInputGroupProps: PropTypes.object,
  RightButtonProps: PropTypes.object,
  LeftMenuProps: PropTypes.object,
  LeftMenuItemProps: PropTypes.object,
  RightMenuProps: PropTypes.object,
  RightMenuItemProps: PropTypes.object
};

DualListInternal.defaultProps = {
  leftTitle: 'Options',
  rightTitle: 'Selected',
  moveLeftTitle: 'Move selected to left',
  moveRightTitle: 'Move selected to right',
  moveAllRightTitle: 'Move all to right',
  moveAllLeftTitle: 'Move all to left',
  noOptionsTitle: 'No available options',
  noValueTitle: 'No selected',
  filterOptionsTitle: 'Filter options',
  filterValueTitle: 'Filter selected value',
  filterOptionsText: 'Remove your filter to see all options',
  filterValueText: 'Remove your filter to see all selected',
  options: [],
  allToLeft: true,
  allToRight: true,
  WrapperProps: {},
  LeftWrapperProps: {},
  RightWrapperProps: {},
  ButtonGroupProps: {},
  ToRightButtonProps: {},
  AllToRightButtonProps: {},
  AllToLeftButtonProps: {},
  ToLeftButtonProps: {},
  LeftControlGroupProps: {},
  LeftInputGroupProps: {},
  LeftButtonProps: {},
  RightControlGroupProps: {},
  RightInputGroupProps: {},
  RightButtonProps: {},
  LeftMenuProps: {},
  LeftMenuItemProps: {},
  RightMenuProps: {},
  RightMenuItemProps: {}
};

const DualListWrapper = (props) => <FormGroupInternal {...props} Component={DualListInternal} />;
const DualListSelect = (props) => <DualListSelectCommon {...props} DualListSelect={DualListWrapper} />;

export default DualListSelect;
