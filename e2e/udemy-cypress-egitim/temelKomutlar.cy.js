describe('Temel Komutlar', () => {

    it('Temel Komutlar cy.visit Kullanimi',()=>{
        //driver.get url
        cy.visit("/");
        cy.visit("https://www.google.com.tr");
        cy.visit({
            url:"https://www.youtube.com",
            method:'GET'
        })
    });

    it('Temel komutlar cy.title',()=>{
        //title ASSERT
        cy.title().should('eq',"cypress.io")
        cy.title().should('include',"cypress")
        cy.title().should('contain',"cypress")
    });

    it('Temel komutlar cy.url ve cy.location',()=>{
        //urli eq,contain ve include karşılştırma

        cy.url().should('eq','cypress.io')
        cy.url().should('include','cypress')


        
        //url pathi, protocolü veya hostnamei karşılaştırma eq,contain ve include
        cy.location('pathname').should('eq','/commands')//gidilen path eşit mi
        cy.location('protocol').should('eq',"https")
        cy.location('hostname').should('include','google')
    });

    it('cy.get',()=>{
        //element tanımlama/tıklama
        cy.get("#button")
        cy.get('#button').as('buttonIdisineAtamaYap')// gettekine atama yapıyor
    });


    it('cy.log',()=>{
        //log
        cy.log('Temel log')
        cy.log('be.visible')
        cy.log('bir mesaj',['dizi 1','dizi 2','dizi 3'])
    })

});