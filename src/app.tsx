import React from 'react';
import { Header } from './common/ui/molecules/header';

import './app.css';
import { AppConverter } from './modules/converter/components';
import { CenteredLayout } from './common/ui/templates';

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
