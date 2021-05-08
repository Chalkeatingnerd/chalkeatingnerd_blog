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
  avatarImg: '',
  author: '',
  description: '',
  link: {
    mail: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    twitter: '',
    telegram: '',
  },
}

export default config;
