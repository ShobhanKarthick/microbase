import React from "react"
import { VStack, Flex, Text, Input, InputGroup, InputLeftElement, Wrap, WrapItem, Avatar, Heading, Spacer, } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ReactComponent as LandingPageBg } from "../assets/images/landingPageBg.svg"
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
      <VStack minH="100vh" maxH="100vh" width="100%" backgroundColor={"#B2D2C4"} pb={"4vw"}>
        <Flex direction="column" maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} pb={"2vw"} gap={10}>
          <Text className="nav-items-logo" color="275844" fontSize="5xl">Projects.</Text>
        </Flex>
        <Wrap spacing="30px" flex={1} justifyContent="center" alignItems="center">
          {HomeProjectData.map((project, key) => {
            return (
              <WrapItem>
                <VStack backgroundColor="#ffffff" borderRadius={20} p={6} minW={425} maxW={425} minH={550} maxH={550}>
                  <Avatar size='2xl' src={project.piImage} />
                  <Heading fontSize="xl" as="b" noOfLines={2} pt={4}>{project.title}</Heading>
                  <Text fontSize="md" w="100%"><strong>{`${project.piTitle}. ${project.piName}`}</strong>{`, ${project.piAffliation}`}</Text>
                  <Text fontSize="md" noOfLines={5} pt={3} textAlign="justify"> {project.desc} </Text>
                  <Wrap pt={3}>
                    {project.tags.map((projectTag, index) => {
                      return(<GreenBadge badgeText={projectTag}/>)
                    })
                    }
                  </Wrap>
                  <Spacer />
                  <GreenButton buttonText="Visit Page" width="100%" />
                </VStack>
              </WrapItem>
              )
            })
          }
        </Wrap>
      </VStack>
    </VStack>
  )
}

export default Home
