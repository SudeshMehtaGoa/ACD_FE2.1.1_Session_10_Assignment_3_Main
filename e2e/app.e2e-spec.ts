import { S5a3Page } from './app.po';

describe('s5a3 App', () => {
  let page: S5a3Page;

  beforeEach(() => {
    page = new S5a3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
