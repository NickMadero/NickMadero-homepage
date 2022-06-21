
import {Box, Container, Badge,Link,List,ListItem } from "@chakra-ui/react";
import {ExtenalLinkIcon} from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="snake">
            <Container>
                <Title>
                    snake <Badge>May 2022</Badge>
                 </Title>
                 <P>
                    The Snake Game project was created in Python there are many snake games out there.
                    This was just something fun to create in Python. 
                    below is a demo video of the project.
                    
                </P>

                <Box>
                <iframe src="https://player.vimeo.com/video/721124409?h=b44c034e0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                width="700" height="700" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="snake.mp4"></iframe>
      </Box>
                 

                <Meta>Github Link:</Meta>
                <Link href="https://github.com/NickMadero/snake_game.git" target="_blank">SnakeGame</Link>
                <List ml={4} my={4}></List>
              
             
            </Container>
        </Layout>
        
    )
}
export default Work