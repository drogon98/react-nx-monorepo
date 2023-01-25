// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Hello from './components/Hello';
import { Banner } from '@myorg/common-ui';
import { exampleProducts } from '@myorg/products';

export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      <Hello />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
