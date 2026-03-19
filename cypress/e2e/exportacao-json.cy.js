describe('Exportação de Perfil em JSON', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="nome"]').type('Exporta Teste')
    cy.get('input[name="email"]').type('exporta@teste.com')
    cy.get('input[name="cargo"]').type('QA')
  })

  it('deve exportar o perfil preenchido em JSON', () => {
    cy.contains('Exportar JSON').click()
    cy.window().then((win) => {
      // Simula verificação do download ou do conteúdo exportado
      // Exemplo: interceptar o evento ou checar o conteúdo do campo de exportação
      // Aqui, apenas valida se o botão foi clicado e não houve erro
      cy.contains('Exportado com sucesso').should('exist')
    })
  })
})
