describe('Swag Labs: Ders 2 Locatorlar', () => {
    it('HTML Element locate', () => {
        cy.get('#user-name')//id
        cy.get('.login-box')//class
        cy.get('selectbox') //tag
        cy.get('input[name="user-name"]')//attriburte xpath

        //placeholder locates
        cy.get('input[placeholder]:contains("Username")')//1
        cy.get('input').contains('Username')//2
        cy.contains('Username')//3
    });

});