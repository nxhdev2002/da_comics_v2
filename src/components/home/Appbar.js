import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Appbar, useTheme, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppBarHeader = () => {
    const navigation = useNavigation()
    const current = useSelector((state) => state.current.data)
    return (
        <Appbar.Header>
            <Appbar.Action icon="chevron-double-right" onPress={() => {}} />
            <Appbar.Content title={"DA Comics"} />
            <Appbar.Action icon="database-search-outline" onPress={() => {}} />
            <Appbar.Action icon="arrow-right" onPress={() => { }} />
        </Appbar.Header>
    )
}
