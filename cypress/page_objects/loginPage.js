export default class LoginPage {
    get h1(){
        return cy.get('h1');
    }
    get submitButton(){
        return cy.get('button[type="submit"]');
    }
    getInputField(name){
        return cy.get(`input[id=${name}]`);
    }

    login(email, password){
        this.getInputField('email').type(email);
        this.getInputField('userPassword').type(password);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();