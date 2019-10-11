/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, PixelRatio, StyleSheet, StatusBar, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'
import Image from 'react-native-scalable-image'
import Modal from 'react-native-modal'

import ownerButton from '../../static/assets/chooserole/owner.png'
import operatorButton from '../../static/assets/chooserole/operator.png'

//import custom components
import Button from '../uicomponents/Button'
import ButtonIcon from '../uicomponents/ButtonIcon'
import CardButton from '../uicomponents/CardButton'

import api from '../../api'
import Data from '../../module/data'
import service from '../../service'

var {height, width} = Dimensions.get('window')

var _this

export default class PilihPendaftaran extends Component {

	//config header pencarian
	static navigationOptions = {
    	headerTitle: "Pilih peran",
    	headerTintColor: 'white',
    	headerTitleStyle: {
        	fontWeight: 'bold',
        	color: 'white',
        	fontSize:16
      	},
      	headerStyle: {
	        elevation: 1,
	        backgroundColor: '#04a3e7',
	        height: 50
	    },
	    headerRight: <ButtonIcon onPress={ () => _this.setState({show:!_this.state.show}) } size={ 24 } icon="more-vert" /> ,
  	}

  	constructor(props) {
	    super(props)
	    this.state = {
	    	show:false,
	    	isLoading:false
	    }

	    _this = this
	}

	_navAuth = async () => {
		this.props.navigation.navigate('NavAuth')
	}

	async _logout () {
		this.setState({isLoading:!this.state.isLoading})
		if (await service.auth.logout(global.config)) {
			this.setState({isLoading:!this.state.isLoading})
			if((await Data.removeData('user')) && (await Data.removeData('tenant'))){
				this._navAuth()
			}
		} else {
			this.setState({isLoading:!this.state.isLoading})
			alert('gagal logout')
		}
	}

	//fungsi pindah ke halaman daftar owner
	_createTenant = () => {
		this.props.navigation.navigate('CreateTenant')
	}

	//fungsi pindah ke halaman daftar staff
	_scanBarcode = () => {
		this.props.navigation.navigate('ScanBarcode')
	}

	render () {
		return (
			<View style={ styles.container }>
				<StatusBar backgroundColor="#0288D1" barStyle="light-content"/>
				<Text style={{fontSize:20, marginBottom:16, marginTop:60}}>Pilih peran anda</Text>
				<Text>Apakah anda pemilik usaha atau operator</Text>
				<View style={{flexDirection:'row', justifyContent:'space-between', width:width-64, marginTop:20}}>
					<TouchableOpacity style={styles.button} onPress={this._createTenant}>
						<Image source={ownerButton} width={190}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this._scanBarcode}>
						<Image source={operatorButton} width={190}/>
					</TouchableOpacity>
				</View>
				<Modal
		          isVisible={this.state.show}
		          animationIn="slideInDown"
		          animationOut="slideOutUp"
		          onBackButtonPress={() => this.setState({show:!this.state.show}) }
		          onBackdropPress={() => this.setState({show:!this.state.show})}
		              style={{justifyContent: "flex-start", margin: 0}}>
		              <View>
		              <View style={{ backgroundColor: '#04a3e7', height: 50 , alignContent: 'flex-end', justifyContent: 'center', elevation: 1}}>
		                <TouchableOpacity onPress={ () => this.setState({show:!this.state.show})  } style={{ alignSelf: 'flex-end',marginRight: 14 }}>
		                  <Text style={{ fontSize:12, color: 'white' }} >TUTUP</Text>
		                </TouchableOpacity>
		              </View>
		              <View style={{height: 56,paddingTop:20, backgroundColor: '#04a3e7', alignItems: 'center', justifyContent:'center'}}>
		                <TouchableOpacity onPress={ () => this.setState({show:!this.state.show}, () => this._logout()) } style={{height:40, width:'100%', alignItems: 'center'}}>
		                  <Text style={{color:'white'}} >Keluar</Text>
		                </TouchableOpacity>
		              </View>
		          </View>
		        </Modal>

		        <Modal
		        isVisible={this.state.isLoading}
		        animationIn="zoomIn"
		        animationOut="zoomOut"
		              style={{justifyContent: 'center', alignItems:'center',flex:1}}>
		              	<View style={{justifyContent:'center',alignItems:'center', height:80,width:80, backgroundColor:'white', borderRadius:8}}>
			              	<ActivityIndicator size="large" color="#4ae0b5"/>
						</View>
		        </Modal>

			</View>
		)
	}
}

const styles = StyleSheet.create(
	{
		container: {
			flexGrow: 1,
			alignItems: 'center',
			backgroundColor: 'white'
		},
		button: {
			height:280,
			opacity: 1,
			alignItems:'center',
			width: (PixelRatio.get() < 1.5) ? 150 : (PixelRatio.get() < 2) ? 150 : (PixelRatio.get() < 3) ? 160 : (PixelRatio.get() < 3.5) ? 150 : 150,
		},
	}
)
