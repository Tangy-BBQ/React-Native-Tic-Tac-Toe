import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {

  const [player, setPlayer] = useState('cross')

  const [map, setMap] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ]);

  const onPlay = (row, col) => {
    if(map[row][col] === -1) {
      let temp = map
      if(player === 'cross'){
        temp[row][col] = 0
        setPlayer('circle')
      } else {
        temp[row][col] = 1
        setPlayer('cross')
      }
      setMap(temp)
    }
  }

  const reset = () => {
    setMap([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1]
    ])
  }

  return (
    <View style={styles.container}>
      <Text>{player}'s turn</Text>
      <View style={[styles.container, {
      flexDirection: "column"}, { flex: 1}]}>

        <View style={[styles.container, {flexDirection: "row"}]}>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(0, 0)}>
            {map[0][0] === -1 && <View style={[styles.button]}></View>}
            {map[0][0] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[0][0] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(0, 1)}>
            {map[0][1] === -1 && <View style={[styles.button]}></View>}
            {map[0][1] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[0][1] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(0, 2)}>
            {map[0][2] === -1 && <View style={[styles.button]}></View>}
            {map[0][2] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[0][2] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
        </View>

        <View style={[styles.container, {flexDirection: "row"}]}>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(1, 0)}>
            {map[1][0] === -1 && <View style={[styles.button]}></View>}
            {map[1][0] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[1][0] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(1, 1)}>
            {map[1][1] === -1 && <View style={[styles.button]}></View>}
            {map[1][1] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[1][1] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(1, 2)}>
            {map[1][2] === -1 && <View style={[styles.button]}></View>}
            {map[1][2] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[1][2] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
        </View>

        <View style={[styles.container, {flexDirection: "row"}]}>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(2, 0)}>
            {map[2][0] === -1 && <View style={[styles.button]}></View>}
            {map[2][0] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[2][0] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(2, 1)}>
            {map[2][1] === -1 && <View style={[styles.button]}></View>}
            {map[2][1] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[2][1] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={()=>onPlay(2, 2)}>
            {map[2][2] === -1 && <View style={[styles.button]}></View>}
            {map[2][2] === 0 && <View style={[styles.buttonCircle]}></View>}
            {map[2][2] === 1 && <View style={[styles.buttonCross]}></View>}
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={()=>reset()}>
          <Text>Reset</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 4,
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCross: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 4,
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  },
  buttonCircle: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 4,
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue'
  },
});
