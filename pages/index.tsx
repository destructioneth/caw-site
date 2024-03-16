import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, Text, Image, keyframes, Box, Link, Button, Icon } from '@chakra-ui/react';

import ogpic from "./../res/images/ogcompress.png";
import coingeckoIcon from "./../res/logos/coingecko.png";

import { useState, useEffect } from 'react';
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Home: NextPage = () => {
    const HEAD_TITLE = 'crow with knife';
    const HEAD_DESCRIPTION = `guys I did some research and found out that "some crows have learned more than 100 words and up to 50 complete sentences" and that's more than enough to become the biggest meme coin on cronos chain`;
    const HEAD_IMAGE = ogpic.src;
    const HEAD_ICON = ogpic.src;


    const discordlink = "https://discord.gg/2JVCtdt3Ya"


    const spin = keyframes`
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }`;

    const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
  `;

    const dropIn = keyframes`
    from { transform: translateY(-100vh);}
    to   { transform: translateY(0vh);}
  `;
    const rainbowText = keyframes`
  0% { color: red; }
  14% { color: orange; }
  28% { color: yellow; }
  42% { color: green; }
  57% { color: blue; }
  71% { color: indigo; }
  85% { color: violet; }
  100% { color: red; }
`;
    const spinIcon = keyframes`
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }`;
    const darkGlowKeyframes = keyframes`
  0% { filter: drop-shadow(0 0 4px #000000); }
  50% { filter: drop-shadow(0 0 8px #000000); }
  100% { filter: drop-shadow(0 0 4px #000000); }
`;

    const darkGlowAnimation = `${darkGlowKeyframes} 2s ease-in-out infinite`;
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);
    const FunnyButton = () => (
        <Button
            as="a"
            href="https://vvs.finance/swap?outputCurrency=0xcCcCcCcCdbEC186DC426F8B5628AF94737dF0E60"
            target="_blank"
            rel="noopener noreferrer"
            transition="all 0.5s"
            _hover={{
                transform: "scale(1.3)",
                animation: `${rainbowText} 2s linear infinite, ${darkGlowKeyframes} 1s ease-in-out infinite`,
            }}
        >
            💎 buy on VVS finance 💎
        </Button>
    );
    return (
        <Flex w="100%" minH="100vh" bg="black" alignItems="center" justifyContent="center" >
            <Head>
                <title>{HEAD_TITLE}</title>
                <meta name="description" content={HEAD_DESCRIPTION} />
                <link rel="icon" href={HEAD_ICON} />
                <meta name="theme-color" content="#FFFFFF" />

                <meta property="og:title" content={HEAD_TITLE} />
                <meta property="og:image" content={HEAD_IMAGE} />
                <meta property="og:description" content={HEAD_DESCRIPTION} />

                <meta name="twitter:site" content="@egg_nfts" />
                <meta name="twitter:title" content={HEAD_TITLE} />
                <meta name="twitter:description" content={HEAD_DESCRIPTION} />
                <meta name="twitter:image" content={HEAD_IMAGE} />
            </Head>
            {showMessage ? (
                <Box as="span" animation={`${fadeIn} 4s`}>
                    <Text color="white" fontSize={"3xl"} textAlign="center">
                        we have an important message to deliver
                    </Text>
                </Box>
            ) : (
                <Flex flexDir={"column"} w="100%" align={"center"} m="3%" gap="30px" animation={`${fadeIn} 6s`}>
                    <Flex flexDirection="column" alignItems="center" gap="30px" maxW="550px" borderRadius="md" p="4">
                        <Box as="span" animation={`${fadeIn} 3s`}>
                            <Text animation={`${rainbowText} 3s linear infinite`} color="white" fontSize={["4xl", "5xl"]} textAlign="center" mb={4}>
                                crow with knife
                            </Text>
                        </Box>


                        <Box as="span" animation={`${spin} 2s`}>
                            <Image animation={darkGlowAnimation} src={ogpic.src} />
                        </Box>

                        <Text fontStyle="italic" textAlign={"center"} fontSize={"2xl"}>{HEAD_DESCRIPTION}</Text>


                        <Flex align="center" gap="10px" justify="center" mb="10px">
                            <Link _hover={{ cursor: "pointer", transform: "scale(1.25)" }} href="https://www.coingecko.com/en/coins/crow-with-knife" target="_blank" rel="noreferrer">
                                <Image src={coingeckoIcon.src} w={"32px"} />
                            </Link>
                            <Link _hover={{ cursor: "pointer", transform: "scale(1.25)" }} href="https://discord.gg/8a8Xm4wwR9" target="_blank" rel="noreferrer">
                                <FaDiscord size={"32px"} />
                            </Link>
                            <Link _hover={{ cursor: "pointer", transform: "scale(1.25)" }} href="https://twitter.com/cronoscrocrow" target="_blank" rel="noreferrer">
                                <FaTwitter size={"32px"} />
                            </Link>
                            <Link _hover={{ cursor: "pointer", transform: "scale(1.25)" }} href="https://t.me/crocrownft" target="_blank" rel="noreferrer">
                                <FaTelegram size={"32px"} />
                            </Link>




                        </Flex>

                        <Text textAlign="center" animation={`${rainbowText} 3s linear infinite`} fontSize={["3xl", "5xl"]}>{"THE TICKER IS $CAW"}</Text>

                        <Flex>
                            <FunnyButton />
                        </Flex>


                    </Flex>
                    <Flex h="700px" animation={darkGlowAnimation} w="100%" maxW={"1600px"}>

                        <iframe
                            src="https://dexscreener.com/cronos/0xc7a139c804a3bbdfe90d32c100dffeca1a2f735c?embed=1&theme=dark"
                            width="100%"
                            height="100%"
                        />

                    </Flex>
                </Flex>

            )}
        </Flex>
    );
};

export default Home;
