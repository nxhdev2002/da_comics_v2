import React, {useEffect} from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { ChapterComponent } from '../manga';
import { useSelector, useDispatch } from "react-redux";
// import { fetchEposide } from '../../redux/actions';

export const Eposide = () => {
    const current = useSelector((state) => state.current)
    const eposide = useSelector((state) => state.eposide)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEposide(current.data.id))
    }, [dispatch])
    return (
        <ImageBackground source={{uri: 'https://media.discordapp.net/attachments/880688607881494538/1020672928150462494/IMG_20220917_192914.jpg'}} imageStyle={{opacity: 0.3}}>
            <FlatList
                data={eposide.data}
                renderItem={({item}) => (             
                    <ChapterComponent chapter={item} />
                )}
            />
        </ImageBackground>
    )
}
