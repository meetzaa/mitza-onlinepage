import {
    Container,
    Badge,
    Link,
    List,
    ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PostImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Posts = () => {
    return (
        <Layout title="Coding setup">
            <Container>
                <Title>
                    Coding setup
                </Title>
                <P>
                    I have been coding for a little over an year now, and I'm trying
                    to learn as much as I can so I can get a good job at the end of University.
                    Here I will write all my IDE's and all the stuff I use for coding. I mostly use
                    other IDEs for debugging my code.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Main IDE</Meta>
                        <span>Visual Studio Code</span>
                    </ListItem>
                    <ListItem>
                        <Meta>IDE for ASP.NET</Meta>
                        <span>Visual Studio 2022</span>
                    </ListItem>
                    <ListItem>
                        <Meta>IDE for debugging</Meta>
                        <span>CLion</span>
                    </ListItem>
                    <ListItem>
                        <Meta>IDE for debugging</Meta>
                        <span>XCode</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Compilers for C++</Meta>
                        <span>Clang, g++, gcc</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Terminal</Meta>
                        <span>iTerm2 with Fish and Tide theme</span>
                    </ListItem>
                </List>

                <PostImage src="/images/posts/CodingSetup1.png" alt="CodingSetup" />

            </Container>
        </Layout>
    )
}

export default Posts