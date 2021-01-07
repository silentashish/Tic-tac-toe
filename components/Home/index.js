import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.block}>
        <ImageBackground
          resizeMode={'stretch'}
          style={styles.container}
          source={require('../../img/background.jpg')}>
          <View style={styles.view}>
            <LottieView
              source={require('../../img/start.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={styles.title}>TIC TAC TOE</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Actions.game()}>
            <Text style={styles.textButton}>Start Game</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  block: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    height: 150,
  },
  button: {
    backgroundColor: 'yellow',
    margin: 50,
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 26,
    // fontWeight: '800',
  },
  view: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    color: '#1a1a1a',
  },
});

export default Home;
