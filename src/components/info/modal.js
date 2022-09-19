import React, { useState } from "react";
import { View, Text, Modal,TouchableOpacity, TextInput } from 'react-native'
// import { downloadFile } from "../../utils/download";
export const DownloadModal = (props) => {
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(1)
    const [download, setDownloadStatus] = useState(false)
    const [downloaded, setDownloaded] = useState(0);
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    props.visible(false)
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf:'center',
                    width: '80%',
                    marginTop: '5%',
                }}>
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>From</Text>
                        <TextInput 
                            style={{padding: 20}}
                            placeholder='1' keyboardType='numeric' onChangeText={(text) => setFrom(text.trim())}> </TextInput>
                        <Text>To</Text>
                        <TextInput 
                            style={{padding: 20}}
                            placeholder='2' keyboardType='numeric' onChangeText={(text) => setTo(text.trim())}> </TextInput>
                        <TouchableOpacity
                            style={{ backgroundColor: '#2c3e50', padding: 10, maxWidth: '100%' }}
                            onPress={() => { 
                            }}
                        >
                            <Text>Download</Text>
                        </TouchableOpacity>

                        <Text style={{ display: download ? 'flex' : 'none' }}>Downloading {downloaded} / {to}</Text>

                        <TouchableOpacity
                            onPress={() => props.visible(false)}
                        >
                            <Text style={{lignSelf: 'center', top: '100%'}}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
