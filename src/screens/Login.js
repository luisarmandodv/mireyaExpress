import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(228, 40, 61, 0.9)'
        }}
      >
        <ImageBackground
          source={require('../assets/images/backgroundImage.png')}
          style={{ flex: 1, justifyContent: 'space-between' }}
          blurRadius={5}
        >
          <View
            style={{
              flex: 36,
              backgroundColor: '#e4283d',
              shadowColor: 'rgba(0, 0, 0, 0.11)',
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowRadius: 10,
              shadowOpacity: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../assets/icons/mireyaLogoWhite.png')}
              style={{ height: 204, width: 195 }}
            />
          </View>

          <View
            style={{
              flex: 64,
              alignItems: 'center',
              alignSelf: 'stretch',
              marginTop: 63
            }}
          >
            <TextInput
              style={{
                width: 300,
                height: 50,
                shadowRadius: 4,
                backgroundColor: '#ffffff',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 1,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                paddingLeft: 20
              }}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              textContentType={'username'}
              autoComplete={'username'}
            />
            <TextInput
              style={{
                width: 300,
                height: 50,
                shadowRadius: 4,
                backgroundColor: '#ffffff',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 1,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                paddingLeft: 20
              }}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              textContentType={'password'}
              autoComplete={'password'}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                width: 300,
                height: 50,
                borderRadius: 15,
                backgroundColor: '#e4283d',
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: {
                  width: 0,
                  height: 6
                },
                shadowRadius: 20,
                shadowOpacity: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 29
              }}
              onPress={() => {
                this.props.navigation.navigate('mapScreen');
              }}
            >
              <Text
                style={{
                  width: 160,
                  height: 22,
                  fontFamily: 'Helvetica',
                  fontSize: 18,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  letterSpacing: 1.41,
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              >
                Ingresar
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignSelf: 'stretch',
                marginTop: 30
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    height: 16,
                    fontSize: 13,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 0.23,
                    color: '#ffffff'
                  }}
                >
                  Crear una cuenta
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    height: 16,
                    fontSize: 13,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 0.23,
                    color: '#ffffff'
                  }}
                >
                  ¿Contraseña olvidada?
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'stretch',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 154,
                paddingHorizontal: 37
              }}
            >
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 60,
                  borderRadius: 15,
                  backgroundColor: '#2d46b9',
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Image
                  style={{ width: 11.3, height: 23.7 }}
                  source={require('../assets/icons/facebookIcon.png')}
                />
                <Text
                  style={{
                    width: 184,
                    height: 17,
                    fontFamily: 'Helvetica',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 1,
                    color: '#ffffff'
                  }}
                >
                  Continuar con Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 60,
                  borderRadius: 15,
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#eff2fc'
                }}
              >
                <Image
                  style={{ width: 27, height: 26 }}
                  source={require('../assets/icons/googleIcon.png')}
                />
                <Text
                  style={{
                    width: 166,
                    height: 17,
                    fontFamily: 'Helvetica',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 1,
                    color: '#1c0a41'
                  }}
                >
                  Continuar con Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
