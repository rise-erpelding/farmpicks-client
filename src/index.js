import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faHeart as faHeartSolid,
  faChevronLeft,
  faCaretDown,
  faFilter,
  faUser,
  faQuestionCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import App from './components/App/App';
import AppError from './components/AppError/AppError';
import './index.css';

library.add(
  faSearch,
  faHeartSolid,
  faHeartRegular,
  faChevronLeft,
  faCaretDown,
  faFilter,
  faUser,
  faQuestionCircle,
  faTimes,
);

ReactDOM.render(
  <AppError>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppError>,
  document.getElementById('root'),
);
