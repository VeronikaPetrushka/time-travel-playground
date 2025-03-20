import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type, active }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case '1':
      imageSource = require('../assets/nav/1.png');
      active && iconStyle.push(styles.active);
      break;
    case '2':
      imageSource = require('../assets/nav/2.png');
      active && iconStyle.push(styles.active);
      break;
    case '3':
      imageSource = require('../assets/nav/3.png');
      active && iconStyle.push(styles.active);
      break;
    case '4':
      imageSource = require('../assets/nav/4.png');
      active && iconStyle.push(styles.active);
      break;
    case '5':
      imageSource = require('../assets/nav/5.png');
      active && iconStyle.push(styles.active);
      break;
    case 'back':
      imageSource = require('../assets/icons/back.png');
      break;
    case 'correct':
      imageSource = require('../assets/icons/correct.png');
      break;
    case 'wrong':
      imageSource = require('../assets/icons/wrong.png');
      break;
    case 'points':
      imageSource = require('../assets/icons/points.png');
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({

  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  active: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#cd2027',
  },

});

export default Icons;
