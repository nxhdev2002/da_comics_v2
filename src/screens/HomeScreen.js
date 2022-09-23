import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { Slider, Popular } from '../components/home'
import { AppBarHeader } from '../components/home'
export const HomeScreen = ({navigation}) => (
    <SafeAreaView style={{flex: 1}}>
        {/* <AppBarHeader /> */}
        <Slider />
        {/* <Popular /> */}
    </SafeAreaView>
)
