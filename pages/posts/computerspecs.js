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
        <Layout title="Computer specs">
            <Container>
                <Title>
                    Computer Specs
                </Title>
                <P>
                    I have been gaming since I was a little kid, I think 2005 is when I
                    first started the computer by myself and played Age of Empires. It was and still is
                    a beautiful thing. This are my specs, if u need them.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>CPU</Meta>
                        <span>Intel Core i5-8300H</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GPU</Meta>
                        <span>NVIDIA GeForce GTX 1050 4GB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>RAM</Meta>
                        <span>16 GB 2666Mhz DDR4</span>
                    </ListItem>
                    <ListItem>
                        <Meta>HDD</Meta>
                        <span>Samsung Spinpoint 1TB 5400 RPM 2.5"</span>
                    </ListItem>
                    <ListItem>
                        <Meta>SSD</Meta>
                        <span>Kingston NV1 500GB PCI Express 3.0 x4 M.2 2280</span>
                    </ListItem>
                    <ListItem>
                        <Meta>OS</Meta>
                        <span>Windows 11 Pro 64-bit</span>
                    </ListItem>
                </List>
                <P>
                    I also have an Macbook Air 2020 with the M1 Chip. 
                    It is the base model but I'll put the specs anyway.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>CPU</Meta>
                        <span>Apple M1 Chip</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Storage</Meta>
                        <span>200 GB MacOS / 40 GB Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>OS</Meta>
                        <span>MacOS Mojave / Fedora 35</span>
                    </ListItem>
                </List>

                

            </Container>
        </Layout>
    )
}

export default Posts