
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
                    a Snake game
                    <img src="resume.jpg" />
                 </P>
                 <List ml={4} my={4}></List>

            </Container>
        </Layout>
    )
}
export default Work