import { DatingSitePage } from './app.po';

describe('dating-site App', () => {
  let page: DatingSitePage;

  beforeEach(() => {
    page = new DatingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
