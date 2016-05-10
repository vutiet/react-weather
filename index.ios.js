/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
	Image,
  View
} from 'react-native';

var REQUEST_URL = 'http://api.openweathermap.org/data/2.5/weather'
var API_KEY = '84ced08969d35e1d68a917791b24f79f'

class Forecast extends Component {
	render() {
		return ( 
			<View>
				<Text style={styles.bigText}> {this.props.main}
        </Text>
        <Text style={styles.mainText}>
					Current conditions: {this.props.description} </Text>
				<Text style={styles.bigText}> {this.props.temp}°F
        </Text>
      </View>

		);
	}
}

class ReactWeather extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      zip: '',
			forecast: {
				main: null,
				description: null,
				temp: 0
			},
    };
		this._handleTextChange = this._handleTextChange.bind(this);
  }
	
	componentDidMount() {
  }

	fetchData() {

	}
	
	render() {
		var content = null;
		if (this.state.forecast !== null) {
			content = <Forecast main={this.state.forecast.main}
													description={this.state.forecast.description}
													temp={this.state.forecast.temp}/>;
		}
    return (
      <View style={styles.container}>
        <Image source={require('./img/bg.png')}
               resizeMode='cover'
               style={styles.backdrop} >
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
							 Current weather for </Text>
             <View style={styles.zipContainer}>
               <TextInput
						 		style={[styles.zipCode, styles.mainText]} returnKeyType='go' onSubmitEditing={this._handleTextChange}/>
             </View>
           </View>
           {content}
         </View>
        </Image>
      </View>
    );
  }
	
	_handleTextChange(event) {
		var zip = event.nativeEvent.text;
		console.log(event.nativeEvent.text);
		fetch(REQUEST_URL + '?zip=' + zip + '&APPID=' + API_KEY)
      .then((response) => response.json())
      .then((responseData) => {
				console.log(responseData)
				this.setState({
					zip: zip,
					forecast: {
						main: responseData.weather[0].main,
						description: responseData.weather[0].description,
						temp: responseData.main.temp
					}
        });
      })
      .done();
	}
}

var baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
		flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
		alignItems: 'center'
	},   
	row: {    
		flex: 1,
    flexDirection: 'row',
		flexWrap: 'nowrap',
    alignItems: 'flex-start',
		padding: 30
	},
	zipContainer: {
		flex: 1,
		borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
		marginLeft: 5,
    marginTop: 3
	}, 
	zipCode: {
		width: 75,
    height: baseFontSize,
	},  
	bigText: {
    flex: 2,
		fontSize: baseFontSize + 4,
    textAlign: 'center',
		margin: 10,
		color: '#FFFFFF'
	},
	mainText: {
		flex: 1,
    fontSize: baseFontSize,
		textAlign: 'center',
    color: '#FFFFFF'
	},
	placeHolder: {
		flex: 1 
	}
});

AppRegistry.registerComponent('ReactWeather', () => ReactWeather);
