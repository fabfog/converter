import React from 'react';
import { Header } from './modules/header';

import './app.css';
import { AppConverter } from './modules/converter/components';
import { CenteredLayout } from './modules/layouts';

function App() {
  return (
    <div className="App">
      <Header />
      <CenteredLayout>
        <AppConverter />
      </CenteredLayout>
    </div>
  );
}

export default App;
