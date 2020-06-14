//dependências:
// npm install xmlhttprequest --save

(function () {
    'use strict';

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    const GET_METHOD = "get";
    const POST_METHOD = "post";

    var ajax = new XMLHttpRequest();
    ajax.open(GET_METHOD, 'http://127.0.0.1:3001/getapi/aquioparametro');
    ajax.send();

    /**
     * 0 Criado anstes de chamar o open
     * 1 Método open chamado
     * 2 Método send foi chamado
     * 3 Baixando o response(responseText) contendo os dados parciais
     * 4 Operação concluída
     */
    //quando mudar o status 
    ajax.addEventListener('readystatechange', function (event) {
        if (ajax.readyState === 4) {
            console.log("Status do Ajax: " + ajax.status);
        }
    }, false);

})();