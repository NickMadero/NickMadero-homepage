
import { Container, Badge,Link,List,ListItem } from "@chakra-ui/react";
import {ExtenalLinkIcon} from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="snake">
            <Container>
                <Title>
                    snake <Badge>2022</Badge>
                 </Title>
                 <P>
                    The Snake Game project was created in Python there are many snake games out there.
                    This was just something fun to create in Python. 
                    
                </P>
                <Meta>Github Link:</Meta>
                <Link href="https://github.com/NickMadero/snake_game.git" target="_blank">SnakeGame</Link>
                <List ml={4} my={4}></List>

            </Container>
        </Layout>
    )
}
export default Work