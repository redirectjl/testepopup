const nomes = ['João R',
    'Fernanda A',
    'Amauri O',
    'Carlos M',
    'Maria F',
    'Camila D',
    'Fernanda M',
    'Pedro B',
    'Jorge L',
    'Andressa E',
    'Lucas S',
    'Bruno G',
    'Matheus F',
    'Guilherme S',
    'Vinicius P',
    'Felipe G',
    'Carlos O',
    'Julia B',
    'Gabriel M'
];

function mostrarPopUpAleatorio() {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('nomeAleatorio').innerHTML = `<img src="/images/check-mark-icon.png" alt="check mark icon image" /> <p><strong>${nomeAleatorio}</strong>. acabou de GANHAR com a <strong>Falha na plataforma!</strong></p>`;

    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').style.animation = 'slideDown 0.5s ease forwards';

    const tempoExibicao = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000; // Gera um número entre 15 e 30 segundos

    setTimeout(() => {
        fecharPopUp();
    }, 5000);

    setTimeout(() => {
        fecharPopUp(true);
    }, 5000 + tempoExibicao);
}

function fecharPopUp(aleatorio = false) {
    document.getElementById('popup').style.animation = 'slideUp 0.5s ease forwards';

    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('popup').style.animation = '';

        if (aleatorio) {
            mostrarPopUpAleatorio();
        }
    }, 500);
}

mostrarPopUpAleatorio();