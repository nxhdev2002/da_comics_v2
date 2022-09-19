import React, {useState, memo} from "react"
import { Image, ActivityIndicator, View} from "react-native"
export const RemoteImage= memo(({uri, desiredWidth}) => {
    const [desiredHeight, setDesiredHeight] = useState(200)
    const [loading, isLoading] = useState(true)
    console.log(uri)
    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })
    return (
        <View>
            <Image
                source={{uri}}
                style={{
                    width: desiredWidth,
                    height: desiredHeight
                }}
                onLoad={() => isLoading(false)}
            />
            <ActivityIndicator
                // style={styles.activityIndicator}
                animating={loading}
            />
        </View>
    )
})
