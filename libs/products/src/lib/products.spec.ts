import { exampleProducts } from './products';

describe('products', () => {
  it('should work', () => {
    expect(exampleProducts).toHaveLength(2);
  });
});
