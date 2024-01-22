import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import daiSvg from "../assets/coins/Dai.svg"
import usdcSvg from "../assets/coins/Usdc.svg"
import usdtSvg from "../assets/coins/Usdt.svg"
import ethSvg from "../assets/coins/Eth.svg"
import arrow from "../assets/arrow.svg"
import helpIcon from "../assets/helpIcon.svg"
import arrowDown from "../assets/arrowDown.svg"
import tickIcon from "../assets/tickIcon.svg"
import Image from "next/image";
const Strategy = () => {
  return (
    <Box padding="64px" >
        <Box background="#3F4669" padding="48px" borderRadius="12px" width="70%">
            <Text fontSize="24px" fontWeight="500" lineHeight="24px" letterSpacing="1px" color="#D2D6EF">
                Strategy
            </Text>
            <Text mt="2rem" fontSize="18px" width="650px" fontWeight="400" lineHeight="28px" letterSpacing="2px" color="#D2D6EF">
                Investing in this vault will lock up your stable asset <br/> and use the yield to invest into (ETH).
            </Text>
            <Box mt="2rem" display="flex">
                    <Box>
                        <Box display="flex" gap="4">
                            <Image
                                src={daiSvg}
                                alt=""
                            />
                            <Image
                                src={usdcSvg}
                                alt=""
                            />
                        </Box>
                        <Box mt="1" ml="12">
                            <Image
                                src={usdtSvg}
                                alt=""
                            />
                        </Box>
                    </Box>
                    <Box mt="1rem" ml="5">
                        <Image
                            src={arrow}
                            alt=""
                        />
                    </Box>
                    <Box ml="5">
                        <Image
                            src={ethSvg}
                            alt=""
                        />
                    </Box>
                    <Box ml="2rem" >
                        <Box display="flex" gap="1rem">
                            <Text fontSize="14px" fontWeight="700" letterSpacing="1px" color="#D2D6EF" mt="0.1rem">
                                Supply:
                            </Text>
                            <Text fontSize="14px" fontWeight="400" letterSpacing="1px" color="#D2D6EF" mt="0.1rem"> Any stablecoin (USDC, USDT, DAI)</Text>
                        </Box>
                        <Box display="flex" gap="1rem" mt="1rem">
                            <Text fontSize="14px" fontWeight="700" letterSpacing="1px" color="#D2D6EF" mt="0.1rem">
                                Earn:
                            </Text>
                            <Text fontSize="14px" fontWeight="400" letterSpacing="1px" color="#D2D6EF" mt="0.1rem" ml="0.9rem"> ETH </Text>
                        </Box>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default Strategy