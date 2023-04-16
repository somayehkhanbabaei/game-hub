import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Selected: Order by revent
      </MenuButton>
      <MenuList>
        <MenuItem>order </MenuItem>
        <MenuItem>order 1 </MenuItem>
        <MenuItem>order2 </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
