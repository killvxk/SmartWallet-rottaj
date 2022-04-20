import { useContext } from 'react';
import {
    Box,
    Flex,
    HStack,
    Text,
    Heading,
    useDisclosure
} from "@chakra-ui/react"
import AccountSettingsModal from './Modals/AccountSettingsModal';
import { FiCopy, FiMoreVertical } from 'react-icons/fi';
import { WalletContext } from "../contexts" 

const AccountPanel = () => {

    const { accounts, currentAccount, etherBalance, networkStats }: any = useContext(WalletContext)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            mx="5px"
            mt="50px"
            mb="10px"
            borderBottom="2px solid black"
        >
            <AccountSettingsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <HStack
                spacing="100px"
            >
                <Box>
                    Connected
                </Box>
                <Box>
                    {console.log("TESTING CURRENT ACC", currentAccount, typeof(currentAccount))}
                    {currentAccount !== undefined ?
                        <Box>
                            <Text>{currentAccount}</Text>
                            <Flex>
                                <Text>{accounts[currentAccount].address.substr(0, 8)}...</Text>
                                <Box margin='0' pt="5px">
                                    <FiCopy/>
                                </Box>
                            </Flex>
                        </Box>
                    :
                        <Text>Loading</Text>
                    } 
                </Box>
                <Box>
                    <FiMoreVertical fontSize="30px" onClick={onOpen}/>
                </Box>
            </HStack>
            <Box
                my="2px"
                mx="2px"
                width="100%"
                borderRadius="10px"
                border="1px solid black"
                textAlign="left"
            >
                <Text py="5px" px="10px" margin="0" fontSize="12px">Net Worth</Text>
                <Box padding="0" margin="0" px="5px" pb="10px">
                    <Heading margin="0" fontSize="35px">${parseFloat(String(parseFloat(etherBalance) * parseFloat(networkStats.ethusd))).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Heading> 
                    <Text margin="0" fontSize="10px" color="green" px="5px">+0.53% ($580.90)</Text>
                </Box>

            </Box>
            <HStack margin="0" spacing="100px" pb="5px">
                <Box>
                    <Text fontSize="10px">Tokens Worth</Text>
                    <Box margin="0">
                        {/*<Text margin="0" fontSize="13px">25,532.21</Text>*/}
                        <Text margin="0" fontSize="13px">{etherBalance}</Text>
                        <Text pl="2px" pt="1px" margin="0" fontSize="10px" color="red">-0.31% ($321.12)</Text>
                    </Box>
                </Box>
                <Box>
                    <Text fontSize="10px">DeFi Worth</Text>
                        <Text margin="0" fontSize="13px">-</Text>
                </Box>
                <Box>
                    <Text fontSize="10px">NFT's Worth</Text>
                        <Text margin="0" fontSize="13px">84,133.84</Text>
                        <Text margin="0" fontSize="10px" color="green" px="5px">+2.80% ($2,580.90)</Text>
                </Box>
            </HStack>
        </Box>
    )
}

export default AccountPanel;