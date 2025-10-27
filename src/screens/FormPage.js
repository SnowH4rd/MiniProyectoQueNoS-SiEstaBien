import React, { useEffect } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../store/taskSlice";
import uuid from "react-native-uuid";
import ButtonCustom from "../components/ButtonCustom";

export default function FormPage({ route, navigation }) {
  const taskToEdit = route.params?.task;
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", description: "", completed: false },
  });

  useEffect(() => {
    if (taskToEdit) {
      setValue("title", taskToEdit.title);
      setValue("description", taskToEdit.description || "");
      setValue("completed", taskToEdit.completed);
    }
  }, [taskToEdit]);

  const onSubmit = (data) => {
    if (taskToEdit) dispatch(updateTask({ ...taskToEdit, ...data }));
    else dispatch(addTask({ id: uuid.v4().toString(), ...data }));

    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Título</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: "El título es obligatorio" }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={{ borderWidth: 1, padding: 8, marginBottom: 4 }}
              value={value}
              onChangeText={onChange}
            />
            {errors.title && (
              <Text style={{ color: "red", marginBottom: 10 }}>
                {errors.title.message}
              </Text>
            )}
          </>
        )}
      />

      <Text>Descripción</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="completed"
        render={({ field: { onChange, value } }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <Text>Completada: </Text>
            <Switch value={value} onValueChange={onChange} />
          </View>
        )}
      />

      <ButtonCustom title={taskToEdit ? "Actualizar" : "Agregar"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
