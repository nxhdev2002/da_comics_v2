'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video,{FilterType} from 'react-native-video';

const filterTypes = [
    FilterType.NONE,
    FilterType.INVERT,
    FilterType.MONOCHROME,
    FilterType.POSTERIZE,
    FilterType.FALSE,
    FilterType.MAXIMUMCOMPONENT,
    FilterType.MINIMUMCOMPONENT,
    FilterType.CHROME,
    FilterType.FADE,
    FilterType.INSTANT,
    FilterType.MONO,
    FilterType.NOIR,
    FilterType.PROCESS,
    FilterType.TONAL,
    FilterType.TRANSFER,
    FilterType.SEPIA
];

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    ignoreSilentSwitch: null,
    mixWithOthers: null,
    isBuffering: false,
    filter: FilterType.NONE,
    filterEnabled: true
  };

  onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  setFilter(step) {
    let index = filterTypes.indexOf(this.state.filter) + step;

    if (index === filterTypes.length) {
      index = 0;
    } else if (index === -1) {
      index = filterTypes.length - 1;
    }

    this.setState({
      filter: filterTypes[index]
    })
  }

  renderSkinControl(skin) {
    const isSelected = this.state.skin == skin;
    const selectControls = skin == 'native' || skin == 'embed';
    return (
      <TouchableOpacity onPress={() => { this.setState({
          controls: selectControls,
          skin: skin
        }) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);

    return (
      <TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    )
  }

  renderMixWithOthersControl(mixWithOthers) {
    const isSelected = (this.state.mixWithOthers == mixWithOthers);

    return (
      <TouchableOpacity onPress={() => { this.setState({mixWithOthers: mixWithOthers}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {mixWithOthers}
        </Text>
      </TouchableOpacity>
    )
  }

  renderCustomSkin() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video
            source={{uri: 'https://scontent.cdninstagram.com/v/t39.25447-2/10000000_173390425156326_6490261243902069083_n.mp4?_nc_cat=111&vs=656bac2447820d8d&_nc_vs=HBksFQAYJEdJQ1dtQURtNnJLYXNwMEFBRnVKUk9ZMkNoSmFibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDWFY2UmlON2NIQUsyajd2eVFSNFIxYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm%2FKK4npnr6AIVAigDQzNlGAt2dHNfcHJldmlldxwXQJYwRqfvnbIYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzM5ODY4MTg1MjI5NTgzMRJvZW1fdmlkZW9fYXNzZXRfaWQPNzI3Njc3MzM1MTkwNzg1FW9lbV92aWRlb19yZXNvdXJjZV9pZA83OTM0OTAwMDUzNjI4Nzgcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDAxMzY2NTM3MjMwMDAwDnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQyODQ4AmNkCjIwMjItMDctMDUDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDIwLjA0NAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=95ADX0KwzaMAX_AqHNy&_nc_ht=scontent-frx5-2.xx&edm=APRAPSkEAAAA&oh=00_AT93oWJosyqcz7wXuHYOknNiEWmYkboqfiD44UTInpk3LQ&oe=6329B7E7&_nc_rid=424749873860306'}}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            mixWithOthers={this.state.mixWithOthers}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat={true}
            filter={this.state.filter}
            filterEnabled={this.state.filterEnabled}
          />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
            {
              (this.state.filterEnabled) ?
                  <View style={styles.skinControl}>
                    <TouchableOpacity onPress={() => {
                      this.setFilter(-1)
                    }}>
                      <Text style={styles.controlOption}>Previous Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.setFilter(1)
                    }}>
                      <Text style={styles.controlOption}>Next Filter</Text>
                    </TouchableOpacity>
                  </View> : null
            }
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            {
              (Platform.OS === 'ios') ?
                <>
                  <View style={styles.ignoreSilentSwitchControl}>
                    {this.renderIgnoreSilentSwitchControl('ignore')}
                    {this.renderIgnoreSilentSwitchControl('obey')}
                  </View>
                  <View style={styles.mixWithOthersControl}>
                    {this.renderMixWithOthersControl('mix')}
                    {this.renderMixWithOthersControl('duck')}
                  </View>
                </> : null
            }
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
              <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderNativeSkin() {
    const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <Video
            source={{uri: 'https://scontent.cdninstagram.com/v/t39.25447-2/10000000_173390425156326_6490261243902069083_n.mp4?_nc_cat=111&vs=656bac2447820d8d&_nc_vs=HBksFQAYJEdJQ1dtQURtNnJLYXNwMEFBRnVKUk9ZMkNoSmFibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDWFY2UmlON2NIQUsyajd2eVFSNFIxYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm%2FKK4npnr6AIVAigDQzNlGAt2dHNfcHJldmlldxwXQJYwRqfvnbIYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzM5ODY4MTg1MjI5NTgzMRJvZW1fdmlkZW9fYXNzZXRfaWQPNzI3Njc3MzM1MTkwNzg1FW9lbV92aWRlb19yZXNvdXJjZV9pZA83OTM0OTAwMDUzNjI4Nzgcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDAxMzY2NTM3MjMwMDAwDnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQyODQ4AmNkCjIwMjItMDctMDUDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDIwLjA0NAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=95ADX0KwzaMAX_AqHNy&_nc_ht=scontent-frx5-2.xx&edm=APRAPSkEAAAA&oh=00_AT93oWJosyqcz7wXuHYOknNiEWmYkboqfiD44UTInpk3LQ&oe=6329B7E7&_nc_rid=424749873860306'}}
            style={videoStyle}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            mixWithOthers={this.state.mixWithOthers}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat={true}
            controls={this.state.controls}
            filter={this.state.filter}
            filterEnabled={this.state.filterEnabled}
          />
        </View>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
            {
              (this.state.filterEnabled) ?
                  <View style={styles.skinControl}>
                    <TouchableOpacity onPress={() => {
                      this.setFilter(-1)
                    }}>
                      <Text style={styles.controlOption}>Previous Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.setFilter(1)
                    }}>
                      <Text style={styles.controlOption}>Next Filter</Text>
                    </TouchableOpacity>
                  </View> : null
            }
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            {
              (Platform.OS === 'ios') ?
                <>
                  <View style={styles.ignoreSilentSwitchControl}>
                    {this.renderIgnoreSilentSwitchControl('ignore')}
                    {this.renderIgnoreSilentSwitchControl('obey')}
                  </View>
                  <View style={styles.mixWithOthersControl}>
                    {this.renderMixWithOthersControl('mix')}
                    {this.renderMixWithOthersControl('duck')}
                  </View>
                </> : null
            }
          </View>
        </View>

      </View>
    );
  }

  render() {
    return this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mixWithOthersControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

export default VideoPlayer;