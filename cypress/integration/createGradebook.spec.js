///<reference types="Cypress" />

import {correctEmail, correctPassword} from './../fixtures/userData.json';
import {createGradebook} from './../page_objects/createGradebook.js';
const faker = require('faker');

describe('create gradebook test', ()=> {
    beforeEach('log into the app', () => {
        cy.loginViaBackend(correctEmail, correctPassword);
        cy.visit('/gradebook/create');

        cy.intercept(
            "POST",
            "https://gradebook-api.vivifyideas.com/api/gradebooks/store",
            ()=>{}
        ).as("submitGradebook");
    });

    let gradebookData = {
        randomName:faker.name.title()
    }
      
    it("create gradebook and attach our created professor", ()=>{
        createGradebook.h1.should('have.text', 'Create new gradebook');
        createGradebook.createGradebookWithProfessor(gradebookData.randomName);
        cy.wait('@submitGradebook').then((interception)=> {
            expect(interception.response.statusCode).eq(200);
        })
    });

});