describe('template spec', () => {
  it('valid', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('#mail').type("zakariajahir@gmail.com")
    cy.get("#password").type("password")
    cy.get("#login").click()
    cy.url().should('eq','http://localhost:4200/accueil')
  })
  it('invalid', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('#mail').type("zakariajah@gmail.com")
    cy.get("#password").type("password")
    cy.get("#login").click()
    //cy.url().should('eq','http://localhost:4200/accueil')
  })
})