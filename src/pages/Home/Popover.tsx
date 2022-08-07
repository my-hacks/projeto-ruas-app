import { Box, Center, HStack, Icon, IconButton, Stagger, useDisclose } from 'native-base';
import React from 'react';
import { Plus, UserCirclePlus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native';

const Popover = () => {

  const navigation = useNavigation()
  const {
    isOpen,
    onToggle
  } = useDisclose();
  return <Center>
    <Box alignItems="center" minH="220">
      <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: 34
      }} animate={{
        translateY: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.8,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>
        <IconButton
          onPress={() => navigation.navigate('RegisterUser')}
          mt={40}
          variant="solid"
          bg="pink.400"

          borderRadius="full"
          icon={<Icon as={UserCirclePlus}
            size="10"
            name="people"
            color="warmGray.50"
          />} />
      </Stagger>
    </Box>
    <HStack alignItems="center">
      <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={Plus} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
        color: "warmGray.50"
      }} />} />
    </HStack>
  </Center>;
};

export default Popover;