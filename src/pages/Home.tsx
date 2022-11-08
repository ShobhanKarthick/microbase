import React from "react"
import { VStack, Flex, Text, Input, InputGroup, InputLeftElement, Wrap, WrapItem, Avatar, Heading, Spacer, } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ReactComponent as LandingPageBg } from "../assets/images/landingPageBg.svg"
import GreenBadge from "../components/GreenBadge"
import GreenButton from "../components/GreenButton"

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
      <VStack maxH="100vh" width="100%" backgroundColor={"#B2D2C4"}>
        <Flex direction="column" flex={1} maxHeight={"calc(100vh - 109px)"} width="100%" p={"4vw"} gap={10}>
          <Text className="nav-items-logo" color="275844" fontSize="5xl">Projects.</Text>
        </Flex>
        <Wrap>
          <WrapItem>
            <VStack backgroundColor="#ffffff" borderRadius={20} p={6} minW={350} maxW={350} minH={550} maxH={550}>
              <Avatar size='2xl' src='https://bit.ly/broken-link' />
              <Heading fontSize="xl" as="b" noOfLines={2} pt={4}>Understanding gut microbiome in western diet </Heading>
              <Text fontSize="md" w="100%"><strong>Dr. Joey Tribbiani</strong>, Harvard University, USA</Text>
              <Text fontSize="md" noOfLines={5} pt={3} textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Wrap pt={3}>
                <GreenBadge badgeText="New" />
                <GreenBadge badgeText="microbiome" />
                <GreenBadge badgeText="gut" />
                <GreenBadge badgeText="science" />
                <GreenBadge badgeText="western diet" />
              </Wrap>
              <Spacer />
              <GreenButton buttonText="Visit Page" width="100%" />
            </VStack>
          </WrapItem>
        </Wrap>
      </VStack>
    </VStack>
  )
}

export default Home
