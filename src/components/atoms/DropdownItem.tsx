import React from 'react';
import {useStyles} from '../../styles/styles';
import {DropdownItemProps} from '../../types/service-types';

const DropdownItem: React.FC<DropdownItemProps> = ({
  id,
  label,
  icon,
  onSelect,
  isSelected,
}) => {
  const classes = useStyles();
  return (
    <li
      className={`${classes.item} ${isSelected ? classes.selected : ''}`}
      onClick={() => onSelect(id)}>
      {label}
      {icon}
    </li>
  );
};

export default DropdownItem;
