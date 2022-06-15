
import { Container, Badge,Link,List,ListItem } from "@chakra-ui/react";
import {ExtenalLinkIcon} from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Fonts from "../../components/fonts";

const Work = () => {
    return(
        <Layout title="WeatherApp">
            <Container>
                <Title>
                    WeatherApp <Badge>2022</Badge>
                 </Title>
                 <P>
                  This project was a demo created to display the weather of an area using a Public Api.
                  The language it is written in is Python.
                    
                </P>
                <Meta>Github Link:</Meta>
                <Link href="https://github.com/NickMadero/weather_app.git" target="_blank">WeatherApp</Link>
                <List ml={4} my={4}></List>

            </Container>
        </Layout>
    )
}
export default Work