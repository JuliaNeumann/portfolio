import React from "react";

export const locales = {
    EN: "EN",
    DE: "DE"
  };
  
export const LocaleContext = React.createContext({
    locale: locales.EN,
    setLocale: (locale) => {}
});