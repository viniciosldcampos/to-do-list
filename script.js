// document.getElementById() busca um elemento pelo valor do atributo id.
const taskList = document.getElementById("taskList"); // taskList o elemento <ul> onde as tarefas aparecerão.
const taskInput = document.getElementById("taskInput"); // taskInput o campo de texto onde o usuário digita a tarefa.

// Função responsável por adicionar novas tarefas à lista.
function addTask() {
    const taskText = taskInput.value.trim(); // Lê o texto digitado pelo usuário.,.value obtém o conteúdo do <input>. E .trim() remove espaços extras para evitar tarefas vazias como " ").

    // Verifica se o texto não está vazio. Se estiver vazio, nada acontece (impede que o usuário adicione uma linha em branco).
    if(taskText !== "") {
        const maxText = taskText.substring(0, 35); // Cria limitação de 35 primeiros caracteres da tarefa.
        const li = document.createElement("li"); // Cria dinamicamente um novo elemento de lista (<li>) para inserir dentro do <ul>.
    }
}