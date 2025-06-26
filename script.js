document.getElementById('form-treino').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const objetivo = document.getElementById('objetivo').value;
    const nivel = document.getElementById('nivel').value;
    
    const treino = gerarTreino(objetivo, nivel);
    exibirTreino(nome, objetivo, treino);
});

function gerarTreino(objetivo, nivel) {
    const treino = {
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: []
    };
    
    // Exercícios baseados no objetivo e nível
    const exercicios = {
        musculacao: {
            iniciante: {
                superiores: ["Supino reto (3x10)", "Remada sentada (3x10)", "Desenvolvimento com halteres (3x10)", "Rosca direta (3x12)", "Tríceps testa (3x12)"],
                inferiores: ["Agachamento livre (3x10)", "Leg press (3x12)", "Cadeira extensora (3x12)", "Mesa flexora (3x12)", "Panturrilha sentado (3x15)"],
                cardio: ["Esteira (20min moderado)", "Bicicleta (20min moderado)"]
            },
            intermediario: {
                superiores: ["Supino inclinado (4x8)", "Barra fixa (3xmax)", "Desenvolvimento militar (4x8)", "Rosca martelo (3x10)", "Tríceps corda (3x10)"],
                inferiores: ["Agachamento frontal (4x8)", "Stiff (3x10)", "Afundo (3x10 cada perna)", "Cadeira adutora (3x12)", "Panturrilha em pé (4x15)"],
                cardio: ["Esteira (15min HIIT)", "Escada (15min)"]
            },
            avancado: {
                superiores: ["Supino declinado (4x6)", "Remada curvada (4x6)", "Elevação lateral (4x10)", "Rosca scott (4x8)", "Tríceps francês (4x8)"],
                inferiores: ["Agachamento hack (4x6)", "Agachamento sumô (4x8)", "Cadeira flexora unilateral (3x10)", "Panturrilha no leg (5x15)"],
                cardio: ["Esteira (20min HIIT)", "Bicicleta (20min intervalado)"]
            }
        },
        emagrecimento: {
            iniciante: {
                fullbody: ["Agachamento (3x12)", "Flexão de braço (3x10)", "Remada alta (3x12)", "Abdominal crunch (3x15)", "Prancha (3x30s)"],
                cardio: ["Esteira (30min moderado)", "Bicicleta (30min moderado)", "Corda (10min intervalado)"]
            },
            intermediario: {
                fullbody: ["Burpee (3x10)", "Agachamento com salto (3x12)", "Flexão diamante (3x10)", "Abdominal infra (3x15)", "Prancha lateral (3x20s cada lado)"],
                cardio: ["Esteira (20min HIIT)", "Escada (20min)", "Corda (15min intervalado)"]
            },
            avancado: {
                fullbody: ["Burpee com salto (4x12)", "Agachamento pistol (3x8 cada perna)", "Flexão com elevação (3x12)", "Abdominal canivete (3x15)", "Prancha com elevação (3x30s)"],
                cardio: ["Esteira (30min HIIT)", "Bicicleta (30min intervalado)", "Corda (20min intervalado)"]
            }
        },
        "ganho-massa": {
            iniciante: {
                peito: ["Supino reto (4x10)", "Supino inclinado (3x10)", "Crucifixo (3x12)", "Flexão de braço (3xmax)"],
                costas: ["Barra fixa (3xmax)", "Remada curvada (4x10)", "Puxada frontal (3x12)", "Encolhimento com halteres (3x12)"],
                pernas: ["Agachamento livre (4x10)", "Leg press (3x12)", "Cadeira extensora (3x12)", "Panturrilha em pé (4x15)"],
                ombros: ["Desenvolvimento (4x10)", "Elevação lateral (3x12)", "Remada alta (3x12)"],
                bracos: ["Rosca direta (4x10)", "Tríceps testa (3x10)", "Rosca martelo (3x12)", "Tríceps corda (3x12)"]
            },
            intermediario: {
                peito: ["Supino reto (4x8)", "Supino declinado (3x8)", "Crucifixo inclinado (3x10)", "Paralelas (3xmax)"],
                costas: ["Barra fixa (4xmax)", "Remada unilateral (3x10 cada lado)", "Puxada com triângulo (3x10)", "Hiperextensão (3x12)"],
                pernas: ["Agachamento livre (5x8)", "Stiff (4x8)", "Leg press 45° (3x10)", "Panturrilha no leg (5x15)"],
                ombros: ["Desenvolvimento militar (4x8)", "Elevação frontal (3x10)", "Remada alta (4x10)"],
                bracos: ["Rosca scott (4x8)", "Tríceps francês (3x8)", "Rosca concentrada (3x10)", "Tríceps mergulho (3xmax)"]
            },
            avancado: {
                peito: ["Supino reto (5x6)", "Supino inclinado (4x6)", "Crucifixo voador (3x10)", "Paralelas com peso (3x8)"],
                costas: ["Barra fixa com peso (4x6)", "Remada T (3x8)", "Puxada atrás (3x8)", "Hiperextensão com peso (3x10)"],
                pernas: ["Agachamento livre (5x6)", "Agachamento hack (4x6)", "Stiff romeno (3x8)", "Panturrilha no smith (5x12)"],
                ombros: ["Desenvolvimento militar (5x6)", "Elevação lateral inclinada (4x8)", "Face pull (3x10)"],
                bracos: ["Rosca direta (5x6)", "Tríceps testa (4x6)", "Rosca 21 (3x21)", "Tríceps corda (4x8)"]
            }
        }
    };
    
    // Montar treino baseado no objetivo
    if (objetivo === 'musculacao') {
        treino.segunda = exercicios.musculacao[nivel].superiores;
        treino.terca = exercicios.musculacao[nivel].inferiores;
        treino.quarta = exercicios.musculacao[nivel].cardio;
        treino.quinta = exercicios.musculacao[nivel].superiores;
        treino.sexta = exercicios.musculacao[nivel].inferiores;
    } 
    else if (objetivo === 'emagrecimento') {
        treino.segunda = exercicios.emagrecimento[nivel].fullbody;
        treino.terca = exercicios.emagrecimento[nivel].cardio;
        treino.quarta = exercicios.emagrecimento[nivel].fullbody;
        treino.quinta = exercicios.emagrecimento[nivel].cardio;
        treino.sexta = exercicios.emagrecimento[nivel].fullbody;
    } 
    else if (objetivo === 'ganho-massa') {
        treino.segunda = exercicios["ganho-massa"][nivel].peito.concat(exercicios["ganho-massa"][nivel].triceps);
        treino.terca = exercicios["ganho-massa"][nivel].costas.concat(exercicios["ganho-massa"][nivel].biceps);
        treino.quarta = exercicios["ganho-massa"][nivel].pernas;
        treino.quinta = exercicios["ganho-massa"][nivel].ombros.concat(exercicios["ganho-massa"][nivel].trapezio);
        treino.sexta = exercicios["ganho-massa"][nivel].pernas;
    }
    
    return treino;
}

function exibirTreino(nome, objetivo, treino) {
    const saudacao = document.getElementById('saudacao');
    const diasTreino = document.getElementById('dias-treino');
    
    // Saudação personalizada
    let objetivoTexto = '';
    if (objetivo === 'musculacao') objetivoTexto = 'Musculação';
    else if (objetivo === 'emagrecimento') objetivoTexto = 'Emagrecimento';
    else if (objetivo === 'ganho-massa') objetivoTexto = 'Ganho de Massa Muscular';
    
    saudacao.innerHTML = `Olá <strong>${nome}</strong>! Aqui está seu treino para <strong>${objetivoTexto}</strong>:`;
    
    // Gerar treino para cada dia
    diasTreino.innerHTML = '';
    
    for (const dia in treino) {
        if (treino[dia].length === 0) continue;
        
        const diaDiv = document.createElement('div');
        diaDiv.className = 'dia-treino';
        
        let diaNome = '';
        switch(dia) {
            case 'segunda': diaNome = 'Segunda-feira'; break;
            case 'terca': diaNome = 'Terça-feira'; break;
            case 'quarta': diaNome = 'Quarta-feira'; break;
            case 'quinta': diaNome = 'Quinta-feira'; break;
            case 'sexta': diaNome = 'Sexta-feira'; break;
        }
        
        diaDiv.innerHTML = `<h3>${diaNome}</h3>`;
        
        treino[dia].forEach(exercicio => {
            const exercicioDiv = document.createElement('div');
            exercicioDiv.className = 'exercicio';
            exercicioDiv.innerHTML = `<p>${exercicio}</p>`;
            diaDiv.appendChild(exercicioDiv);
        });
        
        diasTreino.appendChild(diaDiv);
    }
    
    // Mostrar resultado
    document.getElementById('resultado').classList.remove('hidden');
}
