import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

export default function SearchBar({ setCities }) {
  const [input, setInput] = useState("");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#eee",
          width: "100%",
          marginRight: 10,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 25,
          flexDirection: "row",
        }}
      >
        <TextInput
          name="Keyword"
          placeholder="Search"
          onChangeText={(e) => setInput(e)}
          onSubmitEditing={() => setCities(input)}
        />

        <Image
          // onPress={()=>console.log(input)}
          source={require("../../assets/icons/search.png")}
          style={{
            justifyContent: "center",
            marginLeft: "auto",
            height: 20,
            width: 20,
            marginRight: 7,
            alignItems: "center",
            marginTop: 3,
          }}
        />
      </View>
    </View>
  );
}
