import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore from 'swiper';
import { SwiperComponent } from 'swiper/angular';

type project = {
  name: string;
  description: string;
  technologies: string[];
  background: string;
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
    },
    {
      name: 'Bolsa De Atletas',
      description:
        'Uma Landing page, para a apresentação e divulgação de um serviço. não posso divulgar o código, porque não tenho a autorização da empresa que contratou o serviço.',
      technologies: ['React', 'Material-UI', 'CSS', 'JS'],
      background: 'bolsaDeAtletas01.png',
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
    },
  ];
}
