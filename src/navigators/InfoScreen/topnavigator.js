import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Eposide, Language, Related } from "../../components/info";
const Tab = createMaterialTopTabNavigator()

export const TopNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Eposide" component={Eposide} />
        <Tab.Screen name="Language" component={Language} />
        <Tab.Screen name="Related" component={Related} />
    </Tab.Navigator>
)
