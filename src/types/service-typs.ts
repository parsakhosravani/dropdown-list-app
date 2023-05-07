export interface DropdownProps {
  items: DropdownItem[];
}

export interface DropdownItem {
  id: number;
  label: string;
  icon: string;
}

interface DropdownMenuItem {
  id: number;
  label: string;
  icon: string;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onSelect: (itemId: number) => void;
}
