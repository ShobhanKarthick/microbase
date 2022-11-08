
import React from "react"
import { Button, WrapItem } from '@chakra-ui/react'

interface Props {
  buttonText: string,
  width?: string | number,
}

function GreenButton(props: Props) {
  return(
      <Button fontSize="18px" backgroundColor="#4ea576" color="#fff" borderRadius={25} padding={"0 20px"} w={props.width}> {props.buttonText} </Button>
  )
}

export default GreenButton
