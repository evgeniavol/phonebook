import {
  renderPhoneBook,
  renderContacts
} from './modules/renders.js';

import {
  modalControl,
  deleteControl,
  formControl
} from './modules/controls.js';

import {getContactData} from './modules/storageContacts.js';
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

    //Функционал
    
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