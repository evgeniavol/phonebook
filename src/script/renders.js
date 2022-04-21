import {
    createImageLogo,
    createContainer,
    createHeader,
    createLogo,
    createMain,
    createButtonsGroup,
    createTable,
    createForm,
    createFooter,
    text,
    createRow
} from './createElems.mjs';



export const renderPhoneBook = (app, title) => {
    const header = createHeader();
    const logo = createLogo(title);
    const imageLogo = createImageLogo();
    const main = createMain();
    const footer = createFooter();
    const footerText = text(title);
    const buttonGroup = createButtonsGroup([{
            className: "btn btn-primary mr-3",
            type: "button",
            text: "Добавить",
        },
        {
            className: "btn btn-danger",
            type: "button",
            text: "Удалить",
        },
    ]);

    const table = createTable();
    const {
        form,
        overlay
    } = createForm();

    header.headerContainer.append(imageLogo, logo);
    main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
    footer.footerContainer.append(footerText);
    app.append(header, main, footer);

    return {
        list: table.tbody,
        logo,
        btnAdd: buttonGroup.btns[0],
        btnDel: buttonGroup.btns[1],
        formOverlay: overlay,
        form,
    };
};


export const renderContacts = (elem, data) => {
    const allRow = data.map(createRow);
    elem.append(...allRow);
    return allRow;
};