
import {Box, Container, Badge,Link,List,ListItem } from "@chakra-ui/react";
import {ExtenalLinkIcon} from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import { WorkGridItem } from "../../components/grid-item";
import thumbtest from "../../public/images/test.jpg"

const Work = () => {
    return(
        <Layout title="Discord Bot ">
            <Container>
                <Title>
                    Discord Bot <Badge> June 2022</Badge>
                 </Title>
                 <P>
                    This is a meant to server a Basic template for a discord bot.
                    created using node.js in Visual Studio Code.
                    
                </P>

                <Box>
                <WorkGridItem thumbnail={thumbtest} />
      </Box>
                 

                <Meta>Github Link:</Meta>
                <Link href="https://github.com/NickMadero/testbot.git" target="_blank"> Discord bot (no bot download just open source)</Link>
                <List ml={4} my={4}></List>
              
             
            </Container>
        </Layout>
        
    )
}
export default Work