import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Header({ settab }) {
  const [activeTab, setActivetab] = useState("Delivery");

  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 23 }}
    >
      <HeaderButton
        text="Delivery"
        btncolr="black"
        textcolor="white"
        activeTab={activeTab}
        setActivetab={setActivetab}
      />
      <HeaderButton
        text="Pickup"
        btncolr="white"
        textcolor="black"
        activeTab={activeTab}
        setActivetab={setActivetab}
      />
      <TouchableOpacity
        style={{ marginLeft: "auto", marginRight: 10 }}
        onPress={() => settab()}
      >
        <Image
          source={require("../../assets/icons/menu.png")}
          style={{
            height: 25,
            width: 25,
            justifyContent: "flex-end",
            alignItems: "center",
            right: 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab == props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActivetab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab == props.text ? "white" : "black",
          fontSize: 15,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
