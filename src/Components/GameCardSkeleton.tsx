import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const GameCardSkeleton = () => {
  return (
    <Card  width="244px" borderRadius={10} overflow='hidden'>
    <Skeleton height="278px" >
    <CardBody>
    <SkeletonText />
    </CardBody>
    </Skeleton>
 
   </Card>
  )
}
