export default class WelcomeController {
  public async index({ inertia }) {
    return inertia.render('Home', {test: 333});
  }

  public async about({inertia}) {
    return inertia.render('About');
  }
}
