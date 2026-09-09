import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>+ banco</Text>

      <Text style={styles.hello}>Olá, Eric 👋</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Saldo disponível</Text>
        <Text style={styles.balance}>R$ 1.000,00. </Text>
      </View>

      <Text style={styles.title}>Acesso rápido</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text>💸</Text>
          <Text>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>💳</Text>
          <Text>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>📈</Text>
          <Text>Investir</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Últimas movimentações</Text>

      <View style={styles.transaction}>
        <Text>🛒 Mercado</Text>
        <Text>- R$ 84,90</Text>
      </View>

      <View style={styles.transaction}>
        <Text>💰 Pix recebido</Text>
        <Text style={styles.green}>+ R$ 500,00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6500',
  },

  hello: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },

  card: {
    backgroundColor: '#ff6500',
    padding: 25,
    borderRadius: 20,
    marginTop: 20,
  },

  label: {
    color: 'white',
  },

  balance: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '30%',
    gap: 8,
  },

  transaction: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  green: {
    color: 'green',
  },
});