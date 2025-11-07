// document.getElementById() busca um elemento pelo valor do atributo id.
const taskList = document.getElementById("taskList"); // taskList o elemento <ul> onde as tarefas aparecerão.
const taskInput = document.getElementById("taskInput"); // taskInput o campo de texto onde o usuário digita a tarefa.

// A função responsável por adicionar novas tarefas à lista.
function addTask() {
    const taskText = taskInput.value.trim(); // Lê o texto digitado pelo usuário..value obtém o conteúdo do <input> e o .trim() remove espaços extras para evitar tarefas vazias como " ").
}