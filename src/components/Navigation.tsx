import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Pressable, Animated, Modal } from 'react-native'
import { Link } from 'react-router-native'
import PlusIcon from '../assets/icons/plus.svg'
import HomeIcon from '../assets/icons/home.svg'
import ProfileIcon from '../assets/icons/profile.svg'
import { AddCard } from './Cards'
import { screenWidth } from '../constants'
import { CreateUpdateClient, CreateUpdateEmployee, CreateUpdateJob } from '../components'

const styles = StyleSheet.create({
  navigation: {
    width: '100%',
    borderTopColor: '#CCC',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    zIndex: 2
  },
  navigationText: {
    color: 'white',
  },
  plusIcon: {
    position: 'relative',
    bottom: '6%',
    alignSelf: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '200%',
    width: '100%',
    position: 'absolute',
    zIndex: 1
  },
  activeScreen: {
    color: '#F2652B'
  },
  addCard: {
    position: 'absolute',
  },
  addEmployee: {
    alignSelf: 'center',
  },
  link: {
    alignSelf: 'center',
    width: '14%'
  }
})

interface IProps {
  activeScreen: 'home' | 'profile'
}

const Navigation: React.FC<IProps> = ({ activeScreen }) => {
  const middle = screenWidth / 2
  // hooks
  const [addIsActive, setAddIsActive] = useState(false)
  const [showAddClient, setShowAddClient] = useState(false)
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [showAddJob, setShowAddJob] = useState(false)
  // Animation variables
  const rotateZ = useRef(new Animated.Value(0)).current
  const opacity = useRef(new Animated.Value(0.5)).current
  const clientX = useRef(new Animated.Value(middle)).current
  const clientY = useRef(new Animated.Value(700)).current
  const employeeY = useRef(new Animated.Value(700)).current
  const jobX = useRef(new Animated.Value(middle)).current
  const jobY = useRef(new Animated.Value(700)).current

  const rotateAnimation = (val: number) => Animated.spring(rotateZ,
    {
      toValue: val,
      useNativeDriver: true
    }).start()
  const clientCardAnimation = (x: number, y: number) => Animated.parallel([
    Animated.spring(clientX,
      {
        toValue: x,
        useNativeDriver: true
      }),
    Animated.spring(clientY,
      {
        toValue: y,
        useNativeDriver: true
      })
  ]).start()
  const employeeCardAnimation = (y: number) => Animated.spring(employeeY,
    {
      toValue: y,
      useNativeDriver: true
    }).start()
  const jobCardAnimation = (x: number, y: number) => Animated.parallel([
    Animated.spring(jobX,
      {
        toValue: x,
        useNativeDriver: true
      }),
    Animated.spring(jobY,
      {
        toValue: y,
        useNativeDriver: true
      })
  ]).start()

  useEffect(() => {
    if (addIsActive) {
      rotateAnimation(135)
      clientCardAnimation(20, 700)
      employeeCardAnimation(640)
      jobCardAnimation(240, 700)
    } else {
      rotateAnimation(0)
      clientCardAnimation(middle, 900)
      employeeCardAnimation(900)
      jobCardAnimation(middle, 900)
    }
  }, [addIsActive])

  Animated.spring(opacity,
    {
      toValue: 1,
      useNativeDriver: true
    }).start()

  const overlay = (
    <View style={styles.overlay}>
      <Animated.View style={{ transform: [{ translateX: clientX }, { translateY: clientY }] }}><AddCard title="Client" style={styles.addCard} onPress={() => setShowAddClient(true)} /></Animated.View>
      <Animated.View style={{ transform: [{ translateY: employeeY }] }}><AddCard title="Employee" style={[styles.addCard, styles.addEmployee]} onPress={() => setShowAddEmployee(true)} /></Animated.View>
      <Animated.View style={{ transform: [{ translateX: jobX }, { translateY: jobY }] }}><AddCard title="Job" style={styles.addCard} onPress={() => setShowAddJob(true)} /></Animated.View>
    </View >
  )

  return (
    <>
      {showAddClient || showAddEmployee || showAddJob ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={addIsActive}
          onRequestClose={() => { setAddIsActive(!addIsActive); setShowAddClient(false); setShowAddEmployee(false); setShowAddJob(false); }}
          presentationStyle='pageSheet'
        >
          {showAddClient ? <CreateUpdateClient /> : null}
          {showAddEmployee ? <CreateUpdateEmployee /> : null}
          {showAddJob ? <CreateUpdateJob /> : null}
        </Modal> :
        null
      }
      {addIsActive ?
        overlay
        :
        null
      }
      <View style={styles.navigation}>
        <Link underlayColor="transparent" to='/home' style={styles.link}>
          <Animated.View style={{
            opacity: opacity
          }}>
            <HomeIcon fill={activeScreen === 'home' ? '#F2652B' : '#a5a5a5'} width={52} height={52} />
          </Animated.View>
        </Link>
        <Pressable onPress={() => setAddIsActive(!addIsActive)} style={styles.plusIcon}>
          <Animated.View style={{
            transform: [{
              rotateZ: rotateZ.interpolate({
                inputRange: [0, 135],
                outputRange: ['0deg', '135deg']
              })
            },
            { perspective: 1000 }
            ]
          }}>
            <PlusIcon stroke={undefined} width={72} height={72} />
          </Animated.View>
        </Pressable>
        <Link underlayColor="transparent" to='/profile' style={styles.link}>
          <Animated.View style={{
            opacity: opacity
          }}>
            <ProfileIcon fill={activeScreen === 'profile' ? '#F2652B' : '#a5a5a5'} width={40} height={40} />
          </Animated.View>
        </Link>
      </View>
    </>)
}

export default Navigation
