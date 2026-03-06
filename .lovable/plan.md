
## Plano: Criar arquivo de contexto para Copilot do VSCode

**Objetivo**: Gerar um arquivo `CONTEXT.txt` na raiz do projeto contendo um prompt estruturado que resume toda a interação com Lovable, servindo como contexto para o Copilot do VSCode.

**Conteúdo do arquivo**:
1. **Visão geral do projeto**: Aplicação web para análise de currículos com score ATS
2. **Stack técnico**: React, TypeScript, Tailwind CSS, Vite, React Router, TanStack Query, Radix UI
3. **Estrutura de componentes**: 
   - `PaginaPrincipal.tsx` - página raiz
   - `FormularioAnalise.tsx` - formulário com múltiplos campos e import/export JSON
   - `ResultadoAnalise.tsx` - exibição do currículo gerado e downloads
   - `CabecalhoAplicacao.tsx` - header
4. **Funcionalidades implementadas**:
   - Formulário com campos obrigatórios e opcionais (Projetos e Idiomas)
   - Import/export de perfil em JSON (sessão colapsível)
   - Análise simulada de vaga vs currículo
   - Visualização estilizada do currículo gerado com:
     - Nome em destaque (fonte maior, centralizado)
     - Títulos de seção em maiúsculas e negrito
     - Cargos e categorias de habilidades em negrito
     - Resumo profissional justificado
     - Links clicáveis para LinkedIn e GitHub
     - Separadores visuais
     - Fonte monoespaçada (Courier New)
   - Download em PDF (abre janela de impressão/salvar)
   - Download em DOC (editável)
5. **Padrões de código**:
   - Uso de hooks (useState, useRef)
   - Componentes baseados em Radix UI para consistência
   - Nomes em português para variáveis e funções
   - Tailwind para estilos
   - Interfaces TypeScript bem definidas
6. **Próximas melhorias sugeridas**:
   - Integração com API real para análise de currículo
   - Tema claro/escuro
   - Responsividade mobile

**Formato**: Texto simples e bem organizado, fácil de copiar/colar no Copilot
