import { Component } from '@angular/core';

type skillType = { name: string; icon: string; value?: string }[];

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  socialMidias: { icon: string; link: string }[] = [
    { icon: 'linkedin.svg', link: '' },
    { icon: 'github.svg', link: '' },
    { icon: 'email.svg', link: '' },
    { icon: 'whatsapp.svg', link: '' },
  ];

  languages: skillType = [
    {
      name: 'Inglês-B2',
      icon: 'eua-flag.svg',
    },
    {
      name: 'Japonês-N5~N4',
      icon: 'japan-flag.svg',
    },
  ];
  setup: skillType = [
    { name: 'Processador: Ryzen 1600', icon: 'processor.svg' },
    { name: 'Placa mãe: Asrock-AB350M', icon: 'motherboard.svg' },
    { name: 'Placa de video: RX 6500 XT', icon: 'gpu.svg' },
    { name: 'Memoria ram: 16GB (8x2)', icon: 'ram-memory.svg' },
    { name: 'Monitor 1: Dell-22', icon: 'monitor.svg' },
    { name: 'Monitor 2: HP-19', icon: 'monitor.svg' },
  ];
  infos: skillType = [
    {
      name: 'Experiências',
      icon: 'experience.svg',
      value: '1',
    },
    {
      name: 'Projetos',
      icon: 'projects.svg',
      value: '7',
    },
    {
      name: 'Local',
      icon: 'location.svg',
      value: 'São Paulo & Santana de parnaiba',
    },
    {
      name: 'Disponivel',
      icon: 'available.svg',
      value: '24/7',
    },
  ];
}
