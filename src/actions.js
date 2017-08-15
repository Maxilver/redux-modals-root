import v4 from 'uuid';

import { dataCollectionClean, dataCollectionPush, dataCollectionRemove } from 'redux-data-set';

export function showModal (name, props) {
  return dataCollectionPush('modals', { name, props, id: v4() });
}

export function hideModal (modal) {
  return dataCollectionRemove('modals', { id: modal.id });
}

export function dismissAllModals () {
  return dataCollectionClean('modals');
}
