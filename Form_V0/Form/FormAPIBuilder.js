import { UI } from './UI.js'
import { FormAPI } from './FormAPI.js'

export class formAPIBuilder {

    static getInput(formId, ui = null) {
        if ( ui === null) {
            ui = new UI(formId);
        }

        const formAPI = new FormAPI(ui);

        return formAPI;
    }
}