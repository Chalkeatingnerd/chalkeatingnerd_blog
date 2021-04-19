import React from 'react';
import config from '../../config';
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
            <li className="contact__item">
              <a
                className="contact__item__link"
                href="https://www.facebook.com/#"
                rel="noopener noreferrer"
                target="_blank"
              >
                {contact.github}
              </a>
            </li>
            <li className="contact__item">
              <a
                className="contact__item__link"
                href="https://www.facebook.com/#"
                rel="noopener noreferrer"
                target="_blank"
              >
                {contact.linkedin}
              </a>
            </li>
          </ul>
        </div>
        <div className="reserved">© All rights reserved.</div>
      </div>
    </div>
  );
};

export default SideBar;
