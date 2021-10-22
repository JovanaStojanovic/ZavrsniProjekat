///<reference types="Cypress" />

import {correctEmail, correctPassword, firstName, lastName} from './../fixtures/userData.json';
import {createProfessor} from './../page_objects/createProfessor';
const faker = require('faker');

describe('create professor test', ()=> {
    beforeEach('log into the app', () => {
        cy.loginViaBackend(correctEmail, correctPassword);
        cy.visit('/professors/create');

        cy.intercept(
            "POST",
            "https://gradebook-api.vivifyideas.com/api/professors/create",
            ()=>{}
        ).as("submitProfessor");
    });

    let professorData = {
        randomUrlJpg:faker.internet.url() + ".jpg",
    }
      
    it("create professor with valid data, and attach to him the first gradebook from drop-down menu", ()=>{
        createProfessor.h1.should('have.text', 'Create new professor.');
        createProfessor.createProfessorWithGradebook(firstName, lastName, professorData.randomUrlJpg);
        cy.wait('@submitProfessor').then((interception)=> {
            expect(interception.response.statusCode).eq(200);
        })
    });

    it.only("create professor with valid data, without attached gradebook", ()=>{
        createProfessor.h1.should('have.text', 'Create new professor.');
        createProfessor.createProfessorNoGradebook(firstName, lastName, professorData.randomUrlJpg);
        cy.wait('@submitProfessor').then((interception)=> {
            expect(interception.response.statusCode).eq(200);
        })
    });

});
