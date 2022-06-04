import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, SimpleGrid, List, Icon, ListItem, useColorModeValue } from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/bio'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord} from 'react-icons/io5'

const Page = () => {
    return ( 
       <Layout>
       <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I&apos;m a student from Romania!
        </Box>

        <Box display={{ md: 'flex' } }>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Popescu Vlad-Mihai
                </Heading>
                <p> Digital learner ( Student / Developer / Designer ) </p>
            </Box> 
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/mitza.png" alt="ProfileImage" />
        </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>I am a student at Transilvania University : Faculty of electrical engineering and computer science. To be more specific, Computer Science in the first year. Still learning but I can say I know C, C++, HTML+CSS, and now learning Python, JS. Sometimes I'm a photographer, DJ and SimRacer. Still learning the ways of life. </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal"> 
                    My Portofolio
                </Button>
            </NextLink>
        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>
            <BioSection>
                <BioYear>2002</BioYear>
                Born in Brasov, Romania.
            </BioSection>
            <BioSection>
                <BioYear>2017</BioYear>
                Started highschool where I studied Tourism.
            </BioSection>
            <BioSection>
                <BioYear>2021 to present</BioYear>
                Started studying Computer Science.
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ♥
            </Heading>
            <Paragraph>
                <Link href="https://www.youtube.com/watch?v=luadhSoN6CM">
                    Music
                </Link>
                ,{' '}
                <Link href="https://soundcloud.com/piercingwraith/wraith-mix-n5-minimal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                     DJ-ing,
                </Link>
                {' '}Gaming, Photography, Learning, Sim-Racing
            </Paragraph>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/piercingwraith" target="_blank">
                        <Button colorScheme="teal" variant="ghost" leftIcon={<Icon as={IoLogoGithub}/>}>
                            @piercingwraith
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/___wraith___/" target="_blank">
                        <Button colorScheme="teal" variant="ghost" leftIcon={<Icon as={IoLogoInstagram}/>}>
                            @___wraith___
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://twitter.com/hashiramaasage" target="_blank">
                        <Button colorScheme="teal" variant="ghost" leftIcon={<Icon as={IoLogoTwitter}/>}>
                            @hashiramaasage
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                        <Button colorScheme="teal" variant="ghost" leftIcon={<Icon as={IoLogoDiscord}/>}>
                            Piercing Wraith#5806
                        </Button>
                </ListItem>
            </List>
        </Section>
        </Container>
        </Layout>
    )
}

export default Page
