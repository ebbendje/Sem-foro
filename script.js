const botao = document.getElementById('btnEnviar');
const semaforo = document.getElementById('semaforo');

botao.addEventListener('click', () => {
    semaforo.classList.add('mostrar'); // mostra as bolinhas animadas
    
    // Simula processamento
    setTimeout(() => {
        semaforo.classList.remove('mostrar'); // esconde depois de processar
        alert("Processo finalizado!");
    }, 3000);
});
