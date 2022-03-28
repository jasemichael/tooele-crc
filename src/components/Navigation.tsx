import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import PlusIcon from '../assets/icons/plus.svg'
import HomeIcon from '../assets/icons/home.svg'
import ProfileIcon from '../assets/icons/profile.svg'

const styles = StyleSheet.create({
  navigation: {
    height: 80,
    width: '100%',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 2
  },
  navigationText: {
    color: 'white',
  },
  plusIcon: {
    position: 'relative',
    bottom: 30,
  },
  rotate: {
    transform: [{ rotate: '45deg' }]
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '100%',
    position: 'relative'
  },
  activeScreen: {
    color: '#F2652B'
  }
})

interface IProps {
  activeScreen: 'home' | 'profile'
}

const Navigation: React.FC<IProps> = ({ activeScreen }) => {
  const [addIsActive, setAddIsActive] = useState(false)
  const overlay = (<View style={styles.overlay}></View>)
  const navigation = (
    <View style={styles.navigation}>
      <Link underlayColor="transparent" to='/'><HomeIcon fill={activeScreen === 'home' ? '#F2652B' : '#a5a5a5'} /></Link>
      <Pressable onPress={() => setAddIsActive(!addIsActive)}><PlusIcon stroke={undefined} style={addIsActive ? [styles.plusIcon, styles.rotate] : styles.plusIcon} /></Pressable>
      <Link underlayColor="transparent" to='/profile'><ProfileIcon fill={activeScreen === 'profile' ? '#F2652B' : '#a5a5a5'} /></Link>
    </View>
  )
  return (addIsActive ?
    <>
      {navigation}
      {overlay}
    </>
    :
    <>
      {navigation}
    </>
  )
}

export default Navigation
