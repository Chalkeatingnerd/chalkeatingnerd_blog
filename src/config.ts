export type LinkConfig = {
  mail: string,
  github: string,
  linkedin: string,
  facebook: string,
  instagram: string,
  twitter: string,
  telegram: string,
}
type Config = {
  avatarImg: string,
  author: string,
  description: string,
  link: LinkConfig,
}

const config: Config = {
  avatarImg: 'https://avatars.githubusercontent.com/u/20182365?v=4',
  author: 'deokgoo',
  description: 'tech blog all web knowledge',
  link: {
    mail: 'kkddgg1001@gmail.com',
    github: 'https://github.com/deokgoo',
    linkedin: 'https://www.linkedin.com/in/kim-deokgoo-51b583155/',
    facebook: '',
    instagram: '',
    twitter: '',
    telegram: '',
  },
}

export default config;
