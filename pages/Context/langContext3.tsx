import React, { createContext, useState, useMemo, useContext } from "react";
import MensajesEsp from "../Lang/es-CL.json";
import MensajesEng from "../Lang/en-US.json";
import MensajesFr from "../Lang/fr-FR.json";
import { IntlProvider } from "react-intl";

const langContext = createContext("");

export function LangProvider(children: any) {
  const [locale, setLocale] = useState("es-CL");
  const [mensajes, setMensajes] = useState(MensajesEsp);

  const setLenguaje = (lenguaje: any) => {
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

  const value = useMemo(() => {
    return {
      setLenguaje,
    };
  }, [locale, mensajes]);

  return (
    <langContext.Provider value={value}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}

export function Menu() {
  const context = useContext(langContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
