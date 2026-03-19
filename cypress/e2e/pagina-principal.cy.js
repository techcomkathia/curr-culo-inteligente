describe('Página Principal', () => {
  it('deve exibir o cabeçalho e o formulário', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Currículo Inteligente').should('exist')
    cy.get('form').should('exist')
  })
})
