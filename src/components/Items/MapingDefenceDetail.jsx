import React from 'react'
import { ListItem } from '@chakra-ui/react'

function MapingDefenceDetail({DefenceArr}) {
    return (
        <>
            {DefenceArr.map((item, index) => (<ListItem key={index}> {item.name}: {item.amount}</ListItem>))}
            
        </>
    )
}

export default MapingDefenceDetail