import React from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <View style={{
      paddingVertical: 5,
      backgroundColor: "#0077FF",
      marginBottom: 16
    }}>
      <Text style={{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
      }}>
        {title}
      </Text>
    </View>
  );
}
