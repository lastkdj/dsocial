import React, { createContext, useState } from "react";
import MensajesEsp from "../Lang/es-CL.json";
import MensajesEng from "../Lang/en-US.json";
import MensajesFr from "../Lang/fr-FR.json";
import { IntlProvider } from "react-intl";

const langContext = createContext("");

const LangProvider = ({ children }) => {
  const [locale, setLocale] = useState("es-CL");
  const [mensajes, setMensajes] = useState(MensajesEsp);

  const setLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-CL":
        setLocale("es-CL");
        setMensajes(MensajesEsp);
        break;

      case "fr-FR":
        setLocale("fr-FR");
        setMensajes(MensajesFr);
        break;

      case "en-US":
        setLocale("en-US");
        setMensajes(MensajesEng);
        break;
    }
  };

  return (
    <langContext.Provider value={{ setLenguaje: setLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
