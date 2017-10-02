import { MyTourOfHeroesPage } from './app.po';

describe('my-tour-of-heroes App', () => {
  let page: MyTourOfHeroesPage;

  beforeEach(() => {
    page = new MyTourOfHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
