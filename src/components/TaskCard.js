import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Task } from "../store/taskSlice";
import ButtonCustom from "./ButtonCustom";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  editable?: boolean;
}

export default function TaskCard({ task, onToggle, onEdit, onDelete, editable = false }: TaskCardProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <View style={styles.card}>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.title}>{task.title}</Text>
        {task.description ? <Text style={styles.desc}>{task.description}</Text> : null}
      </View>

      <View style={styles.row}>
        <Text style={styles.status}>{task.completed ? "✓ Completada" : "⏳ Pendiente"}</Text>
        <Switch value={task.completed} onValueChange={() => onToggle(task.id)} disabled={!editable} trackColor={{ false: "#ccc", true: "green" }}
  thumbColor={task.completed ? "white" : "white"} />
      </View>

      <View style={styles.buttons}>
        <ButtonCustom title="Editar" onPress={() => onEdit(task)} style={{ minWidth: 90 }} />

        {confirmDelete ? (
          <>
            <ButtonCustom
              title="Sí, borrar"
              type="danger"
              onPress={() => {
                onDelete(task.id);
                setConfirmDelete(false);
              }}
              style={{ minWidth: 80 }}
            />
            <ButtonCustom
              title="Cancelar"
              type="secondary"
              onPress={() => setConfirmDelete(false)}
              style={{ minWidth: 80 }}
            />
          </>
        ) : (
          <ButtonCustom
            title="Eliminar"
            type="danger"
            onPress={() => setConfirmDelete(true)}
            style={{ minWidth: 80 }}
          />
        )}
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
