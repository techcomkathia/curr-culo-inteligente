// Função serverless para análise ATS usando Gemini
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';


export default async function analisarCurriculo(req: VercelRequest, res: VercelResponse) {
  // Carrega a chave da API Gemini da variável de ambiente
  const CHAVE_API_GEMINI = process.env.GEMINI_API_KEY;
  if (!CHAVE_API_GEMINI) {
    return res.status(500).json({ erro: 'GEMINI_API_KEY não definida nas variáveis de ambiente.' });
  }
  const geminiIA = new GoogleGenerativeAI(CHAVE_API_GEMINI);


  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  try {
    const {
      informacoesPessoais,
      resumoProfissional,
      habilidades,
      experienciaProfissional,
      formacaoAcademica,
      projetos,
      idiomas,
      descricaoVaga
    } = req.body;

    // Monta o prompt para o Gemini
    const prompt = `Compare o currículo abaixo com a descrição da vaga e gere um ATS Score de 0 a 100, considerando compatibilidade de habilidades, experiência e requisitos.\n\nCurrículo:\nInformações Pessoais: ${informacoesPessoais}\nResumo Profissional: ${resumoProfissional}\nHabilidades: ${habilidades}\nExperiência Profissional: ${experienciaProfissional}\nFormação Acadêmica: ${formacaoAcademica}\nProjetos: ${projetos}\nIdiomas: ${idiomas}\n\nDescrição da Vaga:\n${descricaoVaga}\n\nResponda em JSON com os campos: pontuacao, resumo, pontosPositivos, pontosDeMelhoria, curriculoGerado.\nNo campo curriculoGerado, gere um currículo otimizado para a vaga, incorporando as melhorias sugeridas, pronto para ser copiado e enviado ao recrutador.`;

    const modelo = geminiIA.getGenerativeModel({ model: 'gemini-flash-latest' });
    const resultado = await modelo.generateContent(prompt);
    const resposta = await resultado.response;
    const texto = resposta.text();
    console.log('Resposta bruta da Gemini:', texto);

    // Tenta converter a resposta em JSON

    let json;
    try {
      json = JSON.parse(texto);
    } catch (e) {
      // Tenta extrair JSON de bloco markdown ```json ... ```
      const match = texto.match(/```json\n([\s\S]*)```/);
      if (match) {
        try {
          json = JSON.parse(match[1]);
        } catch {
          return res.status(200).json({ bruto: texto });
        }
      } else {
        return res.status(200).json({ bruto: texto });
      }
    }

    // Mapeia os campos da IA para o formato esperado pelo frontend
    const resultadoFinal = {
      pontuacaoATS: json.pontuacao ?? json.score ?? 0,
      habilidadesIdentificadas: Array.isArray(json.pontosPositivos) ? json.pontosPositivos : [],
      habilidadesFaltantes: Array.isArray(json.pontosDeMelhoria) ? json.pontosDeMelhoria : [],
      sugestoesMelhoria: Array.isArray(json.pontosDeMelhoria) ? json.pontosDeMelhoria : [],
      curriculoGerado: typeof json.curriculoGerado === 'string' ? json.curriculoGerado : ''
    };

    return res.status(200).json(resultadoFinal);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao analisar currículo', detalhes: erro?.toString() });
  }
}
