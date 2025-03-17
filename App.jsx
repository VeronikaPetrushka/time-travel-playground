import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BeforeScreen from './src/screens/BeforeScreen';
import TopicsScreen from './src/screens/TopicsScreen';
import ReadScreen from './src/screens/ReadScreen';

enableScreens();

const Stack = createStackNavigator();

const LoadingScreen = ({ navigation }) => {
  const progress = new Animated.Value(0);

  useEffect(() => {
      Animated.timing(progress, {
          toValue: 100,
          duration: 5000,
          useNativeDriver: false,
      }).start(() => {
          navigation.replace('BeforeScreen');
      });
  }, []);

  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
          <Image source={require('./src/assets/decor/logo.png')} style={{ width: 344, height: 344, resizeMode: 'contain', marginTop: -200}} />

          <View style={{width: '100%', position: 'absolute', bottom: 80, alignSelf: 'center'}}>
            <View style={{ width: '85%', height: 4, backgroundColor: '#c0c0c0', borderRadius: 10, overflow: 'hidden', alignSelf: 'center' }}>
                <Animated.View style={{
                    width: progress.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }),
                    height: '100%',
                    backgroundColor: '#cd2027',
                }} />
            </View>
            <Image source={require('./src/assets/decor/loading.png')} style={{position: 'absolute', alignSelf: 'center', bottom: -30, width: 60, height: 60, padding: 5, backgroundColor: '#000', resizeMode: 'contain'}} />
          </View>

      </View>
  );
};

const App = () => {

  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"LoadingScreen" }>    
                <Stack.Screen 
                      name="LoadingScreen" 
                      component={LoadingScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="BeforeScreen" 
                      component={BeforeScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="TopicsScreen" 
                      component={TopicsScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="ReadScreen" 
                      component={ReadScreen} 
                      options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
