import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'native-base';

const Header = function header() {

    return (
        <Image
        alt="logo"
        resizeMode='contain'
        style={{ width: 150, height: 40}}
        source={require('../images/logo.png')}
    />
      );
  
}

export default Header;