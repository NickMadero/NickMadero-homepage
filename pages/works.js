import {Container, Box,Heading, Divider, SimpleGrid, Link, Img} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSnake from '../public/images/snake.png'
import Layout from '../components/layouts/article'
import thumbWeather from '../public/images/WeatherApp.jpg'
const Works = () =>{
    return (
      <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Work
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="snake" title="SnakeGame" thumbnail={thumbSnake}>
            A simple Snake Game with a score counter and high score counter.
           
          </WorkGridItem>
          
        </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section>
        <WorkGridItem id="WeatherApp" title="WeatherApp" thumbnail={thumbWeather}>
          The Weather Application project
        </WorkGridItem>
      </Section>
        </SimpleGrid >

        </Container>
        </Layout>
    )
}
export default Works
export { getServerSideProps } from '../components/chakra'