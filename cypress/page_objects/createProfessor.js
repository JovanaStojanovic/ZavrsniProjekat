export default class CreateProfessor {
    get h1(){
        return cy.get('h1');
    }

    get gradebookMenu(){
        return cy.get('select[required="required"]');
    }

    get addImageField(){
        return cy.get('input[type="text"]').eq(2);
    }

    getInputField(name){
        return cy.get(`input[id=${name}]`);
    }

    getButton(name){
        return cy.get('button').contains(name);
    }

    createProfessorWithGradebook(name, lastName, url){
        this.getInputField('input-default').type(name);
        this.getInputField('input-default1').type(lastName);
        this.gradebookMenu.select(1);
        this.getButton('Add Image').click();
        this.addImageField.type(url);
        this.getButton('Submit').click();
    }

    createProfessorNoGradebook(name, lastName, url){
        this.getInputField('input-default').type(name);
        this.getInputField('input-default1').type(lastName);
        this.getButton('Add Image').click();
        this.addImageField.type(url);
        this.getButton('Submit').click();
    }
}

export const createProfessor = new CreateProfessor();