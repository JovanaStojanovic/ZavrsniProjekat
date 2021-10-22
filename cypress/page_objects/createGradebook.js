export default class CreateGradebook {

    get h1(){
        return cy.get('h1');
    }

    get gradebookField(){
        return cy.get('input[id="name"]');
    }

    get professorMenu(){
        return cy.get('select');
    }

    get submitButton(){
        return cy.get('button[type="button"]');
    }

    createGradebookWithProfessor(name){
        this.gradebookField.type(name);
        this.professorMenu.select('Chandler Bing');
        this.submitButton.click();   
    }    
}

export const createGradebook = new CreateGradebook();