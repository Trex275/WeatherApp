import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: ''
    }
  }
  getweather = async () => {
    var link = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
    return fetch(link).then(response => response.json()).then(result => {
      this.setState({ weather: result })
    }).catch(error => {
      console.error(error)
    })
  }
  componentDidMount() {
    this.getweather()
  }
  render() {
    if (this.state.weather === '') {
      return (<View>
        <Text>loading</Text>
      </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text>{this.state.weather.main.temp}</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
