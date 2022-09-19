import React from 'react';
import { Dimensions } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { HomeScreen } from '..//../screens'
import VideoPlayer from './test';
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;


const NotificationsRoute = () => <Text>Notifications</Text>;

export const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', icon: 'heart'},
    { key: 'albums', title: 'Albums', icon: 'album' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomeScreen,
    albums: VideoPlayer,
    // recents: RecentsRoute,
    // notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};