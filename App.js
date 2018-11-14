import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity, Alert} from 'react-native';
export default class App extends React.Component {


  constructor() {
    super();
    this.state = {
        data: []
    }
  }

  getData() {
      return fetch('https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075', {
          method: 'GET',
          headers: {
              'Authorization': 'Token TssDAkIFxSsCA9IHIUTeznSydm1DUGpBvvWcoE6s',
              'Accept-Language': 'en_US',
              'Content-Type': 'application/json'
          }
      })
          .then((response) => response.json())
          .then((responseJson) => {
              this.state.data[1] = responseJson.prices[1];
              Alert.alert('UberXL', responseJson.prices[1].display_name + ': ' + responseJson.prices[1].estimate);
          })
          .catch((error) => {
              console.error(error);
          });
  }

    componentDidMount() {
      this.getData();
    }



    render(){
        return(
            <View style={{paddingTop: 50, paddingLeft: 50 }}>
                <Text>Welcome to RideSmart!</Text>
                <Text>Anthony and Yoni's First iOS app.</Text>
                <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}></Text>
            </View>
        );
    }
}
