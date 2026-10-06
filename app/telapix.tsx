import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TelaPix() {
  const router = useRouter();

  const { operacao } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Pix</Text>

      <Text style={styles.subtitle}>
        Operação selecionada: {operacao}
      </Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.icon}>📷</Text>

        <View>
          <Text style={styles.optionTitle}>Ler QR Code</Text>
          <Text style={styles.optionText}>
            Escaneie um QR Code Pix
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.icon}>📋</Text>

        <View>
          <Text style={styles.optionTitle}>Pix Copia e Cola</Text>
          <Text style={styles.optionText}>
            Cole um código Pix
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.icon}>💸</Text>

        <View>
          <Text style={styles.optionTitle}>Enviar Pix</Text>
          <Text style={styles.optionText}>
            Envie dinheiro para alguém
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 25,
    paddingTop: 60,
  },

  voltar: {
    fontSize: 17,
    color: '#ff6500',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 17,
    color: '#666',
    marginTop: 8,
    marginBottom: 25,
  },

  option: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 28,
    marginRight: 18,
  },

  optionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  optionText: {
    color: '#777',
    marginTop: 5,
  },
});