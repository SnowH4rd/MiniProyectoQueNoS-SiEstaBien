import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  type?: "primary" | "danger";
  style?: object;
}

export default function ButtonCustom({ title, onPress, type = "primary", style = {} }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, type === "danger" && styles.danger, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#3498db",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  danger: {
    backgroundColor: "#e74c3c",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
