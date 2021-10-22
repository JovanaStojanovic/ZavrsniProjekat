///<reference types="Cypress" />
import {loginPage} from './../page_objects/loginPage';
import {correctEmail, correctPassword} from './../fixtures/userData.json';

describe('login test', ()=> {
    
    it("login with valid data", ()=>{
        cy.visit('/login');
        cy.loginViaBackend(correctEmail, correctPassword);
        cy.visit('/gradebooks');
        cy.url().should('contains', 'https://gradebook.vivifyideas.com/gradebooks');
        loginPage.h1.should('have.text', 'The Gradebooks List');
    });

});



