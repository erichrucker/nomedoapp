import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<any>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarCep() {
    setErro("");
    setEndereco(null);

    if (cep.length !== 8) {
      setErro("Digite um CEP com 8 números.");
      return;
    }

    setCarregando(true);

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado.");
        return;
      }

      setEndereco(dados);
    } catch (erro) {
      setErro("Não foi possível consultar o CEP.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>+ banco</Text>

      <Text style={styles.hello}>Olá, Eric 👋</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Saldo disponível</Text>
        <Text style={styles.balance}>R$ 1.000,00</Text>
      </View>

      <Text style={styles.title}>Acesso rápido</Text>

      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: '/telapix',
              params: { operacao: 'Enviar Pix' }
            })
          }
        >
          <Text style={styles.icon}>💸</Text>
          <Text>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>💳</Text>
          <Text>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.icon}>📈</Text>
          <Text>Investir</Text>
        </TouchableOpacity>

      </View>

 <Text style={styles.title}>📍 Buscar endereço</Text>

    <Text>Digite um CEP para consultar o endereço:</Text>

    <TextInput
      placeholder="Ex: 93510000"
      keyboardType="numeric"
      value={cep}
      onChangeText={setCep}
      maxLength={8}
    />

    <Button
      title={carregando ? "Buscando..." : "Buscar CEP"}
      onPress={buscarCep}
      disabled={carregando}
    />

    {erro !== "" && <Text>❌ {erro}</Text>}

    {endereco && (
      <View>
        <Text>📌 Endereço encontrado</Text>

        <Text>CEP: {endereco.cep}</Text>
        <Text>Rua: {endereco.logradouro}</Text>
        <Text>Bairro: {endereco.bairro}</Text>
        <Text>Cidade: {endereco.localidade}</Text>
        <Text>Estado: {endereco.uf}</Text>
      </View>
    )}
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

  icon: {
    fontSize: 25,
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

  function setEndereco(arg0: null) {
    throw new Error('Function not implemented.');
  }


  function setCarregando(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

