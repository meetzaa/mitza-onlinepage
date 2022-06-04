import {
    Container,
    Heading,
    SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { PostsGridItem } from '../components/grid-item'

import thumbCodeSetup from '../public/images/posts/CodeSetup.png'
import thumbGamingSetup from '../public/images/posts/GamingSetup.jpeg'
import thumbGamingSetupp from '../public/images/posts/GamingSetupp.jpeg'
const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                My Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <Section>
                        <PostsGridItem id="codesetup" title="Coding setup" thumbnail={thumbCodeSetup}>
                            My coding setup!
                        </PostsGridItem>
                    </Section>
                    <Section>
                        <PostsGridItem id="computerspecs" title="Computer specs" thumbnail={thumbGamingSetup}>
                            My computer specs!
                        </PostsGridItem>
                    </Section>
                    <Section>
                        <PostsGridItem id="gamingsetup" title="Gaming setup" thumbnail={thumbGamingSetupp}>
                            My gaming setup!
                        </PostsGridItem>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts