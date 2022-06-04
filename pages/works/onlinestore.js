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
        <Layout title="Online Store">
            <Container>
                <Title>
                    Online Store <Badge>2022</Badge>
                </Title>
                <P>
                    An Online Store made 100% from scratch. 
                    The languages used are C# and SQL. I used ASP.NET with .NET version 6 
                    which now is fully supported by the M1 Macbooks. It is a pretty simple
                    concept. You have two primary pages: client and producer. You can add any
                    producer, afterwards you can add products to that one producer. You can add as many
                    as you'd like. Afterwards, we have the client page, where the client can easily choose
                    the product he needs.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>It works in any browser.</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ASP.NET, .NET 6, SQL, C#</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/OnlineStore1.png" alt="OnlineStore" />
                <WorkImage src="/images/works/OnlineStore2.png" alt="OnlineStore" />
                <WorkImage src="/images/works/OnlineStore3.png" alt="OnlineStore" />
            </Container>
        </Layout>
    )
}

export default Work