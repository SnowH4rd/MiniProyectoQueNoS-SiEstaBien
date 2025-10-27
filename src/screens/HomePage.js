import React from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteTask } from "../store/taskSlice";
import TaskCard from "../components/TaskCard";
import { useTask } from "../hooks/useTask";
import Header from "../components/Header";
import ButtonCustom from "../components/ButtonCustom";

export default function HomePage({ navigation }) {
  
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const { toggle } = useTask();

  const handleEdit = task => navigation.navigate("Formulario", { task });

  const handleDelete = (id: string) => {
    console.log("PROBANDO ELIMINAR id=", id);
    dispatch(deleteTask(id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Lista de Tareas 📝" />
      <View style={{ flex: 1, padding: 16 }}>
        <ButtonCustom title="Agregar Tarea" onPress={() => navigation.navigate("Formulario")} />
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggle={toggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
              editable={false}
            />
          )}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={true}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
}
