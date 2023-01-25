// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Hello from './components/Hello';
import { Banner } from '@myorg/common-ui';

export function App() {
  return (
    <>
      <Banner text="Welcome to our admin app." />
      <Hello />
    </>
  );
}

export default App;
