import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import React, { Component } from 'react'
import { Text, StyleSheet, PixelRatio } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeOwner from '../components/views/owner/Home'
import ListOfServices from '../components/views/owner/ListOfServices'
import ListOfStaff from '../components/views/owner/ListOfStaff'
import Settings from '../components/views/owner/Settings'
import CreateService from '../components/views/owner/CreateService'
import UpdateService from '../components/views/owner/UpdateService'
import ChangePassword from '../components/views/owner/ChangePassword'
import UpdateProfileAdmin from '../components/views/owner/UpdateProfileAdmin'
import UpdateProfileInstansi from '../components/views/owner/UpdateProfileInstansi'
import UpdateOperasionalTime from '../components/views/owner/UpdateOperasionalTime'
import Notification from '../components/views/owner/Notification'
import ButtonIcon from '../components/uicomponents/ButtonIcon'

const NavBottomTab = createBottomTabNavigator(
  {
    HomeOwner: HomeOwner,
    ListOfServices: ListOfServices,
    ListOfStaff:ListOfStaff,
    Notification:Notification,
    Settings: Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let label = navigation.state.routeName
      return ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state
          let icon
          if (routeName === 'HomeOwner') {
            icon = 'home'
          } else if (routeName === 'ListOfServices') {
            icon = 'assignment'
          } else if (routeName === 'Settings') {
            icon = 'settings' 
          } else if (routeName === 'ListOfStaff') {
            icon = 'group'
          } else if (routeName === 'Notification') {
            icon = 'notifications'
          }
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={icon} size={25} color={tintColor} />
        },
        tabBarLabel: label == 'HomeOwner' ? 'Beranda' : label == 'ListOfServices' ? 'Layanan' : label == 'ListOfStaff' ? 'Operator' : label == 'Notification' ? 'Notifikasi' : 'Pengaturan'
      })
    },
    tabBarOptions: {
      activeTintColor: '#04a3e7',
      inactiveTintColor: '#cfcfcf',
      showLabel: true,
      labelStyle: {
        fontSize: 12,
        marginTop:-10,
        marginBottom:8
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0.8,
        height: 50
      },
    }
  }
)

const NavOwner = createStackNavigator({
  NavBottomTab: {
    screen: NavBottomTab,
    navigationOptions: ({ navigation }) => {
      let routeName = navigation.state.routes[navigation.state.index].routeName
      return ({
        headerTitle: routeName == 'HomeOwner' ? 'Beranda' : routeName == 'ListOfServices' ? 'Daftar Layanan' : routeName == 'ListOfStaff' ? 'Daftar Staff' : routeName == 'Notification' ? 'Notifikasi' : 'Pengaturan',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
          fontSize:16
        },
        headerRightContainerStyle: {
          marginRight: 8,
        },
        headerStyle: {
          elevation: 1,
          backgroundColor: '#04a3e7',
          height: 50
        }
      })
    },
  },
  CreateService: {
    screen: CreateService
  },
  UpdateService: {
    screen: UpdateService
  },
  UpdateProfileAdmin: {
    screen: UpdateProfileAdmin
  },
  UpdateProfileInstansi: {
    screen: UpdateProfileInstansi
  },
  UpdateOperasionalTime: {
    screen: UpdateOperasionalTime
  },
  ChangePassword: {
    screen: ChangePassword
  }
})

export default NavOwner