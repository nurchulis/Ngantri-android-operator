import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeStaff from '../components/views/staff/Home'
import Service from '../components/views/staff/Service'
import SettingsStaff from '../components/views/staff/Settings'
import NotificationStaff from '../components/views/staff/Notification'
import UpdateProfileOperator from '../components/views/staff/UpdateProfileOperator'
import ChooseCounter from '../components/views/staff/ChooseCounter'
import ChangePasswordStaff from '../components/views/staff/ChangePassword'

const NavBottomTabStaff = createBottomTabNavigator(
  {
    HomeStaff: HomeStaff,
    Service: Service,
    NotificationStaff:NotificationStaff,
    SettingsStaff: SettingsStaff
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let label = navigation.state.routeName
      return ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state
          let icon
          if (routeName === 'HomeStaff') {
            icon = 'home'
          } else if (routeName === 'Service') {
            icon = 'assignment'
          } else if (routeName === 'SettingsStaff') {
            icon = 'settings' 
          } else if (routeName === 'NotificationStaff') {
            icon = 'notifications'
          }
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={icon} size={25} color={tintColor} />
        },
        tabBarLabel: label == 'HomeStaff' ? 'Beranda' : label == 'Service' ? 'Layanan' : label == 'NotificationStaff' ? 'Notifikasi' : 'Pengaturan'
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

const NavStaff = createStackNavigator({
  NavBottomTabStaff: {
    screen: NavBottomTabStaff,
    navigationOptions: ({ navigation }) => {
      let routeName = navigation.state.routes[navigation.state.index].routeName
      return ({
        headerTitle: routeName == 'HomeStaff' ? 'Beranda' : routeName == 'Service' ? 'Loket pelayanan' :  routeName == 'NotificationStaff' ? 'Notifikasi' : 'Pengaturan',
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
  UpdateProfileOperator: {
    screen: UpdateProfileOperator
  },
  ChooseCounter: {
    screen: ChooseCounter
  },
  Service: {
    screen: Service
  },
  ChangePasswordStaff: {
    screen: ChangePasswordStaff
  },
})

export default NavStaff