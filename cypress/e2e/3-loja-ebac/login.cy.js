///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('guts.teste@teste.com.br')
        cy.get('#password').type('guts@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, guts.teste (não é guts.teste? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir o usuario inválido', () => {
        cy.get('#username').type('guts.test@teste.com.br')
        cy.get('#password').type('guts@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mensagem de erro ao digitar senha inválida.', () => {
        cy.get('#username').type('guts.teste@teste.com.br')
        cy.get('#password').type('gut@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'está incorreta')

    });

})