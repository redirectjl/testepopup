
        /right-top, right-bottom, left-top, left-bottom, center-top, center-bottom, center-center/
        var position = "center-top";

        /verde, azul, vermelho, amarelo/
        var color = "verde";

        /fade, zoom, from-right, from-left, from-top, from-bottom/
        var animation = "from-top";

        /nome do produto/
        var product_name = "";
        
        /frase depois do nome da pessoa/
        var phrase = "acabou de GANHAR com a Falha na Plataforma";
        var timeout = 4000;

        /masc, fem, any/
        var type_name = "masc, fem";
        var msg_final = "";

        var min_time = 4;
        var max_time = 20;

        var nomePessoas = ['Jose', 'Joao', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'Andre', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cicero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido', 'Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Marcela', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];

        var sobrePessoas = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.', 'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.', 'W.', 'X.', 'Y.', 'Z.'];

        var materiais = ['no modo Turbo!','no modo Normal!','com 10x!', 'na primeira jogada!', 'na terceira jogada!'];

        var option = {
                position: position,
                cssAnimationStyle: animation,
                plainText: false,
                timeout: timeout
        };
        
        function show_notification() {
                msg_final = "<strong>" + nomePessoas[Math.floor(Math.random() * nomePessoas.length)] + " " + sobrePessoas[Math.floor(Math.random() * sobrePessoas.length)] + "</strong>";
                msg_final += decodeURIComponent(escape(" " + phrase + " "));
                msg_final += "<strong>" + materiais[Math.floor(Math.random() * materiais.length)] + "</strong>";

                if (color == "verde") {
                        Notiflix.Notify.Success(msg_final, option);
                }

                if (color == "azul") {
                        Notiflix.Notify.Info(msg_final, option);
                }

                if (color == "vermelho") {
                        Notiflix.Notify.Failure(msg_final, option);
                }

                if (color == "amarelo") {
                        Notiflix.Notify.Warning(msg_final, option);
                }

                var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
                setTimeout(show_notification, rand * 1000);
        }
        setTimeout(show_notification, 4 * 1000);