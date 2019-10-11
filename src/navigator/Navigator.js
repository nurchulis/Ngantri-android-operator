import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import React, { Component } from 'react'

import NavOwner from './NavOwner'
import NavStaff from './NavStaff'
import NavAuth from './NavAuth'
import NavChooseRole from './NavChooseRole'
import Splash from '../components/views/Splash'
import WaitForAcception from '../components/views/staff/WaitForAcception'
import Intro from '../components/views/intro/Intro'


const Wait = createStackNavigator({
  WaitForAcception:WaitForAcception
})

const AppNavigator = createSwitchNavigator(
  {
    NavStaff: NavStaff,
    NavOwner: NavOwner,
    NavAuth: NavAuth,
    NavChooseRole:NavChooseRole,
    Wait:Wait,
    Intro: Intro,
    Splash: Splash,
  },
  {
    initialRouteName: 'Splash'
  }
);

export default createAppContainer(AppNavigator)