import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native'
import { SmallComponent } from '../manga';
import { useSelector, useDispatch } from "react-redux";
// import { fetchPopularList, setCurrentManga } from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';
export const Popular = () => {
    const navigation = useNavigation()
    const [offset, setOffset] = useState(0)
    const popular = useSelector((state) => state.popular)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPopularList(offset))
    }, [offset])
    return (    
        <View style={{flex: 2, justifyContent: 'center', top: 20}}>
            <ImageBackground source={{uri: 'https://media.discordapp.net/attachments/880688607881494538/1020672928758632448/IMG_20220917_192919.jpg'}} imageStyle={{opacity: 0.3}}>
                <Text style={{fontSize: 20, fontWeight:'600', marginLeft: 20}}>Popular</Text>
                <ActivityIndicator animating={popular.loading} />
                <FlatList
                    data={popular.data}
                    keyExtractor={(key) => key.id}
                    renderItem={({item}) => (
                        <SmallComponent 
                            source={item.thumb} 
                            name={item.name} 
                            goToInfo={() => {
                                    dispatch(setCurrentManga(item))
                                    navigation.navigate("InfoScreen", item) 
                                }
                            }
                            style={{flexBasis: '50%'}} />
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    onEndReached={() => {
                        setOffset(offset => offset + 10)
                    }}
                    onEndReachedThreshold={1.1}
                />  
            </ImageBackground>
        </View>
    )
}

