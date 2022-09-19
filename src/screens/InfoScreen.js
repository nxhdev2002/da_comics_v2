import React, {useLayoutEffect} from "react";
import {View, Text} from "react-native"
import { Header } from "../components/info";
import { TopNavigator } from "../navigators/InfoScreen";
export const InfoScreen = ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({ title: route.params.name.slice(0, 10) + "..." })
    }, [])
    return (
        <View style={{flex: 1}}>
            <Header item={route.params} />
            <View style={{flex: 2}}>
                <TopNavigator />
            </View>
        </View>
    )
}