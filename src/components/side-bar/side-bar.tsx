import React from 'react';
import config, { LinkConfig } from '../../config';
import { contact } from '../common/icons';
import './side-bar.scss';

const SideBar = () => {
  const menuRender = () => {
    return (
      <ul>
        <li className="item">
          <a className="active" href="#">
            Article
          </a>
        </li>
        <li className="item">
          <a href="#">About me</a>
        </li>
        <li className="item">
          <a href="#">Contact me</a>
        </li>
      </ul>
    );
  };
  const linkIconRender = () => {
    const iconKeys: (keyof LinkConfig)[] = [
      'mail',
      'github',
      'linkedin',
      'facebook',
      'instagram',
      'twitter',
      'telegram',
    ]
    return iconKeys.map(x => (
      <li className="contact__item">
        {
          config.link[x]?
            (<a
              className="contact__item__link"
              href={x==='mail'?`mailto:${config.link[x]}`:config.link[x]}
              rel="noopener noreferrer"
              target="_blank"
            >
              {contact[x]}
            </a>) :
            ''
        }
        
      </li>
    ))
    
  }
  return (
    <div className="side-bar">
      <div className="container">
        <div className="avatar-wrapper">
          <img className="avatar" src={config.avatarImg} />
        </div>
        <div className="author">{config.author}</div>
        <div className="description">{config.description}</div>
        <div className="menu">{menuRender()}</div>
        <div className="contact">
          <ul className="contact__list">
            {linkIconRender()}
          </ul>
        </div>
        <div className="reserved">© All rights reserved.</div>
      </div>
    </div>
  );
};

export default SideBar;
