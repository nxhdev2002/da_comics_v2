import React, {useState} from "react"
import { Image, ActivityIndicator, View} from "react-native"
export const RemoteImage = ({uri, desiredWidth}) => {
    const [desiredHeight, setDesiredHeight] = useState(0)
    const [loading, isLoading] = useState(true)
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
}