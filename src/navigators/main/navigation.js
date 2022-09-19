import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
/// components
import { BottomNavigator } from './bottom';
import { InfoScreen, ReadScreen } from '../../screens';

const RootStack = createNativeStackNavigator()
export const Route = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false, title: null}} />
            <RootStack.Screen name="InfoScreen" component={InfoScreen} />
            <RootStack.Screen name="ReadScreen" component={ReadScreen} options={{headerShown: false}} />
        </RootStack.Navigator>
    </NavigationContainer>
)