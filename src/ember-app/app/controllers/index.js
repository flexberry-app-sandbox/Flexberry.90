import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.9-0.caption'),
          title: i18n.t('forms.application.sitemap.9-0.title'),
          children: [{
            link: 'i-i-s-9-0-здание-l',
            caption: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-здание-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-9-0-город-l',
            caption: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-город-l.caption'),
            title: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-город-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-9-0-метеостанция-l',
            caption: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-метеостанция-l.caption'),
            title: i18n.t('forms.application.sitemap.9-0.i-i-s-9-0-метеостанция-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-9-0-здание-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-здание-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-9-0-город-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-город-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-город-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-9-0-метеостанция-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-метеостанция-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-9-0-метеостанция-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})