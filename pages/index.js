import { Container,Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import Section from "../components/section"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello Im a full stack developer based in America
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
                <Heading as="h3" variant="section-title">
                    work
                </Heading>
                <p>Paragraph</p>
            </Section>
        </Container>
    )
}
export default Page