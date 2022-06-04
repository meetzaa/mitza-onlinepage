import {
    Container,
    Badge,
    Link,
    List,
    ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Sensor Reader">
            <Container>
                <Title>
                    Sensor Reader <Badge>2022</Badge>
                </Title>
                <P>
                    This is a simple Sensor Reader made from scratch using only C++.
                    For now since I don't have an Arduino with whom i can connect sensors,
                    are just are numbers which "control" the sensors. It's still pretty early
                    but it's something. All the data it's sent for now in .txt files outside the
                    project.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Terminal</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Objective-C++</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/SensorReader1.png" alt="SensorReader" />
                <WorkImage src="/images/works/SensorReader2.png" alt="SensorReader" />
            </Container>
        </Layout>
    )
}

export default Work