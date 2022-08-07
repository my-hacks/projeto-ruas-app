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
          uri: "https://pbs.twimg.com/profile_images/1547650165145686016/1IK4ilVI_400x400.jpg"
        }} />
        <Text
          bold
          ml={8}
          color={colors.white}
          fontSize={18}
        >
          Bem Vindo Rosangela
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