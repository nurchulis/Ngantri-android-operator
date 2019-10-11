/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, PixelRatio } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ButtonIcon extends Component {

	render () {
		return (
			<View>
				<TouchableOpacity onPress={ this.props.onPress } style={ styles.button }>
					<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
						<Icon name={ this.props.icon } size={ (this.props.size) ? this.props.size : 24 } color='white' />
					</View>
		    	</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create
(
	{
		button: {
			padding: 8,
			elevation: 2,
			backgroundColor: 'transparent'
		}
	}
)