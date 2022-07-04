
import {Box, Container, Badge,Link,List,ListItem } from "@chakra-ui/react";
import {ExtenalLinkIcon} from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import loading from "../../public/images/loading.jpg"
import { WorkGridItem } from "../../components/grid-item";
const Work = () => {
    return(
        <Layout title="NewWeatherApp">
            <Container>
                <Title>
                    Improved Weather App <Badge>july 2022</Badge>
                 </Title>
                 <P>
                  improved version of the weather app using the same 
                  api but with a gui. created in Python. This project is still in the works
                  
                </P>

                <Box>
               <WorkGridItem thumbnail={loading} />
               
             </Box>
                 

                
                <List ml={4} my={4}></List>
              
             
            </Container>
        </Layout>
        
    )
}
export default Work