import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import { RNCamera } from 'react-native-camera';
import {PureComponent} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";


const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

class NativesCamera extends PureComponent {
    state = {
        type: RNCamera.Constants.Type.back,
        flashModeOff: RNCamera.Constants.FlashMode.off,
        flashModeOn:RNCamera.Constants.FlashMode.on ,
        flashModeAuto: RNCamera.Constants.FlashMode.auto,
        flashModeTorch: RNCamera.Constants.FlashMode.torch,
        flashMode: RNCamera.Constants.FlashMode.off,

    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        //@ts-ignore
                        this.camera = ref;
                    }}
                    style={styles.preview}
                     // type= {RNCamera.Constants.Type.back}
                    type={this.state.type}
                    flashMode={this.state.flashMode}
                    faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate} //detection mode of face
                    autoFocus={RNCamera.Constants.AutoFocus.on} //auto focus
                    captureAudio={true}
                    zoom={0}
                    maxZoom={1}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                        buttonNeutral:"Remind me later",
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-start' , marginBottom:10}}>
                        <TouchableOpacity onPress={() => this.flipFlashMode('on')} style={styles.capture}>
                            <Ionicons name="flash-sharp" size={25} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.capture} onPress={() => this.flipFlashMode('off')}>
                            <Ionicons name="flash-off-sharp" size={25}  color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.flipFlashMode('auto')} style={styles.capture}>
                            <Ionicons name="flower-sharp" size={25} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.flipFlashMode('torch')} style={styles.capture}>
                            <Ionicons name="flashlight-sharp" size={25} color="white" />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => this.takePicture(this.camera)} style={styles.capture}>
                            <Ionicons name="camera-sharp" size={25}  color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.capture} onPress={this.flipCamera}>
                            <Ionicons name="camera-reverse-outline" size={25}  color="white" />
                        </TouchableOpacity>
                    </View>

                </RNCamera>

            </View>
        );
    }

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true, width:300, height:300 };
        const data = await camera.takePictureAsync(options);
        console.log(data.uri);
    };

    flipCamera = () =>
        this.setState({
            type:
                this.state.type === RNCamera.Constants.Type.back
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back,
        });

    flipFlashMode = (flashM) =>{
        console.log(this.state.flashMode);
        this.setState({
            flashMode:
            (flashM==='on') ? this.state.flashMode = RNCamera.Constants.FlashMode.on:
                (flashM==='off') ? this.state.flashMode = RNCamera.Constants.FlashMode.off:
                    (flashM==='auto') ? this.state.flashMode = RNCamera.Constants.FlashMode.auto:
                        (flashM==='torch') ? this.state.flashMode = RNCamera.Constants.FlashMode.torch:
                            this.state.flashMode =RNCamera.Constants.FlashMode.off,
        });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        borderRadius: 15,
        backgroundColor:'#333',
        padding: 5,
        alignSelf: 'center',
        margin: 5,
        marginRight:10
    },
});

export default NativesCamera;
