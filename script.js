const explanations = {
  inicio: {
    title: 'Começar pelo cuidado',
    description: 'A proteção ambiental começa com uma pergunta: o que está acontecendo no lugar que queremos cuidar? A IA pode ajudar a organizar informações para entender melhor esse contexto.',
    example: 'O ciclo pode ser aplicado a rios, florestas, áreas agrícolas, cidades e habitats de animais.'
  },
  observar: {
    title: 'Etapa 1 — Observar a natureza',
    description: 'Sensores, imagens de satélite, estações meteorológicas e observações de moradores geram dados sobre os ecossistemas. A IA ajuda a organizar esses dados e acompanhar mudanças ao longo do tempo.',
    example: 'Exemplo: sensores acompanham a qualidade da água e a temperatura de um rio.'
  },
  risco: {
    title: 'Decisão — Há um risco ambiental?',
    description: 'A IA pode apontar padrões que merecem atenção, mas uma previsão não é certeza. Especialistas e comunidades avaliam os sinais e o contexto antes de escolher o próximo passo.',
    example: 'Se houver um sinal de risco, investigamos e nos preparamos. Se não houver, seguimos monitorando.'
  },
  prever: {
    title: 'Etapa 2 — Prever e localizar ameaças',
    description: 'Modelos de IA podem combinar imagens e dados históricos para ajudar a identificar onde um problema pode surgir ou se agravar. Isso ajuda equipes a direcionar investigações e alertas.',
    example: 'Exemplo: cruzar calor, vento e vegetação seca para priorizar áreas com risco de incêndio.'
  },
  monitorar: {
    title: 'Etapa 2 — Continuar monitorando',
    description: 'Nem toda observação indica um perigo imediato. Acompanhar os dados com regularidade ajuda a perceber mudanças futuras sem deixar áreas importantes sem atenção.',
    example: 'Exemplo: monitorar a qualidade do ar de um bairro e investigar se os níveis mudarem.'
  },
  planejar: {
    title: 'Etapa 3 — Planejar soluções com a comunidade',
    description: 'A tecnologia oferece informações para apoiar escolhas, não para substituir as pessoas. Moradores, povos indígenas, cientistas e gestores podem unir seus conhecimentos para decidir prioridades.',
    example: 'Exemplo: combinar mapas de áreas degradadas com o conhecimento local para escolher onde restaurar a mata.'
  },
  agir: {
    title: 'Etapa 4 — Agir para proteger e recuperar',
    description: 'Com um plano definido, as pessoas colocam as soluções em prática. Ferramentas de IA podem ajudar a acompanhar tarefas e usar recursos com mais eficiência.',
    example: 'Exemplo: usar recomendações de irrigação para economizar água e apoiar a recuperação de uma área.'
  },
  resultado: {
    title: 'Decisão — A ação trouxe bons resultados?',
    description: 'Depois de agir, é importante medir o que mudou. Dados atualizados ajudam a avaliar se a estratégia está funcionando; pessoas e especialistas interpretam os resultados e decidem se é preciso ajustar o plano.',
    example: 'Se funcionou, o trabalho de proteção continua. Se não, aprendemos e adaptamos a ação.'
  },
  fim: {
    title: 'A proteção continua',
    description: 'Um resultado positivo é uma conquista, mas cuidar do meio ambiente é um compromisso contínuo. Acompanhar o ecossistema permite conservar os avanços e identificar novos desafios.',
    example: 'A natureza protegida se beneficia do cuidado constante e da colaboração.'
  },
  aprender: {
    title: 'Etapa 5 — Aprender e melhorar',
    description: 'Quando os resultados não são os esperados, os dados e a experiência da comunidade ajudam a entender por quê. A equipe pode ajustar as medidas e iniciar outro ciclo de ação.',
    example: 'Exemplo: alterar o plano de restauração se as espécies nativas não estiverem se desenvolvendo como esperado.'
  }
};

const dialog = document.querySelector('.info-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('.dialog-description');
const dialogExample = document.querySelector('.dialog-example');
const closeButton = document.querySelector('.dialog-close');

if (dialog && dialogTitle && dialogDescription && dialogExample) {
  document.querySelectorAll('[data-info]').forEach((node) => {
    node.addEventListener('click', () => {
      const content = explanations[node.dataset.info];
      if (!content) return;
      dialogTitle.textContent = content.title;
      dialogDescription.textContent = content.description;
      dialogExample.textContent = content.example;
      dialog.showModal();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
