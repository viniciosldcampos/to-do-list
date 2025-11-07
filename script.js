// document.getElementById() busca um elemento pelo valor do atributo id.
const taskList = document.getElementById("taskList"); // taskList o elemento <ul> onde as tarefas aparecerão.
const taskInput = document.getElementById("taskInput"); // taskInput o campo de texto onde o usuário digita a tarefa.

// Função responsável por adicionar novas tarefas à lista.
function addTask() {
    const taskText = taskInput.value.trim(); // Lê o texto digitado pelo usuário,.value obtém o conteúdo do <input> e .trim() remove espaços extras para evitar tarefas vazias como " ").

    // Verifica se o texto não está vazio. Se estiver vazio, nada acontece (impede que o usuário adicione uma linha em branco).
    if(taskText !== "") {
        const maxText = taskText.substring(0, 35); // Cria limitação de 35 primeiros caracteres da tarefa.
        const li = document.createElement("li"); // Cria dinamicamente um novo elemento de lista (<li>) para inserir dentro do <ul>.

        // Define o conteúdo interno do <li> com HTML: <span> mostra o texto da tarefa. Cria dois botões: Editar Task e Remover Task passando o próprio botão (this) que representa o elemento atual que acionou o evento (nesse caso, o botão clicado).
        li.innerHTML = `
            <span>${maxText}</span>
            <button class="editButton" onclick="editTask(this)">Editar Task</button>
            <button class="removeButton" onclick="removeTask(this)">Remover Task</button>
        `;
        taskList.appendChild(li); // Insere o novo <li> no final da lista (<ul>).
        taskInput.value = ""; // Limpa o campo de texto após adicionar a tarefa, deixando pronto para a próxima entrada.    
    }
}

// Define uma função que permite editar o texto de uma tarefa.
function editTask(button) {
    const li = button.parentElement; // Recebe como parâmetro button, que é o botão clicado. Acessa o elemento pai do botão — o <li> que contém a tarefa completa.

    const span = li.querySelector("span"); // Dentro do <li>, procura o elemento <span> (onde está o texto da tarefa).

    const newText = prompt("Editar tarefa:", span.textContent); // Abre uma caixa de diálogo (prompt) com o texto atual da tarefa. O usuário pode editar esse texto diretamente.

    // O valor digitado é armazenado em newText.
    if(newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
    // Verifica se o usuário não cancelou (null) e se o texto não está vazio. Se for válido, atualiza o conteúdo do <span> com o novo texto.
}

// Define a função para remover uma tarefa da lista.
function removeTask(button) {
    const li = button.parentElement; // Acessa o <li> que contém o botão clicado.

    taskList.removeChild(li); // Remove aquele <li> da <ul> (ou seja, elimina a tarefa da lista).
}