import { Box, Button, Tab, Tabs, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import backButton from "../assets/backButton.svg"
import daiSvg from "../assets/coins/Dai.svg"
import usdcSvg from "../assets/coins/Usdc.svg"
import usdtSvg from "../assets/coins/Usdt.svg"
import ethSvg from "../assets/coins/Eth.svg"
import arrow from "../assets/arrow.svg"
import helpIcon from "../assets/helpIcon.svg"
import arrowDown from "../assets/arrowDown.svg"
import tickIcon from "../assets/tickIcon.svg"
import graphIcon from "../assets/graphsIcon.svg"
import axios from 'axios'
const Content = () => {
    return (
        <Box display="flex" padding="32px 256px" >
            <Box display="flex" flexDirection="column">
                <Button filter="drop-shadow(12px 12px 32px #2E334E)" padding="9px 22px 9px 25px" display="flex" borderRadius="12px" background="#495076" border="1px solid #5F6791" width="84px" boxShadow="8px 8px 22px 0px rgba(54, 59, 87, 0.24), -6px -6px 24px 0px rgba(85, 93, 131, 0.48), -1px -1px 4px 0px rgba(83, 92, 136, 0.12) inset, 1px 1px 1px 0px rgba(38, 49, 105, 0.05) inset">
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
                <Box mt="2.5rem" display="flex">
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
                <Box display="flex" justifyContent="space-between" mt="2rem" gap="2rem">
                    <Box display="flex" flexDirection="column" mt="2rem">
                        <Box>
                            <Text fontSize="18px" fontWeight="400" lineHeight="20px" letterSpacing="1px" color="#D2D6EF">
                                Amount
                            </Text>
                        </Box>
                        <Box display="flex" mt="0.5rem" gap="1rem">
                            <Box filter="drop-shadow(12px 12px 32px #2E334E)" display="flex" cursor="pointer" gap="8" borderRadius="12px" border="1px solid #424869" padding="12px 14px 12px 14px" background=" linear-gradient(135deg, #495076 0%, #424869 100%)" boxShadow="8px 8px 22px 0px rgba(54, 59, 87, 0.24), -6px -6px 24px 0px rgba(85, 93, 131, 0.48), -1px -1px 4px 0px rgba(83, 92, 136, 0.12) inset, 1px 1px 1px 0px rgba(38, 49, 105, 0.05) inset">
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
                            <Box filter="drop-shadow(12px 12px 32px #2E334E)" width="222px" display="flex" gap="8" borderRadius="16px" boxShadow="2px 2px 4px 0px rgba(38, 49, 105, 0.16) inset" border="1px solid #424869" padding="9px 12px 9px 14px" background=" linear-gradient(135deg, #495076 0%, #424869 100%)" >
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
                        <Box mt="3rem" width="90%" borderBottom="1px solid #5A6086">
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
                    <Box filter="drop-shadow(12px 12px 32px #2E334E);" boxShadow="2px 2px 2px 0px rgba(83, 92, 136, 0.11) inset;" width="500px" display="flex" flexDirection="column" padding="24px" borderRadius="12px" background="linear-gradient(119deg, #464C6E 0%, #272B45 100%);">
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
                                        Daily
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
                        <Box mt="1.5rem">
                            <Text display="flex" color="#D2D6EF" fontSize="36px" fontWeight="400" lineHeight="42px" letterSpacing="-0.5px">
                                <Image
                                src={ethSvg}
                                height={32}
                                width={32}
                                style={{marginTop:"0.3rem",marginRight:"0.4rem"}}
                                alt=""
                                />
                                + 0.216 ETH
                            </Text>
                            <Box display="flex">
                                <Text display="flex" color="#D2D6EF" fontSize="36px" fontWeight="400" lineHeight="42px" letterSpacing="-0.5px">
                                    per year
                                </Text>
                                <Text ml="1rem" mr="0.5rem" display="flex" color="rgba(210, 214, 239, 0.30)" fontSize="36px" fontWeight="400" lineHeight="42px" letterSpacing="-0.5px">
                                    est .
                                </Text>
                                <Image
                                src={helpIcon}
                                width={25}
                                height={25}
                                style={{marginTop:'0.7rem',cursor:'pointer'}}
                                alt=""
                                />
                            </Box>
                        </Box>
                        <Box mt="1rem" display='flex' justifyContent="space-between">
                            <Text color="rgba(210, 214, 239, 0.30)" fontSize="16px" fontWeight="400" lineHeight="18px" letterSpacing="0.6px">
                                ($512.11)
                            </Text>
                            <Box display="flex" gap="0.5rem" cursor="pointer">
                                <Image
                                src={graphIcon}
                                style={{marginTop:'0.35rem'}}
                                alt=""
                                />
                                <Text fontSize="12px" color="#D2D6EF" fontWeight="400" lineHeight="18px" letterSpacing="0.6px" textDecoration="underline">
                                    Past returns performance
                                </Text>
                            </Box>

                        </Box>
                        <Box borderBottom="1px solid #5A6086" mt="2rem">
                        </Box>
                        <Box display='flex' mt="1rem" justifyContent="space-between" mr="2rem">
                            <Box>
                                <Text color="#D2D6EF" fontSize="12px" fontWeight="500" lineHeight="18px" letterSpacing="0.3px">
                                    Deposit fee
                                </Text>
                                <Box mt="0.5rem" display="flex" gap="0.5rem">
                                    <Box>
                                        <Text color="#D2D6EF" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            0%
                                        </Text>
                                        <Box color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="400" lineHeight="18px" letterSpacing="0.5px">
                                            ETHALend
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Text color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            +
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text color="#D2D6EF" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            ~8.4 DAI
                                        </Text>
                                        <Box color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="400" lineHeight="18px" letterSpacing="0.5px">
                                            gas
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Text color="#D2D6EF" fontSize="12px" fontWeight="500" lineHeight="18px" letterSpacing="0.3px">
                                    Withdraw fee
                                </Text>
                                <Box mt="0.5rem" display="flex" gap="0.5rem">
                                    <Box>
                                        <Text color="#D2D6EF" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            1%
                                        </Text>
                                        <Box color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="400" lineHeight="18px" letterSpacing="0.5px">
                                            ETHALend
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Text color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            +
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text color="#D2D6EF" fontSize="14px" fontWeight="700" lineHeight="18px" letterSpacing="0.5px">
                                            ~8.4 DAI
                                        </Text>
                                        <Box color="rgba(210, 214, 239, 0.30)" fontSize="14px" fontWeight="400" lineHeight="18px" letterSpacing="0.5px">
                                            gas
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box display="flex" mt="1rem">
                            <Text mr="0.3rem" color="#23BE4F" fontSize="14px" fontWeight="500" lineHeight="18px" letterSpacing="1px">
                                You save ~$213.24 on gas fees
                            </Text>
                            <Image
                            src={helpIcon}
                            width={18}
                            height={18}
                            style={{cursor:'pointer'}}
                            alt=""
                            />
                        </Box>
                        <Box borderBottom="1px solid #5A6086" mt="2rem">
                        </Box>
                        <Box mt="2rem" display="flex">
                            <Text color="#D2D6EF" fontSize="18px" lineHeight="18px">
                                Gas token
                            </Text>
                            <Image
                            src={helpIcon}
                            width={18}
                            height={18}
                            style={{marginLeft:"0.4rem",cursor:'pointer'}}
                            alt=""
                            />
                        </Box>
                        <Button color="#D2D6EF" fontSize="20px" fontWeight="500" letterSpacing="0.5px" boxShadow="8px 8px 22px 0px rgba(54, 59, 87, 0.24), -6px -6px 24px 0px rgba(85, 93, 131, 0.48), -1px -1px 4px 0px rgba(83, 92, 136, 0.12) inset, 1px 1px 1px 0px rgba(38, 49, 105, 0.05) inset" cursor="pointer" mt="2rem" border="1px solid #5F6791" borderRadius="12px" padding="18px" background="linear-gradient(90deg, #7662C4 0%, #5458F6 100%), linear-gradient(135deg, #4D557D 0%, #424869 100%)">
                            Invest 1000 DAI
                        </Button>


                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Content