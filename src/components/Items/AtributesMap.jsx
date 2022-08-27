import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faCross, faBook, faHand, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { Text } from '@chakra-ui/react';

function AtributesMap({ ReqAtributesArr }) {
  let IconReturner = function (iconName) {
    if (iconName === 'Str') {
      return faDumbbell
    } else if (iconName === 'Dex') {
      return faHand
    } else if (iconName === 'Int') {
      return faBook
    } else if (iconName === 'Fai') {
      return faCross
    } else {
      return faFireFlameCurved
    }
  }
  return (
    <>
      {ReqAtributesArr.map((item, index) => (<Text key={index}><FontAwesomeIcon icon={IconReturner(item.name)} /> {item.name}: {item.amount}</Text>))}
    </>
  )
}

export default AtributesMap