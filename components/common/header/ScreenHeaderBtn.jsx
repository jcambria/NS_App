import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconsUrl, dimension, handelPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handelPress}>
      <Image 
      source={iconsUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn