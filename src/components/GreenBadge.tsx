import React from "react"
import { Tag, TagLabel } from '@chakra-ui/react'

interface Props {
  badgeText: String,
}

function GreenBadge(props: Props) {
  return(
    <Tag
      size={"md"}
      borderRadius='full'
      variant='subtle'
      colorScheme='green'
      pr={3}
      pl={3}
    >
      <TagLabel>{props.badgeText}</TagLabel>
    </Tag>
  )
}

export default GreenBadge
