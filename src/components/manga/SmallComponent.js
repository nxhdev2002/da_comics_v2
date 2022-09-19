import React, {useState} from 'react'
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
const WIDTH = Dimensions.get('window').width
export const SmallComponent = (props) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={props.goToInfo}>
            <View style={{flex: 1}}>
                <ImageBackground source={{uri: props.source}} resizeMode="cover" style={styles.cover} imageStyle={styles.imageStyle} onLoad={() => setLoaded(true)}>
                <ActivityIndicator
                    style={{display: loaded ? "none" : "flex"}}
                />
                </ImageBackground>
                <Text style={styles.insideText}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 15,
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: { height: 5},
        shadowOpacity: 0.7,  
        padding: 7,
        margin: 7
    },
    imageStyle: {
        width: WIDTH / 2.1, 
        height: 200,
        borderRadius: 25 ,
    },
    cover: {
        height: 200,
        width: WIDTH / 2.5,
        justifyContent: 'flex-end',
    },
    insideText: {
        color: "black",
        fontSize: 10,
        lineHeight: 20,
        fontWeight: "bold",
        fontStyle: 'italic',
        textAlign: 'center'
    }
})