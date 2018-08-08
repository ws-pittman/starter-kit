/**
 * @file
 * Main client-side entry point.
 *
 * You probably don't want to touch anything in here unless you know what
 * you're doing. #justsayin
 */

import React from 'react';
import { hydrate } from 'react-dom';
import App from './app';
import getContext from '../config';
import './styles.scss';

(async () => {
  const ctx = { ...(await getContext()), buildTime: window.BUILD_TIME };
  hydrate(<App {...ctx} />, document.getElementById('app'));
})();
