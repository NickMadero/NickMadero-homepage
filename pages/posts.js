import {Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Resume from '../public/images/resume.jpg'


const Posts = () => (

    <Layout title="Resume">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
         Resume
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="my Resume"
              thumbnail={Resume}
              href='https://drive.google.com/file/d/1kziApIyekY8vt9Ka0NQz5Y-ddiemDHgE/view?usp=sharing'
            />
            
           
          </SimpleGrid>
        </Section>
  
       
      </Container>
    </Layout>
  )
  
  export default Posts
  export { getServerSideProps } from '../components/chakra'