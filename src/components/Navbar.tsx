import React from "react"
import { Link } from "react-router-dom"
import { Flex, Text, Spacer, Stack, } from '@chakra-ui/react'
import GreenButton from "../components/GreenButton"

function Navbar() {
  return(
    <Flex p={8}>
      <Text className="nav-items-logo" as="b" fontSize='3xl'>microbase.</Text>
      <Spacer />
      <Flex direction="row" gap={10} alignItems="center">
        <Text className="nav-items-menu" fontSize="18px"><Link to="/">Home</Link></Text>
        <Text className="nav-items-menu" fontSize="18px"><Link to="/projects">Projects</Link></Text>
        <Text className="nav-items-menu" fontSize="18px"><Link to="/team">Team</Link></Text>
        <Link className="nav-items-menu" to="/application"><GreenButton buttonText="Apply" /></Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
