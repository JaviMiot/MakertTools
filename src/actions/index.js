import actions from './actions';

export const requestPrinterSettings = (payload) => {
  return {
    type: actions.REQUEST_PRINTER_SETTINGS,
    payload,
  };
};
