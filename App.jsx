import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music';
import Player from './src/components/Player';

import BeforeScreen from './src/screens/BeforeScreen';
import TopicsScreen from './src/screens/TopicsScreen';
import ReadScreen from './src/screens/ReadScreen';
import AncientScreen from './src/screens/AncientScreen';
import AncientReadScreen from './src/screens/ReadAncientScreen';
import ArtifactsScreen from './src/screens/ArtifactsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import GameScreen from './src/screens/GameScreen';

enableScreens();

const Stack = createStackNavigator();

const loaders = [
    require('./src/assets/loaders/1.jpg'),
    require('./src/assets/loaders/2.jpg'),
  ];

const App = () => {
    const [currentLoader, setCurrentLoader] = useState(0);
    const slideAnimation1 = useRef(new Animated.Value(0)).current;
    const slideAnimation2 = useRef(new Animated.Value(Dimensions.get('window').width)).current;

    useEffect(() => {
          const animationTimeout = setTimeout(() => {
          slideToNextLoader();
    }, 1500);

    const navigation = setTimeout(() => {
          navigateToMenu();
          }, 4000);

          return () => {
                clearTimeout(animationTimeout);
                clearTimeout(navigation);
          };
    }, []);

    const slideToNextLoader = () => {
          Animated.parallel([
          Animated.timing(slideAnimation1, {
                toValue: -Dimensions.get('window').width,
                duration: 1500,
                useNativeDriver: true,
          }),
          Animated.timing(slideAnimation2, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
                }),
          ]).start(() => {
                setCurrentLoader(1);
          });
    };

    const navigateToMenu = () => {
          setCurrentLoader(2);
    };

  return (
    <MusicProvider>
        <Player />
        <NavigationContainer>
            <Stack.Navigator
                  screenOptions={{
                  headerShown: false,
                  animation: 'fade',
                  animationDuration: 1000,
                }}>
                  {currentLoader < 2 ? (
                        <Stack.Screen name="Loading" options={{ headerShown: false }}>
                        {() => (
                        <View style={{ flex: 1, backgroundColor: '#000' }}>
                              <Animated.Image
                                    source={loaders[0]}
                                    style={[
                                    { 
                                          width: '100%', 
                                          height: '100%', 
                                          position: 'absolute',
                                    },
                                    { 
                                          transform: [{ translateX: slideAnimation1 }],
                                    },
                                    ]}
                              />
                              <Animated.Image
                                    source={loaders[1]}
                                    style={[
                                    { 
                                          width: '100%', 
                                          height: '100%', 
                                          position: 'absolute',
                                    },
                                    { 
                                          transform: [{ translateX: slideAnimation2 }],
                                    },
                                    ]}
                              />
                        </View>
                        )}
                        </Stack.Screen>
                  ) : (
                        <Stack.Screen 
                              name="BeforeScreen" 
                              component={BeforeScreen} 
                              options={{ headerShown: false }} 
                        />
                  )}        
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
                <Stack.Screen 
                      name="AncientScreen" 
                      component={AncientScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="AncientReadScreen" 
                      component={AncientReadScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="ArtifactsScreen" 
                      component={ArtifactsScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="SettingsScreen" 
                      component={SettingsScreen} 
                      options={{ headerShown: false }} 
                />
                <Stack.Screen 
                      name="GameScreen" 
                      component={GameScreen} 
                      options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    </MusicProvider>
    );
};

export default App;
