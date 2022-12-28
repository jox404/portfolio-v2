import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  front: string[] = [
    'React.js',
    'React Native',
    'Next.js',
    'Angular',
    'Material-UI',
    'JavaScript',
    'Styled-Componets',
    'CSS',
    'HTML',
    'Bootstrap',
    'Typescript',
  ];
  back: string[] = [
    'Node.js',
    'Nest.js',
    'Firebase',
    'MongoDb',
    'MongooseODM',
    'SQL',
    'MySQL',
    'Sequelize',
    'NoSQL',
    'TypeORM',
    'GraphQL',
  ];

  softSkills: { name: string; icon: string }[] = [
    {
      name: 'Inteligência emocional',
      icon: 'soft-int.svg',
    },
    {
      name: 'Criatividade',
      icon: 'soft-cria.svg',
    },
    {
      name: 'Gerenciamento de tempo',
      icon: 'soft-time.svg',
    },
    {
      name: 'Trabalho em equipe',
      icon: 'soft-team.svg',
    },
  ];
}
