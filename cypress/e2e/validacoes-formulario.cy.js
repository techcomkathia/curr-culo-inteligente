describe('Validações do Formulário', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve exibir erro ao submeter sem campos obrigatórios', () => {
    cy.get('form').within(() => {
      cy.root().submit()
    })
    cy.contains('Campo obrigatório').should('exist')
  })

  it('deve validar e aceitar preenchimento correto', () => {
    cy.get('input[name="nome"]').type('Maria Teste')
    cy.get('input[name="email"]').type('maria@teste.com')
    cy.get('input[name="cargo"]').type('Desenvolvedora')
    cy.get('form').submit()
    cy.contains('Currículo gerado').should('exist')
  })
})
