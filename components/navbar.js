import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import {HamburgerIcon, HumburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'


const LinkItem = ({ href, path, children}) => {
    const active = path ==href
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link 
            p={2}
            bg={active ? 'glassTeal': undefined}
            color={active ? ' #202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props 

    return (
        <Box
        position="fixed"
        as="nav"
        w = "100%"
        bg={useColorModeValue('#fffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px)'}}
        zIndex={1}
        {...props}
        >
        <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
             <Logo />   
            </Heading>
        </Flex>
        <Stack
        direction={{base: 'column', md: 'row'}}
        display={{base: 'none', md: 'flex'}}
        width= {{base: 'full' , md: 'auto'}}
        alignItems="center"
        flexGrow={1}
        mt={{base: 4, nmd: 0}}
        >
         <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Resume/updates
          </LinkItem>
          <Link href='https://github.com/NickMadero' target='_blank'>
            GitHub
          </Link>
          <Link href='https://www.linkedin.com/in/nicholas-madero-43546723a/'target="_blank">
            Linkedin
          </Link>
        </Stack>

        <Box flex={1} align="right">|
        <ThemeToggleButton />
        <Box ml={2} display={{base: 'inline-block', md:'none'}} />
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
            <MenuList>
                <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                    <MenuItem as={Link}>Resume/Update</MenuItem>
                </NextLink>

                   <MenuItem as={Link} href="https://www.linkedin.com/in/nicholas-madero-43546723a/" target="_blank"> My linkedin</MenuItem>

                <MenuItem as={Link} href="https://www.craftz.dog/" target="_blank">
                    View Credit</MenuItem>
            
            </MenuList>
               </Menu>   
        </Box>
        
        </Container>
        </Box>
    )
}
export default Navbar