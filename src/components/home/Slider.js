import React, {useEffect, useState} from 'react'
import { View, Dimensions, ImageBackground } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CoverComponent } from '../manga';
import { useSelector, useDispatch } from "react-redux";
// import { setCurrentManga } from '../../redux/actions';
import {fetchComics} from '../../features/comic/';
import { useNavigation } from '@react-navigation/native';
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)

export const Slider = () => {
    const navigation = useNavigation();
    const comic = useSelector((state) => state.comic)
    const [activeSlide, setActiveSlide] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchComics())
    }, [dispatch])
    return (    
            <ImageBackground style={{flex: 1.8, justifyContent: 'center', backgroundColor: '#00cec9'}} source={{uri: 'https://media.discordapp.net/attachments/880688607881494538/1020672928515371130/IMG_20220917_192915.jpg'}} imageStyle={{opacity: 0.3}}>
                <Carousel
                    data={comic.data}
                    style={{flex: 1}}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    layout={'stack'}
                    loop={true}
                    layoutCardOffset={9}
                    renderItem={({item}) => (
                        <CoverComponent 
                            source={item.thumb} 
                            name={item.name} 
                            goToInfo={() => {
                                dispatch(setCurrentManga(item))
                                navigation.navigate("InfoScreen", item) 
                            }} 
                        />
                    )}
                    inactiveSlideOpacity={0.2}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView={true}
                    autoplay={true}
                /> 
                <Pagination
                    dotsLength={comic.data.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ width: 10, height: 5, alignSelf: 'center' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </ImageBackground>
    )
}

