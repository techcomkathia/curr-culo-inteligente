describe('Geração do Currículo com Todos os Campos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="nome"]').type('Completo Teste')
    cy.get('input[name="email"]').type('completo@teste.com')
    cy.get('input[name="cargo"]').type('Fullstack')
    cy.get('textarea[name="resumo"]').type('Profissional completo.')
    cy.get('input[name="linkedin"]').type('https://linkedin.com/in/completo')
    cy.get('input[name="github"]').type('https://github.com/completo')
    cy.get('input[name="projeto-0"]').type('Projeto 1')
    cy.get('input[name="idioma-0"]').type('Inglês')
    // ...preencher outros campos se necessário
  })

  it('deve gerar currículo com todos os dados preenchidos', () => {
    cy.get('form').submit()
    cy.contains('Completo Teste').should('exist')
    cy.contains('Fullstack').should('exist')
    cy.contains('Projeto 1').should('exist')
    cy.contains('Inglês').should('exist')
    cy.contains('linkedin.com/in/completo').should('exist')
    cy.contains('github.com/completo').should('exist')
  })
})
