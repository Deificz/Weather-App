import './style.css';
import iconLogo from './assets/images/logo.png';
import favicon from './assets/images/favicon.ico'
import {View} from './View';
import {Model} from './Model';
import { Controller } from './Controller';

window.addEventListener(`load`, () => {
   const head = document.querySelector(`head`);
   const link = document.createElement('link');

   document.querySelector('.logo').src = iconLogo;
   link.rel = 'icon';
   link.type = 'image/ico';
   link.href = favicon;
   head.appendChild(link);

   View.displayResults(Model.fetchData('Manila'));
})

Controller.handleSubmit();


