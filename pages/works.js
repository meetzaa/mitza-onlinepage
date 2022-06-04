import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"

import thumbOnlineStore from '../public/images/works/OnlineStore.png'
import thumbSensorReader from '../public/images/works/SensorReader.png'

const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="onlinestore" title="Online Store" thumbnail={thumbOnlineStore}>
                        An Online Store made with the help of ASP.NET.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="sensorreader" title="Sensor Reader" thumbnail={thumbSensorReader}>
                        A sensor reader made fully in C++!
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works