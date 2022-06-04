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
        <Layout title="Gaming Setup">
            <Container>
                <Title>
                    Gaming Setup
                </Title>
                <P>
                    Here are all the peripherals I use in my day to day life.
                    Some of them are really good for me and some still need a
                    big upgrade. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Displays</Meta>
                        <span>DELL S2522HG 24.5" 240Hz, Dell S2240L 21.5" 60Hz</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Mice</Meta>
                        <span>Logitech G305</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Keyboards and controllers</Meta>
                        <span>Redragon Broadsword / Blue switches, Dualsense, Logitech G29</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Audio</Meta>
                        <span>Logitech G435 Lightspeed, Airpods Pro</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Surface</Meta>
                        <span>MYRIA SquadMate MG7412 RGB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Chair</Meta>
                        <span>Genesis Nitro 560 Camo</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Posts