/* 4. Escreva uma classe herdeira à voo criada na lista de exercícios anterior, que permita definir quantas
cadeiras existem no máximo no voo e se dividir o avião em ala de fumantes e não fumantes. Para isto esta
classe deve acrescentar os atributos necessários e adicionar os seguintes métodos:
    * construtor: além dos parâmetros recebidos pelo construtor da superclasse, receberá também
    como parâmetros o número de vagas do voo e quantas cadeiras serão destinadas para
    fumantes
    * maxVagas: determina o número máximo de cadeiras no voo
    * cadeirasFumantes: determina quantas cadeiras estão destinadas aos fumantes (as demais serão
      automaticamente destinadas aos não fumantes); as cadeiras dos fumantes serão
      sempre as últimas do avião
    * tipo: recebe como parâmetro o número da cadeira e retorna 'F' se for uma cadeira para
      fumantes e 'N' se for para não fumantes
    => Os métodos proximoLivre, verifica e ocupa da superclasse devem ser adaptados para tratar o número
    máximo de vagas informado, ao invés do número fixo de 100.
 */

    import Data from "./ex2";
    import Flight from "./ex3";
    
    // Classe que herda de outra
    class SmokingFlight extends Flight {
        private total_seats:number;
        private smoking_seats:number;
    
        // Constructor que herda o número e a data do voo
        constructor(flight_number:string, flight_date:Data, total_seats:number, smoking_seats:number) {
            super(flight_number, flight_date);
            this.total_seats = total_seats;
            this.smoking_seats = smoking_seats;
        }
    
        // Retorna número de vagas no voo
        maxVagas(){
            return this.total_seats;
        }
    
        // Retorna cadeiras para fumantes
        cadeiras_Fumantes(){
            return this.smoking_seats;
        }
    
        // Diz se cadeira é de fumante ou n 
        tipo(seat:number){
            const smoking_seats = this.smoking_seats;
            // pega totalseats - o number que veio do input e compara se é maior que o numero do assento de fumantes, pois o numero de fumantes é no fim do voo, ou seja, no fim do array.
            const diff_seats = this.total_seats - seat;
            const resposta = diff_seats > smoking_seats ? 'Não fumante' : 'Fumante';
            return resposta;
        }
    
        // Retorna próxima cadeira livre, vem da super classe Flight
        proximoLivre(){
            const seats = this.seats;
            for (let i = 0; i < this.total_seats; i++) {
                // se for true
                if (this.seats[i]) {
                    // retorna indice + 1
                    return `O próximo assento livre é o número ${i+1}.`;
                }
            }
            return 'Não há assentos disponíveis';
        }
    
    
        // Verifica se o assento está livre
        verifica(seat_number:number){
            const seat = this.seats;
            const new_seat_number = seat_number - 1;
            const resposta = new_seat_number ? `O assento ${seat_number} está ocupado.` : `O assento ${seat_number} está livre.`;
            return resposta;
        }
    
        // Ocupa o assento escolhido
        ocupa(seat_number: number) {
            const seat = this.seats;
            const new_seat_number = seat_number - 1;
            if (seat[new_seat_number]) {
                seat[new_seat_number] = false;
                return `O assento ${new_seat_number+1} foi ocupado com sucesso.`;
            }
            return `O assento ${new_seat_number+1} não pôde ser ocupado.`;
        }
    }
    
    //Testes 
    
    const data = new Data('07/02/2002');
    
    const flight = new Flight('SNF9256', data);
    
    const smoking_flight = new SmokingFlight('SNF9256', data, 100, 30);
    
    
    console.log(smoking_flight.ocupa(3));
    console.log(smoking_flight.proximoLivre());
    console.log(smoking_flight.maxVagas());
    console.log(smoking_flight.cadeiras_Fumantes());
    console.log(smoking_flight.verifica(3));
    console.log(smoking_flight.tipo(80));