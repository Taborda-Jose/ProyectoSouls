import React from 'react'
import { ListItem } from '@chakra-ui/react'

function MapingAtackDetail({AtackArr}) {
    return (
        <>
            {AtackArr.map((item, index) => (<ListItem key={index}> {item.name}: {item.amount}</ListItem>))}
        </>
    )
}

export default MapingAtackDetail