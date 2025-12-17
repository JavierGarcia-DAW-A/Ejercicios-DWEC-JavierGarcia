export class UI {

    form = null;

    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    createElementInput(name, type, placeholder, required) {
       const input = document.createElement('input');
       input.name = name;
       input.type = type;
       input.placeholder = placeholder;
       input.required = required;
       this.form.appendChild(input);
   }

    clearFormInput(name) {
       const input = this.form.querySelector(`input[name="${name}"]`);
       if (input) {
           input.value = '';
       }
   }
}