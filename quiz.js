
    private String email;
    private String senha;

    public String getEmail() { return email; }
    public String getSenha() { return senha; }
}
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', { email, senha });
            alert(response.data);
            if (response.data === "Login realizado com sucesso!") {
                navigation.navigate('Home');
            }
        } catch (error) {
            alert('Erro ao conectar!');
        }
    };

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Senha" secureTextEntry={true} onChangeText={setSenha} />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bem-vindo ao PensaAI!</Text>
            <Button title="Iniciar Quiz" onPress={() => navigation.navigate('Quiz')} />
        </View>
    );
};
const perguntas = [
    { pergunta: "Qual o menor país do mundo?", respostas: ["Vaticano", "Brasil", "Rússia", "Itália"], correta: "Vaticano" },
    { pergunta: "Qual o maior país do mundo?", respostas: ["EUA", "China", "Rússia", "Índia"], correta: "Rússia" }
];

const QuizScreen = () => {
    const [index, setIndex] = useState(0);
    
    return (
        <View>
            <Text>{perguntas[index].pergunta}</Text>
            {perguntas[index].respostas.map((resposta, i) => (
                <Button key={i} title={resposta} onPress={() => setIndex(index + 1)} />
            ))}
        </View>
    );
};
