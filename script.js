const container = document.querySelector('.container');

const botaoEnviar = document.createElement('button');
botaoEnviar.classList.add('enviar');
botaoEnviar.textContent = 'ENVIAR';

container.appendChild(botaoEnviar);

botaoEnviar.addEventListener('click', () => {
    alert('Já existe um usuário com essa idade!');
});

