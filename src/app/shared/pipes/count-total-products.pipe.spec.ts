import { CountTotalProductsPipe } from './count-total-products.pipe';

describe('CountTotalProductsPipe', () => {
  it('create an instance', () => {
    const pipe = new CountTotalProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
