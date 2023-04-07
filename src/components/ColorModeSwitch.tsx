import { HStack, Text, useColorMode, Switch } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme='teal'
      ></Switch>
      <Text>Toggle Switch</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
