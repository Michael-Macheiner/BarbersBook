/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import Route from '@ioc:Adonis/Core/Route'

Route.get('/home', async (ctx) => {
  const { default: WelcomeController } = await import(
    'App/Controllers/Http/WelcomeController'
    )
  return new WelcomeController().index(ctx)
})


Route.get('/test', async ({ view }) => {
  return view.render('test')
}).middleware(['verifyEmail'])



Route.get('/', 'WelcomeController.index')
Route.get('/about', 'WelcomeController.about')

Route.get('/login-view', 'WelcomeController.login')
Route.get('/register-view', 'WelcomeController.register')

Route.get('/customers', 'CustomersController.index')
Route.get('/calendar', 'CalendarController.index')

//Auth routes
Route.post('/auth/register', 'AuthController.register').as('auth.register')
Route.post('/auth/login', 'AuthController.login').as('auth.login')
Route.get('/auth/logout', 'AuthController.logout').as('auth.logout')

//Verify email routes
Route.get('/verify/email', 'VerifyEmailController.index').as('verify.email').middleware(['auth'])
Route.get('/verify/email/:token', 'VerifyEmailController.verify').as('verify.email.verify')

//Password reset routes
Route.get('/password/forgot', 'PasswordResetController.forgot').as('password.forgot')
//TODO: FIX
Route.get('ResetPW', 'PasswordResetController.forgot').as('ResetPW')
Route.post('/password/send', 'PasswordResetController.send').as('password.send')
Route.get('/password/reset/:token', 'PasswordResetController.reset').as('password.reset')
Route.post('/password/store', 'PasswordResetController.store').as('password.store')
