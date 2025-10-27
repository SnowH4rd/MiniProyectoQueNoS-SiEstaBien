import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Task } from "../store/taskSlice";
import ButtonCustom from "./ButtonCustom";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.title}>{task.title}</Text>
        {task.description ? <Text style={styles.desc}>{task.description}</Text> : null}
      </View>

      <View style={styles.row}>
        <Text style={styles.status}>{task.completed ? "✓ Completada" : "⏳ Pendiente"}</Text>
        <Switch value={task.completed} onValueChange={() => onToggle(task.id)} />
      </View>

      <View style={styles.buttons}>
        <ButtonCustom title="Editar" onPress={() => onEdit(task)} style={{ minWidth: 90 }} />
        <ButtonCustom title="Eliminar" type="danger" onPress={() => onDelete(task.id)} style={{ minWidth: 90 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontWeight: "700", fontSize: 16 },
  desc: { marginTop: 4, color: "#444" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 },
  status: { fontSize: 13, color: "#333" },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
});
