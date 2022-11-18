const btnGerar = document.getElementById('btnGerar')

btnGerar.addEventListener('click', () => {
    let evento = document.querySelector('input[name="evento"]:checked').value
    let curso = document.querySelector('input[name="curso"]:checked').value
    let nomeAluno = document.getElementById('txtNomeAluno').value
    let nomeOrientador = document.getElementById('txtNomeOrientador').value
    let nomePrograma = document.getElementById('txtNomePrograma').value
    let tipoParticipante = document.querySelector('input[name="participante"]:checked').value
    let data = document.getElementById('dataEvento').value
    let horario = document.getElementById('horaEvento').value
    let modo = document.querySelector('input[name="modo"]:checked').value
    let sala = document.getElementById('txtLocal').value
    let listaItens = {}
    let normas = document.getElementById('txtNormas').value

    let txtResultado = document.getElementById('resultado')

    txtResultado.innerHTML = 
    `
        Prezado(a) Dr(a).,
        <br><br>
        Seu nome foi indicado como membro <strong>${tipoParticipante}</strong> da comissão examinadora <strong>${evento}</strong> (<strong>${curso}</strong>) do(a) aluno(a) <strong>${nomeAluno}</strong> (Orientador(a): Dr(a).<strong>${nomeOrientador}</strong>), do <strong>${nomePrograma}</strong>.
        <br><br>
        O evento ocorrerá no dia <strong>${data}</strong> às <strong>${horario}</strong>, de modo <strong>${modo}</strong>.
        <br>
        Sala: <strong>${sala}</strong>
        <br><br>
        Encaminho em anexo os seguintes documentos:
        <br>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <br><br>
        Normas <strong>${evento}</strong>: <a href="${normas}" target="_blank">Clique aqui</a>
    `
})