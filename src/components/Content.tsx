import { Box, Button, Tab, Tabs, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import backButton from "../assets/backButton.svg"
import daiSvg from "../assets/coins/Dai.svg"
import usdcSvg from "../assets/coins/Usdc.svg"
import usdtSvg from "../assets/coins/Usdt.svg"
import ethSvg from "../assets/coins/Eth.svg"
import arrow from "../assets/arrow.svg"
import helpIcon from "../assets/helpIcon.svg"
import arrowDown from "../assets/arrowDown.svg"
import tickIcon from "../assets/tickIcon.svg"
const Content = () => {
    return (
        <Box display="flex" padding="64px" >
            <Box display="flex" flexDirection="column">
                <Button padding="9px 22px 9px 25px" display="flex" borderRadius="20px" background="#495076" border="1px solid #5F6791" width="84px">
                    <Image
                        src={backButton}
                        // width="6"
                        // height="10"
                        alt=""
                    />
                    <Text ml="0.5rem" fontSize="14px" fontWeight="400" letterSpacing="0.56px" lineHeight="normal" cursor="pointer">
                        Back
                    </Text>
                </Button>
                <Box mt="1.5rem" display="flex">
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
                    <Box ml="1rem">
                        <Text fontSize="36px" fontWeight="400" letterSpacing="0.56px" color="#D2D6EF" >
                            Ethereum vault
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="2rem">
                    <Box display="flex" flexDirection="column">
                        <Box>
                            <Text fontSize="18px" fontWeight="400" lineHeight="20px" letterSpacing="1px" color="#D2D6EF">
                                Amount
                            </Text>
                        </Box>
                        <Box display="flex" mt="0.5rem" gap="1rem">
                            <Box display="flex" gap="8" borderRadius="12px" border="1px solid #5F6791" padding="12px 14px 12px 14px" background=" linear-gradient(135deg, #495076 0%, #424869 100%)" >
                                <Image
                                    src={daiSvg}
                                    alt=""
                                />
                                <Image
                                    src={arrowDown}
                                    style={{ marginTop: "0.5rem" }}
                                    alt=""
                                />
                            </Box>
                            <Box width="222px" display="flex" gap="8" borderRadius="16px" border="1px solid #5F6791" padding="9px 12px 9px 14px" background=" linear-gradient(135deg, #495076 0%, #424869 100%)" >
                                <Text fontSize="24px" fontWeight="400" color="#D2D6EF">
                                    1000.0
                                </Text>
                            </Box>
                            <Box mt="0.8rem" ml="0.2rem">
                                <Image
                                    src={arrow}
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box mt="3rem" width="95%" borderBottom="1px solid #313650">
                        </Box>
                        <Box display="flex" mt="2rem" justifyContent="space-between" width="70%">
                            <Box>
                                <Box display="flex" gap="0.5rem">
                                    <Text fontSize="14px" fontWeight="700" letterSpacing="0.56px" color="#D2D6EF">
                                        Current APY
                                    </Text>
                                    <Image
                                        src={helpIcon}
                                        style={{ marginTop: "-0.2rem", cursor: 'pointer' }}
                                        alt=""
                                    />
                                </Box>
                                <Text mt="0.2rem" color="#23BE4F" fontSize="18px" fontWeight="400" lineHeight="22px" letterSpacing="0.9px">
                                    55.3%
                                </Text>
                            </Box>
                            <Box>
                                <Box display="flex" gap="0.5rem">
                                    <Text fontSize="14px" fontWeight="700" letterSpacing="0.56px" color="#D2D6EF">
                                        Value locked
                                    </Text>
                                </Box>
                                <Text mt="0.2rem" color="#D2D6EF" fontSize="18px" fontWeight="400" lineHeight="22px" letterSpacing="0.9px">
                                    $24.1M
                                </Text>
                            </Box>
                        </Box>
                        <Box mt="2rem">
                            <Box>
                                <Box display="flex" gap="0.5rem">
                                    <Text fontSize="14px" fontWeight="700" letterSpacing="0.56px" color="#D2D6EF">
                                        Volatility
                                    </Text>
                                </Box>
                                <Text mt="0.2rem" color="#D2D6EF" fontSize="18px" fontWeight="400" lineHeight="22px" letterSpacing="0.9px">
                                    Low
                                </Text>
                            </Box>
                        </Box>
                        <Box mt="2.5rem" >
                            <Box>
                                <Box display="flex" gap="0.5rem">
                                    <Text fontSize="18px" fontWeight="500" letterSpacing="1px" color="#D2D6EF" lineHeight="24px">
                                        Benefits
                                    </Text>
                                </Box>
                                <Box display="flex" gap="0.4rem" mt="0.4rem">
                                    <Image
                                    src={tickIcon}
                                    alt=""
                                    style={{marginTop:"0.5rem"}}
                                    />
                                    <Text width="350px" mt="0.2rem" color="#D2D6EF" fontSize="14px" fontWeight="400" lineHeight="20px" letterSpacing="0.6px">
                                        Use your low-volatility assets (stable coins) to get exposure to high-volatility assets
                                    </Text>
                                </Box>
                                <Box display="flex" gap="0.4rem" mt="0.3rem">
                                <Image
                                    src={tickIcon}
                                    style={{marginTop:"0.5rem"}}
                                    alt=""
                                    />
                                    <Text mt="0.2rem" width="310px"  color="#D2D6EF" fontSize="14px" fontWeight="400" lineHeight="20px" letterSpacing="0.6px">
                                        Yield earned on your stable assets is continuously swapped for a volatile asset and distributed back to you
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box width="500px" display="flex" flexDirection="column" padding="20px" borderRadius="12px" background="linear-gradient(119deg, #464C6E 0%, #272B45 100%);">
                        <Box display="flex" justifyContent="space-between" >
                            <Text fontSize="18px" fontWeight="400" lineHeight="20px" letterSpacing="1px" >
                                Projected returns
                            </Text>
                            <Box display="flex" >
                                <Tabs variant="unstyled" display="flex">
                                    <Tab
                                        py="1"
                                        px="3"
                                        color="#676D9A"
                                        fontSize="sm"
                                        border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
                                        borderLeftRadius="md"
                                        fontWeight="normal"
                                        _selected={{
                                            color: "white",
                                            bg: "#4D59E8",
                                            border: "none",
                                        }}
                                    // isDisabled={unstakeTransactionStarted == true}
                                    >
                                        Hourly
                                    </Tab>
                                    <Tab
                                        py="1"
                                        px="3"
                                        color="white"
                                        fontSize="sm"
                                        border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
                                        borderRightRadius="md"
                                        fontWeight="normal"

                                    >
                                        Yearly
                                    </Tab>
                                </Tabs>
                            </Box>

                        </Box>


                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Content