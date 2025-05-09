
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
