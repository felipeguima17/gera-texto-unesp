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
    
    let checkDocs = document.querySelectorAll('input[name="checkDocs"]:checked')
    let itens = []
    let cont = 0
    checkDocs.forEach((doc) => {
        itens.push(doc.value)
        cont++
    })

    let normas = document.getElementById('txtNormas').value
    
    let txtResultado = document.getElementById('resultado')

    let flag = ''
    for (let i = 0; i < cont; i++) {
        flag += `<li>${itens[i]}</li>`
    }

    if (tipoParticipante != 'Orientador') {
        txtResultado.innerHTML = 
    `
        Prezado(a) Dr(a).,
        <br><br>
        Seu nome foi indicado como membro <strong>${tipoParticipante}</strong> da comissão examinadora <strong>${evento}</strong> (<strong>${curso}</strong>) do(a) aluno(a) <strong>${nomeAluno}</strong> (Orientador(a): Dr(a).<strong>${nomeOrientador}</strong>), do <strong>${nomePrograma}</strong>.
        <br><br><br>
        O evento ocorrerá no dia <strong>${data}</strong> às <strong>${horario}</strong>, de modo <strong>${modo}</strong>.
        <br>
        Sala: <a href="${sala}" target="_blank"><strong>${sala}</strong></a>
        <br><br><br>
        Encaminho em anexo os seguintes documentos:
        <br>
        <ul>
            ${flag}
        </ul>
        <br><br>
        Normas <strong>${evento}</strong>: <a href="${normas}" target="_blank">Clique aqui</a>
        <br><br><br>
        Coloco-me à disposição para sanar quaisquer dúvidas.
        <br><br><br>
        Atenciosamente,
    `
    }
    else {
        txtResultado.innerHTML = 
    `
        Prezado(a) Dr(a). <strong>${nomeOrientador}</strong>,
        <br><br>
        Encaminho o material de defesa do(a) aluno(a) <strong>${nomeAluno}</strong>.
        <br><br><br>
        O evento ocorrerá no dia <strong>${data}</strong> às <strong>${horario}</strong>, de modo <strong>${modo}</strong>.
        <br><br>
        Sala: <a href="${sala}" target="_blank"><strong>${sala}</strong></a>
        <br><br><br>
        Encaminho em anexo os seguintes documentos:
        <br>
        <ul>
            ${flag}
        </ul>
        <br><br>
        * Após o evento, encaminhar a ata assinada de próprio punho para a STPG. A assinatura necessita ser original.
        <br>
        ** Após o evento, encaminhar o certificado de aprovação e os pareceres para a STPG (impressos ou via e-mail)

        <br><br><br>
        Normas <strong>${evento}</strong>: <a href="${normas}" target="_blank">Clique aqui</a>
        <br><br><br>
        Coloco-me à disposição para sanar quaisquer dúvidas.
        <br><br><br>
        Atenciosamente,
    `
    }
    
})