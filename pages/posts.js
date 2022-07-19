import {Box, Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Resume from '../public/images/resume.jpg'
import changes from '../public/images/changes.jpg'

const Posts = () => (

    <Layout title="Resume">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
         Resume/Post
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 1]} gap={6}>
            <GridItem
              title="my Resume (click on Image for a better viewing experience)."
              thumbnail={Resume}
              href='https://drive.google.com/file/d/1mibCQ8cdyvObQfH7oWZ5S6B9B4BMuDS4/view?usp=sharing'
            />
            <GridItem 
            title="website updates"
            thumbnail={changes}

            />           
          </SimpleGrid>
        </Section>
       
       
      </Container>
    </Layout>
  )
  
  export default Posts
  export { getServerSideProps } from '../components/chakra'