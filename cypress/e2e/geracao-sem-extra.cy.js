describe('Geração sem Projetos ou Idiomas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="nome"]').type('Sem Extra')
    cy.get('input[name="email"]').type('semextra@teste.com')
    cy.get('input[name="cargo"]').type('Backend')
    cy.get('textarea[name="resumo"]').type('Sem projetos ou idiomas.')
    // Não preenche projetos nem idiomas
  })

  it('deve gerar currículo sem projetos e idiomas', () => {
    cy.get('form').submit()
    cy.contains('Sem Extra').should('exist')
    cy.contains('Backend').should('exist')
    cy.contains('Sem projetos ou idiomas.').should('exist')
    cy.contains('Projetos').should('not.exist')
    cy.contains('Idiomas').should('not.exist')
  })
})
