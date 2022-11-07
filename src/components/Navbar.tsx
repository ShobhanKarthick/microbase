import React from "react"
import { Link } from "react-router-dom"
import { Flex, Text, Spacer, Stack, Button } from '@chakra-ui/react'

function Navbar() {
  return(
    <Flex>
      <Text p={4} className="nav-items-logo" as="b" fontSize='3xl'>microbase.</Text>
      <Spacer />
      <Flex direction="row" gap={5} alignItems="center">
        <Text className="nav-items-menu" p={4} fontSize="18px"><Link to="/">Home</Link></Text>
        <Text className="nav-items-menu" p={4} fontSize="18px"><Link to="/projects">Projects</Link></Text>
        <Text className="nav-items-menu" p={4} fontSize="18px"><Link to="/team">Team</Link></Text>
        <Link className="nav-items-menu" to="/application"><Button m={4} fontSize="18px" backgroundColor="#4ea576" color="#fff" borderRadius={25} padding={"0 20px"}> Apply </Button></Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
