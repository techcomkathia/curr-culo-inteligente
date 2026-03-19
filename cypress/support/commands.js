// Comando customizado de exemplo
Cypress.Commands.add('preencherFormularioBasico', (nome, email) => {
  cy.get('input[name="nome"]').type(nome)
  cy.get('input[name="email"]').type(email)
})
