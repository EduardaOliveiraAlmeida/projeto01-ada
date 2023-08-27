/*
1. Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
trabalho. Escreva os seguintes métodos para esta classe:
    * media: calcula a média final do aluno cada prova tem peso 2,5 e o trabalho tem peso 2
    * final: calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)
 */

class Alunos {
    matricula:number
    nome:string
    nota_prova1:number
    nota_prova2:number
    nota_trabalho: number

    constructor(matricula:number, nome:string, nota_prova1:number, nota_prova2:number, nota_trabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.nota_prova1 = nota_prova1
        this.nota_prova2 = nota_prova2
        this.nota_trabalho = nota_trabalho
    }

    media(){
        const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
        console.log(`${this.nome} sua média é ${media}`)
    }

    final(){
        const nota_para_passar = 7
        const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
        if(media > 3 && media < nota_para_passar){
            const falta_para_passar = (nota_para_passar - media) + nota_para_passar
            console.log(`${this.nome} você precisa tirar ${falta_para_passar} para passar na final ` )
        }else if (media >= 7){
            console.log(0)
        }else{
            console.log('Reprovado(a)')
        }
    }
}  

// Teste 

const aluno_matriculado = new Alunos (2420, 'Ana', 7, 7, 7)

aluno_matriculado.media()
aluno_matriculado.final()