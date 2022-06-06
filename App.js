import React from 'react';
import Index from './src/screens/index';
import Header from './src/components/header';
//import Tabs from './src/components/tabs';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HStack,Spinner,Heading,NativeBaseProvider,View,Text,StatusBar,extendTheme} from 'native-base';
import { useSelector,useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

// const App = () => (
//   <Provider store = { Store }>
//     <NativeBaseProvider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Index} options={{headerTitle :(props)=> <Header {...props} />,headerTitleAlign:'center'}} />
//           <Stack.Screen name="Page" component={Page2} options={{headerTitle :(props)=> <Header {...props} />,headerTitleAlign:'center'}} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   </Provider>
// )

const App = function(){

  let [fontsLoaded] = useFonts({
    'IranSans': require('./src/fonts/IranSans.ttf'),
    'IranSansBold': require('./src/fonts/IranSansBold.ttf'),
  });

  const theme = extendTheme({
    fonts: {
      IranSans: 'IranSans',
      IranSansBold: 'IranSansBold',
    },
  });

  if (!fontsLoaded) {
    return (
      <Provider store = { Store }>
      <NativeBaseProvider theme={theme}>
        <HStack bg={'#282c3f'} flex={1} space={2} alignItems="center" justifyContent="center">
          <Heading color="primary.500" fontSize="xl">
            درحال بارگذاری..
          </Heading>
          <Spinner accessibilityLabel="Loading posts" />
        </HStack>
      </NativeBaseProvider>
    </Provider>
    )
  } else {

    return (
      <Provider store = { Store }>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Index" component={Index} options={{headerTitle :(props)=> <Header {...props} />,headerTitleAlign:'center',headerStyle:{backgroundColor:'#282c3f'}}} />
            </Stack.Navigator>
            {/* <Tabs/> */}
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    )

  }
}

export default App;