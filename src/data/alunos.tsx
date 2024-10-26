export interface Disciplina {
  nome: string;
  cp1: { nota: number; data: string };
  cp2: { nota: number; data: string };
  cp3: { nota: number; data: string };
  gs: { nota: number; data: string };
  cs1: { nota: number; data: string };
  cs2: { nota: number; data: string };
  fa: number;
  md: number;
  pr: number;
}

export const alunos = [
  {
    id: 1,
    nome: 'João Silva',
    imagem: '/img/imagem-1.jpg',
    disciplinas: [
      {
        nome: 'Artificial Intelligence & Chatbot',
        cp1: { nota: 85.75, data: '15/10/2024' },
        cp2: { nota: 87, data: '25/10/2024' },
        cp3: { nota: 89.5, data: '05/11/2024' },
        gs: { nota: 90, data: '20/11/2024' },
        cs1: { nota: 88, data: '10/12/2024' },
        cs2: { nota: 89, data: '20/12/2024' },
        fa: 3,
        md: 89.5,
        pr: 88.7,
      },
      {
        nome: 'Building Relational Database',
        cp1: { nota: 91.5, data: '15/10/2024' },
        cp2: { nota: 90, data: '25/10/2024' },
        cp3: { nota: 91, data: '05/11/2024' },
        gs: { nota: 85, data: '20/11/2024' },
        cs1: { nota: 91, data: '10/12/2024' },
        cs2: { nota: 92, data: '20/12/2024' },
        fa: 4,
        md: 89.5,
        pr: 90.1,
      },
      {
        nome: 'Computational Thinking Using Python',
        cp1: { nota: 90.75, data: '15/10/2024' },
        cp2: { nota: 92, data: '25/10/2024' },
        cp3: { nota: 89.5, data: '05/11/2024' },
        gs: { nota: 95, data: '20/11/2024' },
        cs1: { nota: 94, data: '10/12/2024' },
        cs2: { nota: 92, data: '20/12/2024' },
        fa: 0,
        md: 92.3,
        pr: 94.5,
      },
      {
        nome: 'Domain Driven Design Using Java',
        cp1: { nota: 89.5, data: '15/10/2024' },
        cp2: { nota: 88, data: '25/10/2024' },
        cp3: { nota: 87, data: '05/11/2024' },
        gs: { nota: 85, data: '20/11/2024' },
        cs1: { nota: 90, data: '10/12/2024' },
        cs2: { nota: 89, data: '20/12/2024' },
        fa: 2,
        md: 86.8,
        pr: 89.2,
      },
      {
        nome: 'Front-End Design Engineering',
        cp1: { nota: 75, data: '15/10/2024' },
        cp2: { nota: 78, data: '25/10/2024' },
        cp3: { nota: 80, data: '05/11/2024' },
        gs: { nota: 80, data: '20/11/2024' },
        cs1: { nota: 85, data: '10/12/2024' },
        cs2: { nota: 82, data: '20/12/2024' },
        fa: 1,
        md: 80.5,
        pr: 81.7,
      },
      {
        nome: 'Software Engineering and Business Model',
        cp1: { nota: 75, data: '15/10/2024' },
        cp2: { nota: 74, data: '25/10/2024' },
        cp3: { nota: 78, data: '05/11/2024' },
        gs: { nota: 76, data: '20/11/2024' },
        cs1: { nota: 80, data: '10/12/2024' },
        cs2: { nota: 79, data: '20/12/2024' },
        fa: 1,
        md: 78.5,
        pr: 77.6,
      },
    ],
  },
  {
    id: 2,
    nome: 'Maria Souza',
    imagem: '/img/imagem-2.jpg', 
    disciplinas: [
      {
        nome: 'Artificial Intelligence & Chatbot',
        cp1: { nota: 83, data: '15/10/2024' },
        cp2: { nota: 86, data: '25/10/2024' },
        cp3: { nota: 88, data: '05/11/2024' },
        gs: { nota: 87, data: '20/11/2024' },
        cs1: { nota: 85, data: '10/12/2024' },
        cs2: { nota: 86, data: '20/12/2024' },
        fa: 3,
        md: 86.8,
        pr: 85.9,
      },
      {
        nome: 'Building Relational Database',
        cp1: { nota: 88, data: '15/10/2024' },
        cp2: { nota: 90, data: '25/10/2024' },
        cp3: { nota: 92, data: '05/11/2024' },
        gs: { nota: 85, data: '20/11/2024' },
        cs1: { nota: 87, data: '10/12/2024' },
        cs2: { nota: 89, data: '20/12/2024' },
        fa: 4,
        md: 88.5,
        pr: 89.0,
      },
      {
        nome: 'Computational Thinking Using Python',
        cp1: { nota: 90, data: '15/10/2024' },
        cp2: { nota: 91, data: '25/10/2024' },
        cp3: { nota: 93, data: '05/11/2024' },
        gs: { nota: 92, data: '20/11/2024' },
        cs1: { nota: 91, data: '10/12/2024' },
        cs2: { nota: 90, data: '20/12/2024' },
        fa: 0,
        md: 91.3,
        pr: 93.5,
      },
      {
        nome: 'Domain Driven Design Using Java',
        cp1: { nota: 85, data: '15/10/2024' },
        cp2: { nota: 82, data: '25/10/2024' },
        cp3: { nota: 87, data: '05/11/2024' },
        gs: { nota: 87, data: '20/11/2024' },
        cs1: { nota: 85, data: '10/12/2024' },
        cs2: { nota: 86, data: '20/12/2024' },
        fa: 2,
        md: 86.3,
        pr: 85.9,
      },
      {
        nome: 'Front-End Design Engineering',
        cp1: { nota: 78, data: '15/10/2024' },
        cp2: { nota: 79, data: '25/10/2024' },
        cp3: { nota: 80, data: '05/11/2024' },
        gs: { nota: 82, data: '20/11/2024' },
        cs1: { nota: 83, data: '10/12/2024' },
        cs2: { nota: 81, data: '20/12/2024' },
        fa: 1,
        md: 81.7,
        pr: 82.5,
      },
      {
        nome: 'Software Engineering and Business Model',
        cp1: { nota: 76, data: '15/10/2024' },
        cp2: { nota: 75, data: '25/10/2024' },
        cp3: { nota: 77, data: '05/11/2024' },
        gs: { nota: 78, data: '20/11/2024' },
        cs1: { nota: 79, data: '10/12/2024' },
        cs2: { nota: 78, data: '20/12/2024' },
        fa: 1,
        md: 76.3,
        pr: 78.2,
      },
    ],
  },
  {
    id: 3,
    nome: 'Carlos Pereira',
    imagem: '/img/imagem-3.jpg', 
    disciplinas: [
      {
        nome: 'Artificial Intelligence & Chatbot',
        cp1: { nota: 88, data: '15/10/2024' },
        cp2: { nota: 89, data: '25/10/2024' },
        cp3: { nota: 90, data: '05/11/2024' },
        gs: { nota: 85, data: '20/11/2024' },
        cs1: { nota: 87, data: '10/12/2024' },
        cs2: { nota: 88, data: '20/12/2024' },
        fa: 3,
        md: 88.5,
        pr: 89.0,
      },
      {
        nome: 'Building Relational Database',
        cp1: { nota: 90, data: '15/10/2024' },
        cp2: { nota: 91, data: '25/10/2024' },
        cp3: { nota: 92, data: '05/11/2024' },
        gs: { nota: 86, data: '20/11/2024' },
        cs1: { nota: 88, data: '10/12/2024' },
        cs2: { nota: 89, data: '20/12/2024' },
        fa: 4,
        md: 89.5,
        pr: 90.2,
      },
      {
        nome: 'Computational Thinking Using Python',
        cp1: { nota: 85, data: '15/10/2024' },
        cp2: { nota: 86, data: '25/10/2024' },
        cp3: { nota: 88, data: '05/11/2024' },
        gs: { nota: 89, data: '20/11/2024' },
        cs1: { nota: 90, data: '10/12/2024' },
        cs2: { nota: 91, data: '20/12/2024' },
        fa: 0,
        md: 87.8,
        pr: 89.3,
      },
      {
        nome: 'Domain Driven Design Using Java',
        cp1: { nota: 80, data: '15/10/2024' },
        cp2: { nota: 82, data: '25/10/2024' },
        cp3: { nota: 85, data: '05/11/2024' },
        gs: { nota: 83, data: '20/11/2024' },
        cs1: { nota: 84, data: '10/12/2024' },
        cs2: { nota: 82, data: '20/12/2024' },
        fa: 2,
        md: 83.3,
        pr: 85.5,
      },
      {
        nome: 'Front-End Design Engineering',
        cp1: { nota: 78, data: '15/10/2024' },
        cp2: { nota: 79, data: '25/10/2024' },
        cp3: { nota: 80, data: '05/11/2024' },
        gs: { nota: 78, data: '20/11/2024' },
        cs1: { nota: 79, data: '10/12/2024' },
        cs2: { nota: 78, data: '20/12/2024' },
        fa: 1,
        md: 78.7,
        pr: 79.5,
      },
      {
        nome: 'Software Engineering and Business Model',
        cp1: { nota: 75, data: '15/10/2024' },
        cp2: { nota: 76, data: '25/10/2024' },
        cp3: { nota: 77, data: '05/11/2024' },
        gs: { nota: 76, data: '20/11/2024' },
        cs1: { nota: 78, data: '10/12/2024' },
        cs2: { nota: 79, data: '20/12/2024' },
        fa: 1,
        md: 76.8,
        pr: 77.9,
      },
    ],
  },
];
