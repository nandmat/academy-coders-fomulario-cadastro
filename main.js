class Validator {

    constructor() {
        this.validations = [


        ]
    }

    // iniciar a validaçao em todos os campos
    validate(form) {

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        //HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e vaidaçao mediante ao q for ecnontrado
        inputsArray.forEach(function(input) {
            console.log(input);
        });

    }
}

let form = document.getElementById('register');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);

});