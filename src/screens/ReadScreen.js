import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, Dimensions} from "react-native";
// import {fetchPictureList, setAppbar} from '../redux/actions'
import { RemoteImage, AppBarHeader } from "../components/read";
export const ReadScreen = ({navigation, route}) => {
    const picture = useSelector((state) => state.picture)
    const current = useSelector((state) => state.current)
    const uuid = current.data
    const dispatch = useDispatch()
    const [desiredHeight, setDesiredHeight] = React.useState(0)
    const [touchY, setTouchY] = useState(0)
    useEffect(() => {
        dispatch(fetchPictureList(uuid, route.params.id))
    }, [dispatch])
    return (
        <View>
            <AppBarHeader />
            <FlatList
                data={picture.data}
                renderItem={({item}) => (
                    <RemoteImage
                        uri={item}
                        desiredWidth={Dimensions.get('window').width}
                    />
                )}
                onTouchStart={e=> setTouchY(e.nativeEvent.pageY)}
                onTouchEnd={e => {
                    if (touchY - e.nativeEvent.pageY > 20) {
                        dispatch(setAppbar(false))
                    } else {
                        dispatch(setAppbar(true))
                    }
                } }
            />
            {/* <AppBarFooter /> */}
        </View>
    )
}