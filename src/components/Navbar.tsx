import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logoSvg from "../assets/logo.svg"
import logoTextSvg from "../assets/textLogo.svg"
import menuBackBar from "../assets/navbarMenu.svg"
const Navbar = () => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between">
        <Box display="flex" gap="0.7rem" mt="2.2rem">
            <Image
            src={logoSvg}
            alt=""
            />
            <Image
            src={logoTextSvg}
            style={{marginTop:"0.4rem"}}
            alt=""
            />
        </Box>
        <Box cursor="pointer">
        <Image
            src={menuBackBar}
            alt=""
            />
        </Box>
    </Box>
  )
}

export default Navbar