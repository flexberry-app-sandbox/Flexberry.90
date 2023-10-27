import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS9_0ГородLForm from './forms/i-i-s-9-0-город-l';
import IIS9_0ЗданиеLForm from './forms/i-i-s-9-0-здание-l';
import IIS9_0МетеостанцияLForm from './forms/i-i-s-9-0-метеостанция-l';
import IIS9_0ГородEForm from './forms/i-i-s-9-0-город-e';
import IIS9_0ЗданиеEForm from './forms/i-i-s-9-0-здание-e';
import IIS9_0МетеостанцияEForm from './forms/i-i-s-9-0-метеостанция-e';
import IIS9_0ГородModel from './models/i-i-s-9-0-город';
import IIS9_0ЗданиеModel from './models/i-i-s-9-0-здание';
import IIS9_0МетеостанцияModel from './models/i-i-s-9-0-метеостанция';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-9-0-город': IIS9_0ГородModel,
    'i-i-s-9-0-здание': IIS9_0ЗданиеModel,
    'i-i-s-9-0-метеостанция': IIS9_0МетеостанцияModel
  },

  'application-name': '9_0',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '9_0',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '9_0',
          title: '9_0'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        '9-0': {
          caption: '9_0',
          title: '9_0',
          'i-i-s-9-0-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-9-0-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-9-0-метеостанция-l': {
            caption: 'Метеостанция',
            title: ''
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-9-0-здание-l': {
            caption: 'ЗданиеL',
            title: 'Здание'
          },
          'i-i-s-9-0-город-l': {
            caption: 'ГородL',
            title: 'Город'
          },
          'i-i-s-9-0-метеостанция-l': {
            caption: 'МетеостанцияL',
            title: 'Метеостанция'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-9-0-город-l': IIS9_0ГородLForm,
    'i-i-s-9-0-здание-l': IIS9_0ЗданиеLForm,
    'i-i-s-9-0-метеостанция-l': IIS9_0МетеостанцияLForm,
    'i-i-s-9-0-город-e': IIS9_0ГородEForm,
    'i-i-s-9-0-здание-e': IIS9_0ЗданиеEForm,
    'i-i-s-9-0-метеостанция-e': IIS9_0МетеостанцияEForm
  },

});

export default translations;
