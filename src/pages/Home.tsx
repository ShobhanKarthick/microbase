import React from "react"
import { VStack, Flex, Text, Input, InputGroup, InputLeftElement, Image } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ReactComponent as LandingPageBg } from "../assets/images/landingPageBg.svg"

function Home() {
  return(
    <VStack minH="calc(100vh - 109px)">
      <VStack h="calc(100vh - 109px)">
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
      <VStack h="100vh">
      </VStack>
    </VStack>
  )
}

export default Home
