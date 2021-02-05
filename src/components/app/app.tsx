import * as React from 'react';

interface AppProps {
  name: boolean;
}

const App: React.FC<AppProps> = (props: AppProps) => <h1>{props.name}</h1>;

export default App;
