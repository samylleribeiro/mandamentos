function verTodos() {
    let resultado = document.getElementById('resultado');
    const mandamentos = [
        "1. Amar a Deus sobre todas as coisas.",
        "2. Não tomar o nome de Deus em vão.",
        "3. Guardar os domingos e festas de guarda.",
        "4. Honrar pai e mãe.",
        "5. Não matar.",
        "6. Não cometer adultério.",
        "7. Não roubar/furtar.",
        "8. Não dar falso testemunho.",
        "9. Não desejar a mulher do próximo.",
        "10. Não cobiçar as coisas alheias."
    ];
    resultado.innerText = mandamentos.join("\n");
    resultado.style.color = "#E91E63";
}
function gerarMandamentos() { 
    // 2. Definimos o elemento onde o resultado vai aparecer
    let resultado = document.getElementById('resultado');

    // 3. Array (Lista) de Mandamentos
    const mandamentos = [
        "1. Amar a Deus sobre todas as coisas.",
        "2. Não tomar o nome de Deus em vão.",
        "3. Guardar os domingos e festas de guarda.",
        "4. Honrar pai e mãe.",
        "5. Não matar.",
        "6. Não cometer adultério.",
        "7. Não roubar/furtar.",
        "8. Não dar falso testemunho.",
        "9. Não desejar a mulher do próximo.",
        "10. Não cobiçar as coisas alheias."

    ];
    // 4. Lógica para Sortear um Mandamento Aleatório
    // Math.random() cria um nº quebrado (ex: 0.5)
    // mandamentos.length dá o total de mandamentos na lista
    // Math.floor() arredonda para baixo (ex: 0.5 vira 0)
    let indiceAleatorio = Math.floor(Math.random() * mandamentos.length);

    // 5. mandamento correspondente ao número sorteado
    let mandamentoEscolhido = mandamentos[indiceAleatorio];
    // 6. Mostrar o mandamento na tela
    resultado.innerText = mandamentoEscolhido;
    resultado.style.color = "#E91E63";
}
function voltar() {
    let resultado = document.getElementById('resultado');
    resultado.innerText = "";
}
function toggleDarkMode() {
    // 1. Liga/Desliga a classe "dark-mode" no corpo da página
    document.body.classList.toggle("dark-mode");

    // 2. Troca o emoji do botão
    const btn = document.getElementById("btn-noturno");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }
}