import { Serializer as МетеостанцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-9-0-метеостанция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МетеостанцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
