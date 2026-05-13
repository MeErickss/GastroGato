import { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Tartare de Salmão Bigodes',
    description: 'Um clássico da alta gastronomia felina, utilizando salmão fresco picado na ponta da faca com toque de erva do gato.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    category: 'Marítimo',
    prepTime: '15 min',
    difficulty: 'Intermediário',
    ingredients: [
      '100g de Salmão fresco (grau sashimi)',
      '1 colher de chá de óleo de peixe',
      'Pitada de Catnip orgânico',
      'Folhas de salsa para decorar'
    ],
    steps: [
      'Limpe cuidadosamente o salmão removendo qualquer espinha.',
      'Pique o peixe em cubos milimétricos e uniformes.',
      'Misture o óleo de peixe para dar brilho e suculência.',
      'Utilize um aro de metal para moldar o tartare no centro do prato.',
      'Finalize com o catnip e a salsa.'
    ],
    tips: [
      'Sirva levemente resfriado, mas não gelado.',
      'A qualidade do peixe é o ingrediente principal.'
    ]
  },
  {
    id: '2',
    title: 'Mousse de Frango Sofisticado',
    description: 'Textura aveludada de peito de frango cozido lentamente no vapor, ideal para paladares exigentes.',
    image: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?auto=format&fit=crop&q=80&w=800',
    category: 'Aves',
    prepTime: '30 min',
    difficulty: 'Iniciante',
    ingredients: [
      '1 peito de frango sem osso',
      '50ml de caldo de galinha natural (sem sal)',
      '1 colher de iogurte grego natural'
    ],
    steps: [
      'Cozinhe o frango no vapor até que esteja macio.',
      'Processe no liquidificador com o caldo de galinha.',
      'Incorpore o iogurte delicadamente para obter a textura de mousse.',
      'Deixe descansar por 10 minutos antes de servir.'
    ],
    tips: [
      'Nunca utilize sal ou temperos humanos como cebola e alho.'
    ]
  }
];