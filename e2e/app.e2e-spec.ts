import { RxjsArticlePage } from './app.po';

describe('rxjs-article App', () => {
  let page: RxjsArticlePage;

  beforeEach(() => {
    page = new RxjsArticlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
