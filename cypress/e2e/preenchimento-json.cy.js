describe('Preenchimento via JSON', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve importar dados do perfil via JSON', () => {
    const perfil = {
      nome: 'João Importado',
      email: 'joao@importado.com',
      cargo: 'Analista',
      // ...outros campos necessários
    }
    cy.get('textarea[name="json-import"]').clear().type(JSON.stringify(perfil), { parseSpecialCharSequences: false })
    cy.contains('Importar JSON').click()
    cy.get('input[name="nome"]').should('have.value', 'João Importado')
    cy.get('input[name="email"]').should('have.value', 'joao@importado.com')
  })
})
