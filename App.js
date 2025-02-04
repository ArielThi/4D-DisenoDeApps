import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


export default function App() {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    email: "",
    telefono: "",
  })


  const [mostrarDatos, setMostrarDatos] = useState(false)


  const handleSubmit = () => {
    setMostrarDatos(true)
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./img/nfl.png")} style={styles.logo} />
        <Text style={styles.headerText}>NFL GamePass</Text>
      </View>


      <View style={styles.form}>
        <Text style={styles.label}>ID:</Text>
        <TextInput
          style={styles.input}
          value={formData.id}
          onChangeText={(text) => setFormData({ ...formData, id: text })}
          keyboardType="numeric"
        />


        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={formData.nombre}
          onChangeText={(text) => setFormData({ ...formData, nombre: text })}
        />


        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
        />


        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={formData.telefono}
          onChangeText={(text) => setFormData({ ...formData, telefono: text })}
          keyboardType="phone-pad"
        />


        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>


      {mostrarDatos && (
        <View style={styles.resultados}>
          <Text>ID: {formData.id}</Text>
          <Text>Nombre: {formData.nombre}</Text>
          <Text>Email: {formData.email}</Text>
          <Text>Teléfono: {formData.telefono}</Text>
        </View>
      )}


      <View style={styles.footer}>
        <Text style={styles.footerText}>©2025 NFL GamePass, Ariel Torres Iñiguez</Text>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  resultados: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    margin: 20,
  },
  footer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  footerText: {
    fontSize: 14,
  },
})