import { useNavigation } from "@react-navigation/native";
import { Avatar, HStack, IconButton, Text, useTheme } from "native-base";
import { SignOut } from "phosphor-react-native";

const Header = () => {

  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.500"
      pt={12}
      pb={5}
      px={6}
    >
      <HStack
        alignItems={'center'}
      >
        <Avatar bg="green.500" source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }} />
        <Text
          bold
          ml={8}
          color={colors.white}
          fontSize={18}
        >
          Bem Vindo Claudia
        </Text>
      </HStack>
      <IconButton
        icon={
          <SignOut
            size={26}
            color={colors.gray[300]}
          />
        }
        onPress={() => {
          navigation.navigate('Welcome')
        }}
      />
    </HStack>
  )
}

export default Header;