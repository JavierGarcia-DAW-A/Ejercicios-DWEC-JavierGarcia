export class FormAPI {


   controlForm = null;
   ui = null;


   constructor(ui) {
       this.controlForm = [];
       this.ui = ui;
   }


   addInput(name, type, placeholder, required) {
       let regularExpression = null;
       this.controlForm.push({ name : name, type: type,
           placeholder: placeholder,
           requiree: required,
           regularExpression: regularExpression });
       console.log(this.controlForm);
       this.ui.createElementInput(name, type, placeholder, required);
   }


   buildForm() {
       // this.controlForm.forEach(inputData => {
   }

   clearFormInput(name) {
        this.ui.clearFormInput(name);
   }
}