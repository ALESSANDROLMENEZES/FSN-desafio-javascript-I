// Base a ser utilizada
const alunosDaEscola = [
  { nome: "Henrique", notas: [], cursos: [], faltas: 5 },
  { nome: "Edson", notas: [], cursos: [], faltas: 2 },
  { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
  {
    nome: "Guilherme", notas: [10, 9.8, 9.6],
    cursos: [
      { nomeDoCurso: "Full Stack", dataMatricula: new Date() }], faltas: 0
  },
  { nome: "Carlos", notas: [], cursos: [], faltas: 0 },
  {
    nome: "Lucca", notas: [10, 9.8, 9.6],
    cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date() }], faltas: 4
  }];


// implementação
//----------------------------------------------------------------------------------------------
const adicionarAluno = (nomeAluno) => {

  /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
  E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
  A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

  alunosDaEscola.push({
    nome: nomeAluno,
    notas: [],
    cursos: [],
    faltas: 0
  });

  return `${nome} adicionado com sucesso!`;

};


//----------------------------------------------------------------------------------------------
//Função que formata o tipo de resposta do aluno em um formato de fácil entendimento para o usuário
const formatarTemplateAluno = (alunos) => {
  let template = '';
  let cursos_ = [];

  for (let aluno of [...alunos]) {
    if (aluno.cursos[0]) {
      cursos_ = [];
      for (let curso of aluno.cursos) {
        cursos_.push(`${curso.nomeDoCurso} | Matriculado em: ${curso.dataMatricula.getDate()}/${curso.dataMatricula.getMonth() + 1}/${curso.dataMatricula.getFullYear()} |`);
      }
    }

    template += `
    Nome: ${aluno.nome}
    Notas: ${aluno.notas.toString()}
    Curso: ${cursos_.toString()}
    Faltas: ${aluno.faltas}
    --------------------
    `;
  }
  return template;
};




//----------------------------------------------------------------------------------------------
const listarAlunos = alunos => {
  /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

  return formatarTemplateAluno(alunos);

};


//----------------------------------------------------------------------------------------------
const buscarAluno = (nomeAluno) => {
  /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
  let alunoEncontrado = encontrarAluno(nomeAluno);
  if (alunoEncontrado == undefined) {
    return `Não foi encontrado nenhum aluno com o nome de ${nomeAluno}`;
  } else {
    return formatarTemplateAluno([alunoEncontrado]);
  }
};

//----------------------------------------------------------------------------------------------
const encontrarAluno = (nomeAluno) => {
  return alunosDaEscola.find(aluno => aluno.nome == nomeAluno);
};


//----------------------------------------------------------------------------------------------
const matricularAluno = (nomeAluno, nomeDoCurso) => {
  /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
  Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
  Lembre-se de exibir o feedback para o usuário. */
  let alunoEncontrado = encontrarAluno(nomeAluno);
  let cursoMatricular = {
    nomeDoCurso,
    dataMatricula: new Date()
  };

  if (alunoEncontrado != '' && alunoEncontrado != undefined && alunoEncontrado != null) {
    alunoEncontrado.cursos.push(cursoMatricular);
    return `${nomeAluno} matriculado no curso ${nomeDoCurso} com sucesso`;
  } else {
    return `Não foi encontrado nenhum aluno chamado ${nomeAluno}`;
  }
};



//----------------------------------------------------------------------------------------------
const aplicarFalta = (nomeAluno) => {
  /*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
  */
  let alunoEncontrado = encontrarAluno(nomeAluno);
  if (alunoEncontrado != '' && alunoEncontrado != undefined && alunoEncontrado != null) {
    alunoEncontrado.faltas++;
    return `Falta lançada para o aluno ${nomeAluno}, faltas totais: ${alunoEncontrado.faltas}`;
  } else {
    return `Não foi encontrado nenhum aluno chamado ${nomeAluno}`;
  }
};


//----------------------------------------------------------------------------------------------
const aplicarNota = (nomeAluno, nota) => {
  /*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
  */
  let alunoEncontrado = encontrarAluno(nomeAluno);
  if (alunoEncontrado != '' && alunoEncontrado != undefined && alunoEncontrado != null) {
    if (isNaN(nota) || nota < 0 || nota > 10 || nota == '') {
      return `Informe uma nota em formato numérico de 0 a 10`;
    } else {
      alunoEncontrado.notas.push(parseFloat(nota));
      return `Nota lançada para o aluno ${nomeAluno}, notas: ${alunoEncontrado.notas.toString()}`;
    }
  } else {
    return `Não foi encontrado nenhum aluno chamado ${nomeAluno}`;
  }
};



//----------------------------------------------------------------------------------------------
const aprovarAluno = (nomeAluno) => {
  /* 
  Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
  Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
  Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
  */
  let alunoEncontrado = encontrarAluno(nomeAluno);
  if (alunoEncontrado != '' && alunoEncontrado != undefined && alunoEncontrado != null) {
    if (alunoEncontrado.cursos[0]) {
      if (alunoEncontrado.faltas > 3) {
        return `${nomeAluno} está REPROVADO por ter ${alunoEncontrado.faltas} faltas`;
      } else {
        let total = alunoEncontrado.notas.reduce((total, valor) => {
          return total + valor;
        });
        let media = total / alunoEncontrado.notas.length;
        return (media >= 7) ? `${nomeAluno} APROVADO com média ${media.toFixed(1)}` : `${nomeAluno} REPROVADO com média ${media.toFixed(1)}`;
      }
    } else {
      return `O aluno ${nomeAluno} não está matriculado em nenhum curso`;
    }
  } else {
    return `Não foi encontrado nenhum aluno chamado ${nomeAluno}`;
  }
};


console.log(aprovarAluno('Lucca'));