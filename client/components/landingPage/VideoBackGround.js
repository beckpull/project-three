import { StyleSheet } from "react-native";
import { Video } from "expo-av";
import videoFile from "../../assets/videos/mainVideo.mp4";

export default function VideoBackGround() {
  return (
    <Video
      source={videoFile}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={styles.video}
    />
  )
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});