import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import logoSvg from "../assets/logo.svg"
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Strategy from "@/components/Strategy";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ETHALEND</title>
        <meta name="description" content="Ethalend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding="8px 32px" background="linear-gradient(119deg, #464C6E 0%, #272B45 100%)" >
        <Navbar/>
        <Content/>
        <Strategy/>
      </Box>
    </>
  );
}
