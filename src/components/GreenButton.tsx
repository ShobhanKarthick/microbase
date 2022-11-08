
import React from "react"
import { Button } from '@chakra-ui/react'

interface Props {
  buttonText: string,
  width?: string | number,
  [propName: string]: any,
}

function GreenButton(props: Props) {
  const { buttonText, width, ...rest} = props
  return(
      <Button {...rest} fontSize="18px" backgroundColor="#4ea576" color="#fff" borderRadius={25} padding={"0 20px"} w={props.width}> {props.buttonText} </Button>
  )
}

export default GreenButton
