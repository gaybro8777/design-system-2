import { AppContainer } from 'react-hot-loader';
import Docs from './scripts/components/Docs';
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('js-root');

function render() {
  const Page = <Docs page={window.page} routes={window.routes} />;

  if (process.env.NODE_ENV === 'production') {
    // In production mode the pages are rendered on the "server"
    ReactDOM.hydrate(Page, rootEl);
  } else {
    ReactDOM.render(<AppContainer>{Page}</AppContainer>, rootEl);
  }
}

render();

if (module.hot) {
  // Enable Hot Module Replacement
  module.hot.accept('./scripts/components/Docs', () => render());
}
