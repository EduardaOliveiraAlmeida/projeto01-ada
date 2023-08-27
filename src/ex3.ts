/* 3.  Escreva uma classe em que cada objeto representa um vôo que acontece em determinada data e em
determinado horário. Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação
das vagas. A classe deve ter os seguintes métodos:
    * construtor: configura os dados do vôo (recebidos como parâmetro): número do vôo, data (para armazenar
      a data utilize um objeto da classe Data, criada na questão anterior);
    * proximoLivre: retorna o número da próxima cadeira livre
    * verifica: verifica se o número da cadeira recebido como parâmetro está ocupada
    * ocupa: ocupa determinada cadeira do vôo, cujo número é recebido como parâmetro, e retorna
      verdadeiro se a cadeira ainda não estiver ocupada (operação foi bem sucedida) e falso
      caso contrário
    * vagas: retorna o número de cadeiras vagas disponíveis (não ocupadas) no vôo
    * getVoo: retorna o número do vôo */


      import Data from "./ex2";

      class Flight {
          
          private flight_date:Data; 
          private flight_number:string;
          seats: any[];
      
          constructor(flight_number:string, flight_date:Data) {
              this.flight_number = flight_number;
              this.flight_date = flight_date;
              // Fazendo um array cheios de true, quando o assento for ocupado ai vira false
              this.seats = new Array(100).fill(true);
          }
      
          // Retorna próximo assento livre 
          proximoLivre(){
              const seat = this.seats;
              for (let i = 0; i < seat.length; i++) {
                  if (seat[i]) {
                      return `O próximo assento livre é o número ${i + 1}`;
                  }
              }
              return 'Não há assentos disponíveis';
          }
          
      
          // Verifica se assento está livre
          verifica(number_seat:number){
              const seat = this.seats;
              const resposta = seat[number_seat-1] ? `O assento ${number_seat} está ocupado.` : `O assento ${number_seat} está livre.`;
              return resposta
          }
      
          // Ocupa próximo assento 
          ocupa(number_seat:number){
              const num_seat = number_seat-1;
              const seat = this.seats;
              if (seat[num_seat]) {
                  // fica false pq está ocupado agora
                  seat[num_seat] = false; 
                  return `O assento ${num_seat+1} foi ocupado com sucesso.`; 
              }  
              return `O assento ${num_seat+1} não pôde ser ocupado.`;
          }
      
          // Retorna assentos livres do voo
          vagas(){
              const seat = this.seats;
              let vagas_disp = 0;
      
              for (let i = 0; i < seat.length; i++) {
                  if (seat[i]) {
                      vagas_disp++;
                  }
              }
          return vagas_disp;
          }    
      
          // Retorna número de voo
          getVoo(){
              return this.flight_number;
          }
      }
      
      //Testes
      
      const data = new Data('07/02/2002');
      
      const flight = new Flight('SNF9256', data);
      
      console.log(flight.getVoo());  
      console.log(flight.proximoLivre()); 
      console.log(flight.vagas());  
      console.log(flight.ocupa(15));  
      console.log(flight.vagas());  
      console.log(flight.verifica(15));  
      
      
      export default Flight;