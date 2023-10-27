import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '9_0',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '9_0',
          title: '9_0'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
