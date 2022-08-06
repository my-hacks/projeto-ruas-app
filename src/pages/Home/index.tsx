import React, { useEffect } from 'react';
import { Heading, HStack, Image, useTheme, VStack } from 'native-base'
import { Text } from 'react-native';

const Home: React.FC = () => {

    const proposes = [
        {
            id: 1,
            name: 'Extra',
            imgItem: require('../../assets/img/extra.png'),
            address: 'Rua dois, nº 0',
        },
        {
            id: 2,
            name: 'Extra',
            imgItem: require('../../assets/img/extra.png'),
            address: 'Rua dois, nº 0',
        },
        {
            id: 3,
            name: 'Extra',
            imgItem: require('../../assets/img/extra.png'),
            address: 'Rua dois, nº 0',
        },

    ]

    const { colors } = useTheme();
    return (
        <VStack
            flex={1}
            pb={1}
            bg="gray.50"
            p={10}
        >
            <Heading
                color={colors.black}
                mt={5}
                mb={5}
            >
                Ultimas Vagas Adicionadas
            </Heading>

            {
                proposes.map(propose => {
                    return (
                        <VStack
                            mb={5}
                            bg="white"
                        >
                            <HStack
                                borderWidth={0.5}
                                borderColor={colors.black}
                                p={2}
                                alignItems="center"
                                borderRadius={10}
                            >
                                <Image
                                    source={propose.imgItem}
                                    alt="extra"
                                    height={50}
                                    width={50}
                                />
                                <VStack
                                    ml={5}
                                >
                                    <Text>
                                        {propose.name}
                                    </Text>
                                    <Text>
                                        {propose.address}
                                    </Text>
                                </VStack>

                            </HStack>
                        </VStack>
                    )
                })
            }
        </VStack>
    )
}

export default Home;