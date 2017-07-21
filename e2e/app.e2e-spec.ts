import { CBDesignerPage } from './app.po';

describe('cbdesigner App', () => {
  let page: CBDesignerPage;

  beforeEach(() => {
    page = new CBDesignerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
