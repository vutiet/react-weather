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
  View
} from 'react-native';

class ReactWeather extends Component {

	getinitialState: function() {
		return {
			zip: '',
			forecast: {
				main: 'Clouds',
				description: 'few clouds',
				temp: 45.7
			}
		};
	}
	
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}
					tadatada
        </Text>
				<TextInput 
					returnKeyType='go'
					onSumitEditing={handleText} />
      </View>
    );
  }

	var handleText = (event) => {
		console.log(event.nativeEvent.text);
		this.setState({zip: event.nativeEvent.text});
	};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactWeather', () => ReactWeather);


				<Image
					source={require('image!Lavender')}
					resizeMode='cover'
					style={styles.backdrop}>
				</Image>
					
					
									<View style={styles.zipContainer}>
					<TextInput
						style={[styles.zipCode, styles.mainText]} 
						returnKeyType='go' 
						onSubmitEditing={this._handleTextChange}/>        
					</View>