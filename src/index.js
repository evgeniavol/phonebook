import {renderPhoneBook, renderContacts} from './script/renders';
import {modalControl, deleteControl, formControl} from './script/controls';
import {getContactData} from './script/storageContacts';

import './scss/index.scss';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel
    } = renderPhoneBook(
      app,
      title
    );
    
    const data = getContactData();
    renderContacts(list, data);
    
    const {
      closeModal
    } = modalControl(btnAdd, formOverlay);
    
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}