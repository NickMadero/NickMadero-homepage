import { Container,Box, Heading, Image,Button, useColorModeValue, chakra } from "@chakra-ui/react"
import NextLink from "next/link"
import Head from "next/head"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
const Page = () => {
    return (
        <Layout>
                    <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello I am a Computer Science student learning to code
            </Box>
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as = "h2" variant = "page-title">
                Nick Madero
            </Heading>
            <p> computer science student ( software developer in the making )</p>
            </Box>
            <Box flexShrink={0} mt={{base : 4, md: 0}} ml= {{md: 6}} align="center" >
                <Image borderColor= "whiteAlpha.800" borderWidth={2} borderStyle="soild" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/nick.jpg"alt= "profile picture" />
            </Box>
            </Box>
            <Section delay={.1}>
                <Heading as="h2"  variant="section-title">
                    About me
                </Heading>
                <Paragraph> <br />
                computer science undergraduate student learning about frontend/backend of web development. 
                I'm currently working on this website as I hope to update it with a new project or updates about projects.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">My projects</Button>
                </NextLink>
            </Box>
            </Section>
        </Container>
        </Layout>

    )
}
export default Page