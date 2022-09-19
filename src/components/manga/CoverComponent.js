import React, {useState} from 'react'
import { Text, ImageBackground, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'

const WIDTH = Dimensions.get('window').width
export const CoverComponent = (props) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={props.goToInfo}>
            <ImageBackground source={{uri: props.source}} resizeMode="cover" style={styles.cover} imageStyle={styles.imageStyle} onLoad={() => setLoaded(true)}>
            <ActivityIndicator
                style={{display: loaded ? "none" : "flex"}}
            />
                <Text style={styles.insideText}>
                    {props.name}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 15,
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: { height: 10},
        shadowOpacity: 0.7,  
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 25 ,
    },
    cover: {
        height: 200,
        width: WIDTH * 0.9,
        justifyContent: 'flex-end',
    },
    insideText: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        backgroundColor: "rgba(255,0,0,0.7)",
        textAlign: 'center'
    }
})