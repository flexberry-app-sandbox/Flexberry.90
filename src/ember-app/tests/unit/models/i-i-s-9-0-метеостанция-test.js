import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-9-0-метеостанция', 'Unit | Model | i-i-s-9-0-метеостанция', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-9-0-город',
    'model:i-i-s-9-0-здание',
    'model:i-i-s-9-0-метеостанция',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
