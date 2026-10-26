// 1. Array inicial contendo o "Nome do Aluno"
const nomes = ["Nome do Aluno"];

// Capturando os elementos da página (DOM)
const formulario = document.getElementById('meuFormulario');
const campoNome = document.getElementById('campoNome');
const listaDeNomes = document.getElementById('listaDeNomes');

// 2. Função para atualizar a exibição da lista no HTML
function atualizarLista() {
    // Limpa a lista atual para recriá-la sem duplicar itens antigos
    listaDeNomes.innerHTML = '';

    // Percorre o array 'nomes' e cria um elemento <li> para cada um
    nomes.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaDeNomes.appendChild(li);
    });
}

// 3. Ouvinte de evento para capturar quando o formulário for enviado
formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Pega o valor digitado no input e remove espaços extras
    const novoNome = campoNome.value.trim();

    if (novoNome !== '') {
        // Adiciona o novo nome no array
        nomes.push(novoNome);

        // Atualiza a tela com o array modificado
        atualizarLista();

        // Limpa o campo de input para o próximo nome
        campoNome.value = '';
    }
});

// Executa a função logo na carga inicial para mostrar o "Nome do Aluno"
atualizarLista();