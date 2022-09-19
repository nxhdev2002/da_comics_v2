import React, {useEffect} from "react";
import { View ,Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchComicList } from '../redux/actions'
export const SplashScreen = ({navigation}) => {

    return (
        <View>
            <Text>Splash {loading.toString()}</Text>
        </View>
    )
}