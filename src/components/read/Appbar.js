import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Appbar, useTheme, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppBarHeader = () => {
    const navigation = useNavigation()
    const current = useSelector((state) => state.current.data)
    const appbarShow = useSelector((state) => state.appbar.show)
    return (
        <Appbar.Header style={{display: appbarShow ? "flex":"none"}}>
            <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
            <Appbar.Action icon="translate" onPress={() => { }} />
            <Appbar.Content title={current.name} />
            <Appbar.Action icon="download" onPress={() => { }} />
            <Appbar.Action icon="home" onPress={() => navigation.navigate("HomeScreen")} />
            <Appbar.Action icon="arrow-right" onPress={() => { }} />
        </Appbar.Header>
    )
}

// const BOTTOM_APPBAR_HEIGHT = 80;

// export const AppBarFooter = () => {
//   const { bottom } = useSafeAreaInsets();
//   const theme = useTheme();

//   return (
//     <Appbar
//       style={[
//         styles.bottom,
//         {
//             height: bottom + BOTTOM_APPBAR_HEIGHT
//         }
//     ]}
//     >
//       <Appbar.Action icon="archive" onPress={() => {}} />
//       <Appbar.Action icon="email" onPress={() => {}} />
//       <Appbar.Action icon="label" onPress={() => {}} />
//       <Appbar.Action icon="delete" onPress={() => {}} />
//     </Appbar>
//   );
// };

// const styles = StyleSheet.create({
//   bottom: {
//     backgroundColor: 'aquamarine',
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 80
//   },
// });
