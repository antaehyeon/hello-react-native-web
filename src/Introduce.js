import React from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";

const App = () => {
  return (
    <View style={{ height: "100vh", paddingTop: 32, alignItems: "center", backgroundColor: "#ecf0f1" }}>
      <Text style={{ fontWeight: 200, fontSize: 56 }}>HELLO! REACT NATIVE WEB</Text>
      <Text style={{ fontWeight: 100, marginTop: 40, fontSize: 24 }}>
        안녕하세요. 리액트네이티브의 문법으로 웹을 제작할 수 있는
        <Text style={{ fontWeight: 500, color: "#2c3e50" }}>
          React Native for Web <Text style={{ fontWeight: 100, color: "black" }}>을 테스트 해보고 있습니다</Text>
        </Text>
      </Text>
      <Text style={{ fontWeight: 100, fontSize: 24, marginBottom: 24 }}>현재 문서는 아래와 같은 코드로 작성되어 있습니다</Text>
      <View style={{ borderRadius: 1, borderWidth: 1, paddingRight: 32 }}>
        <Text>
          {`
            <View style={{ height: "100vh", paddingTop: 32, alignItems: "center", backgroundColor: "#ecf0f1" }}>
              <Text style={{ fontWeight: "bold", fontSize: 32 }}>HELLO! REACT NATIVE WEB</Text>
              <Text style={{ fontWeight: 100, marginTop: 40, fontSize: 24 }}>
                안녕하세요. 리액트네이티브의 문법으로 웹을 제작할 수 있는{" "}
                <Text style={{ fontWeight: 500, color: "#2c3e50" }}>
                  React Native for Web <Text style={{ fontWeight: 100 }}>을 테스트 해보고 있습니다</Text>
                </Text>
              </Text>
              <Text style={{ fontWeight: 100, fontSize: 24, marginBottom: 24 }}>현재 문서는 아래와 같은 코드로 작성되어 있습니다</Text>
            </View>
          `}
        </Text>
      </View>
    </View>
  );
};

export default App;
