import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';

type project = {
  name: string;
  description: string;
  technologies: string[];
  background: string;
  links: { pageOnline: string | undefined; repository: string | undefined };
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    if (this.swiper) {
      this.swiper.swiperRef.slideNext(1000);
    }
  }
  slidePrev() {
    if (this.swiper) {
      this.swiper.swiperRef.slidePrev(1000);
    }
  }

  projects: project[] = [
    {
      name: 'Anime Jox',
      description:
        'Uma wiki de animes, nela é possível buscar informações de diversos animes, criar uma conta e classificar esses animes colocados em lista de favoritos, acompanhado, dropados etc. Sua base foi construída usando react, next e consumindo a API da Kitsu, as demais ferramentas de login favoritar os anime etc... vem do firebase. foi um projeto que demandou muito esforço e que no seu fim me deu muita confiança e me deixou muito feliz com o resultado.',
      technologies: ['React', 'Firebase', 'Next', 'REST'],
      background: 'animeJox06.png',
      links: {
        pageOnline: 'https://anime-jox.vercel.app/',
        repository: 'https://github.com/jox404/anime-jox',
      },
    },
    {
      name: 'Bolsa De Atletas',
      description:
        'Uma Landing page, para a apresentação e divulgação de um serviço. não posso divulgar o código, porque não tenho a autorização da empresa que contratou o serviço.',
      technologies: ['React', 'Material-UI', 'CSS', 'JS'],
      background: 'bolsaDeAtletas01.png',
      links: { pageOnline: undefined, repository: undefined },
    },
    {
      name: 'WeatherApp',
      description:
        'Aplicativo de previsão do tempo, nele você pode consutar informaçôes do tempo da sua cidade, como temperatura, força do vento, umidade do ar etc, tambem é possivel adicionar cidades a uma lista de favoritos',
      technologies: [
        'JS',
        'React Native',
        'Node.js',
        'REST',
        'JWT',
        'Sequelize',
        'mySQL',
      ],
      background: 'weather-app.png',
      links: {
        pageOnline: undefined,
        repository: 'https://github.com/jox404/weather-app',
      },
    },
    {
      name: 'Photographer Portfolio',
      description:
        'Um portfólio de um fotógrafo, apresentando um album de fotos e serviços.Quando o fiz esse projeto meu objetivo principa era exercitar minhas habilidades com animações CSS',
      technologies: ['TypeScript', 'React', 'CSS'],
      background: 'photographerPortfolio.png',
      links: {
        pageOnline:
          'https://photographer-portfolio-git-main-jox404.vercel.app/',
        repository: 'https://github.com/jox404/photographer-portfolio',
      },
    },
    {
      name: 'Portfolio(Versão Anterio)',
      description:
        'Essa é a versão anterior do meu meu portfólio, criada em 2022.',
      technologies: ['JS', 'React', 'CSS'],
      background: 'portfolio2022.png',
      links: {
        pageOnline: 'https://jox404.github.io/portifolio/',
        repository: 'https://github.com/jox404/portifolio',
      },
    },
  ];
}
