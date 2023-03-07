import { HumanCasePipe } from './human-case.pipe';

describe('HumanCasePipe', () => {
  it('create an instance', () => {
    const pipe = new HumanCasePipe();
    expect(pipe).toBeTruthy();
  });
});
