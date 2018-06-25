import { flattenObject } from '../utils';

/* eslint-disable max-len */
export default {
  lang: 'en',
  messages: flattenObject({
    breadcrumbs: {
      home: 'Home',
      catalog: 'Catalog',
      consoles: 'Consoles',
      games: 'Games',
    },
    header: {
      home: 'Homepage',
      catalog: 'Catalog',
      about: 'About',
      download: 'Download',
      pay: 'Pay',
      logout: 'Log out',
      profile: 'My Profile',
      login: 'Log in',
      signup: 'Sign up',
      emptyNotifications: 'You have no unreaded notifications.',
    },
    submenu: {
      consoles: 'Consoles',
      games: 'Games',
      demo: 'Download Demo',
      search: 'Search games',
    },
    catalog: {
      buyButton: 'Buy subscription',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'Now it\'s type to choose the console to play!',
      },
    },
    login: {
      title: 'Log in',
      forgotPassword: 'I\'ve forgot my password',
      signup: 'Sign up',
      form: {
        identifier: 'Email or Username',
        password: 'Password',
        submit: 'Login',
      },
    },
    register: {
      title: 'Sign up',
      form: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        passwordCheck: 'And password one more time to be sure',
        submit: 'Register',
      },
    },
    profile: {
      email: 'Email',
      changeEmail: 'Change',
      password: 'Password',
      changePassword: 'Change',
      paymentsHistory: 'Payments History',
      noPayments: 'You have no payments yet',
      subscriptionHistory: 'Subscription History',
      subscriptionDays: '{days} day(s)',
      subscriptionDaysLeft: '{days} day(s) left',
      noSubscriptions: 'You have no subscriptions yet',
      seePayment: 'See Payment',
    },
    changePassword: {
      title: 'Change Password',
      form: {
        password: 'Password',
        passwordConfirmation: 'Password confirmation',
        submit: 'Change Password',
      },
    },
    pay: {
      title: 'Buy Subscription',
      buyButton: 'Buy',
      consoleGroup: {
        title: 'You choosed {name} console! That\'s cool!',
        body: 'Now choose the subscription which is best for you.',
      },
    },
    consoleGroupDetails: {
      games: 'Games included',
      buyButton: 'Buy subscription',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'You can choose this type of console to play!',
      },
    },
    gameDetails: {
      consoleGroups: 'This game are avalaible on',
      buyButton: 'Buy subscription to play this game',
      trailer: 'Check out the trailer',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'You can choose this game and we\'ll provide you with console!',
      },
    },
    passwordRecovery: {
      title: 'Password Recovery',
      success: 'Your recovery request was accepted. Check out your email to continue.',
      form: {
        email: 'Email',
        submit: 'Recover',
      },
    },
  }),
};
