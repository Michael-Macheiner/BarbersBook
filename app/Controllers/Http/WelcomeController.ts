export default class WelcomeController {
  public async index({ inertia }) {
    return inertia.render('Home', {test: 123});
  }

  public async about({inertia}) {
    return inertia.render('About');
  }
}
