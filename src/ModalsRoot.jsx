import React from 'react';
import { connect } from 'react-redux';
import { collectionSelector } from 'redux-data-set';
import * as _ from 'lodash';

import { hideModal } from './';

const MODALS = new Map();

function ModalsRoot ({ modals, hideModal }) {
  const activeModals = _.map(modals, modal => {
    const handleHide = () => hideModal(modal);

    if (MODALS.has(modal.name)) {
      const ModalComponent = MODALS.get(modal.name);
      return <ModalComponent key={modal.id} onHide={handleHide} {...modal.props} />;
    }

    return null;
  });

  return (
    <div className="modals-root">
      {activeModals}
    </div>
  );
}

ModalsRoot.addModal = function (name, Component) {
  MODALS.set(name, Component);
};

export default connect(state => ({ modals: collectionSelector(state, 'modals') }), { hideModal })(ModalsRoot);
