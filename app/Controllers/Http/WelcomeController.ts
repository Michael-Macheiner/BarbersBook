export default class WelcomeController {
  public async index({ inertia }) {
    return inertia.render('Home', {test: 'Hello from the backend!'})
  }

  public async about({inertia}) {
    return inertia.render('About');
  }
}
