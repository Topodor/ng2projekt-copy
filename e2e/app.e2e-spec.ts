import { Ng2projektPage } from './app.po';

describe('ng2projekt App', () => {
  let page: Ng2projektPage;

  beforeEach(() => {
    page = new Ng2projektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
