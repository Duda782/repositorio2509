const participantes = [];
document.getElementById('registroform').addEventListener('submit', function (event){
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    if(nome && cpf){
        participantes.push({nome,cpf});
        document.getElementById('nome').value ='';
        document.getElementById('cpf').value ='';
        alert('Participantes registrados com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos')
    }
});
document.getElementById('mostrarlista').addEventListener('click', function(){
    const lista= document.getElementById('listaparticipantes');
    lista.innerHTML = '';
    participantes.forEach(participante =>{
        const li = document.createElement('li');
        li.textContent = 'nome:${participantes.nome},CPF:${particpantes.cpf}';
        lista.append
    })
})