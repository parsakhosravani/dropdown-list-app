export interface DropdownProps {
  items: DropdownItem[];
}
export interface DropdownItemProps {
  id: number;
  label: string;
  icon: string;
  isSelected: any;
  onSelect: (itemId: number) => void;
}
export interface DropdownItem {
  id: number;
  label: string;
  icon: string;
}

export interface DropdownMenuItem {
  id: number;
  label: string;
  icon: string;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onSelect: (itemId: number) => void;
  selectedItem: DropdownMenuItem | null;
}
