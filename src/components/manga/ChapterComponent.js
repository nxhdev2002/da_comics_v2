import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
export const ChapterComponent = (props) => {
    const navigation = useNavigation()
    const chapter = props.chapter
    return (
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate("ReadScreen", chapter)}>
            <View style={styles.container}>
                <Text>Eposide {chapter.chapter}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        borderBottomColor: '#81ecec',
        borderBottomWidth: 1
    }
})