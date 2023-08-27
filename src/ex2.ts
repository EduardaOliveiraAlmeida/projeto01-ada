/* 2. Escreva uma classe Data cuja instância (objeto) represente uma data. Esta classe deverá dispor dos
seguintes métodos:
    * construtor: define a data que determinado objeto (através de parâmetro), este método verifica se a
      data está correta, caso não esteja a data é configurada como 01/01/0001
    * compara: recebe como parâmetro um outro objeto da Classe data, compare com a data corrente e
      retorne:
        * true se as datas forem iguais;
        * false se as datas forem diferentes;
    * getDia: retorna o dia da data
    * getMes: retorna o mês da data
    * getMesExtenso: retorna o mês da data corrente por extenso
    * getAno: retorna o ano da data */


      class Data {
        private data:string
        private dia:string = ''
        private mes:string = ''
        private ano:string = ''
        constructor(data:string){
            this.data = this.validar(data)
        }
        private validar(data:string):string {
            const data_result = data.split('/')
            this.dia = data_result[0]
            this.mes = data_result[1]
            this.ano = data_result[2]
            const dia = Number(data_result[0])
            const mes = Number(data_result[1])
            const ano = Number(data_result[2])
            if((dia <= 0 || dia>31) || (mes <= 0 || mes>12) || (ano <= 1970 || ano>2050)){
                return '01/01/2001'
            }
            return data
        }
        get obterData(){
            return this.data
        }
        get obterDia(){
            return this.dia
        }
        get obterMes(){
            return this.mes
        }
        get obterAno(){
            return this.ano
        }
        compara(data_estrang:Data){
            return this.data === data_estrang.obterData
        }
        getMesEstenso(){
            const mes = this.mes
            switch(mes){
                case '01':
                    return('janeiro')
                case '02':
                    return('fevereiro')
                case '03':
                    return('março')
                case '04':
                    return('abril')
                case '05':
                    return('maio')
                case '06':
                    return('junho')
                case '07':
                    return('julho')
                case '08':
                    return('agosto')
                case '09':
                    return('setembro')
                case '10':
                    return('outubro')
                case '11':
                    return('novembro')
                case '12':
                    return('dezembro')
                default:
                    console.log('Mês inexistente')
                    break
            }
        }
     }
    //Testes
    
    const resultado = new Data('30/12/2023');
    const resultado2 = new Data('31/08/2023');
    
    console.log(resultado.compara(resultado2));
    console.log(resultado.obterData);
    console.log(resultado.obterDia);
    console.log(resultado.obterMes);
    console.log(resultado.obterAno);
    console.log(resultado.getMesEstenso());  
    
    
    export default Data;