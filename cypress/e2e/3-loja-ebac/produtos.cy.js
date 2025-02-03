/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        .contains('Aero Daily Fitness Tee') //*usado para escolher um item específico pelo NOME.*
        //.last()     *usado para escolher o último item da lista.*  
        //.eq(1)      *usado para escolher itens entre o primeiro e o último. Lembrar de sempre começar a contagem com 0. Ex: 0,1,2,3.*
        //.first()    *usado para escolher o primeiro item da lista.*
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
});
