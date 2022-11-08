import React from "react"
import { Link } from "react-router-dom"
import { VStack, Flex, Text, Input, InputGroup, InputLeftElement, Wrap, WrapItem, Avatar, Heading, Spacer, Image } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon, AddIcon } from '@chakra-ui/icons'
import { ReactComponent as LandingPageBg } from "../assets/images/landingPageBg.svg"
import HowtoApplyImage from "../assets/images/howToApply.png"
import GreenBadge from "../components/GreenBadge"
import GreenButton from "../components/GreenButton"
import { HomeProjectData } from "./Dataset"

function Home() {
  return(
    <VStack minH="calc(100vh - 109px)">
      <VStack h="calc(100vh - 109px)" p={8}>
        <Flex direction="row" flex={1} maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} gap={10}>
          <Flex direction="column" flex={1} justifyContent="center">
            <Text className="nav-items-logo" fontSize="5xl">Revolutionizing the growth of </Text>
            <Text className="nav-items-logo" fontSize="5xl" style={{ color: "#275844" }}>Indian microbiome.</Text>
            <InputGroup mt={4} size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.700' />}
              />
              <Input type='text' borderColor="gray.500" focusBorderColor="#275844" borderRadius={25} w={"70%"} placeholder="Search projects..."/>
            </InputGroup>
          </Flex>
          <Flex flex={1} justifyContent="end">
            <LandingPageBg width="95%"/>
          </Flex>
        </Flex>
          <Flex>
            <ChevronDownIcon w={6} h={6} />
          </Flex>
      </VStack>
      <VStack minH="100vh" width="100%" backgroundColor={"#B2D2C4"} pb={"4vw"} style={{margin: 0}}> 
        <Flex direction="column" maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} pb={"2vw"} gap={10}>
          <Text className="nav-items-logo" color="275844" fontSize="5xl">Projects.</Text>
        </Flex>
        <Flex wrap={"wrap"} gap="30px" flex={1} justify="center" align="center">
          {HomeProjectData.map((project, key) => {
            return (
                <VStack backgroundColor="#ffffff" borderRadius={20} p={6} minW={425} maxW={425} minH={550} maxH={550}>
                  <Avatar size='2xl' src={project.piImage} />
                  <Heading fontSize="xl" as="b" noOfLines={2} pt={4}>{project.title}</Heading>
                  <Text fontSize="md" w="100%"><strong>{`${project.piTitle}. ${project.piName}`}</strong>{`, ${project.piAffliation}`}</Text>
                  <Text fontSize="md" noOfLines={5} pt={3} textAlign="justify"> {project.desc} </Text>
                  <Spacer />
                  <Wrap pt={3} pb={3}>
                    {project.tags.map((projectTag, index) => {
                      return(<GreenBadge badgeText={projectTag}/>)
                    })
                    }
                  </Wrap>
                  <GreenButton buttonText="Visit Page" width="100%" />
                </VStack>
              )
            })
          }
        </Flex>
      </VStack>
      <VStack minH="100vh" width="100%" backgroundColor={"#e9f0ff"} pb={"4vw"} style={{margin: 0}}> 
        <Flex direction="column" maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} pb={"2vw"} gap={10}>
          <Text className="nav-items-logo" color="275844" fontSize="5xl">How to apply?</Text>
        </Flex>
        <Flex direction="row" flex={1} maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} gap={10}>
          <Flex direction="column" flex={1} justify="center" align="center">
            <Image src={HowtoApplyImage} w="75%"/>
          </Flex>
          <Flex flex={1} gap={10} direction="column" justifyContent="center" alignItems="center">
            <VStack backgroundColor="#ffffff" borderRadius={20} p={6} minW={425} maxW={425}>
              <Text fontSize="3xl">Are you an existing PI </Text>
              <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </Text>
              <GreenButton buttonText="Add Projects" rightIcon={<AddIcon w={4} h={4} />} />
            </VStack>
            <VStack backgroundColor="#ffffff" borderRadius={20} p={6} minW={425} maxW={425}>
              <Text fontSize="3xl">Are you new to here?</Text>
              <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </Text>
              <Link className="nav-items-menu" to="/application"><GreenButton buttonText="Apply" /></Link>
            </VStack>
          </Flex>
        </Flex>
      </VStack>
    </VStack>
  )
}

export default Home
