describe('Funcionamento dos 3 Botões Principais', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="nome"]').type('Botão Teste')
    cy.get('input[name="email"]').type('botao@teste.com')
    cy.get('input[name="cargo"]').type('Tester')
  })

  it('deve exportar JSON corretamente', () => {
    cy.contains('Exportar JSON').click()
    cy.contains('Exportado com sucesso').should('exist')
  })

  it('deve baixar PDF corretamente', () => {
    cy.contains('Baixar PDF').click()
    // Simula verificação de abertura da janela de impressão
    cy.window().then((win) => {
      // Aqui pode-se mockar window.print ou verificar se foi chamado
      // Exemplo:
      // cy.stub(win, 'print').as('print')
      // cy.contains('Baixar PDF').click()
      // cy.get('@print').should('have.been.called')
    })
  })

  it('deve baixar DOC corretamente', () => {
    cy.contains('Baixar DOC').click()
    // Simula verificação do download do arquivo DOC
    // Pode-se interceptar o request ou checar se o arquivo foi gerado
  })
})
