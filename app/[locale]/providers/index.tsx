import React from "react";
import ThemesProvider from "./themes-provider";
import GTMProvider from "./gtm-provider";
import ContextProvider from "./context-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";

export default function Providers({ children }: { children: React.ReactNode }) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={{
        ...pick(messages, "header"),
        ...pick(messages, "page.gallery"),
      }}
    >
      <ContextProvider>
        <GTMProvider>
          <ThemesProvider>{children}</ThemesProvider>
        </GTMProvider>
      </ContextProvider>
    </NextIntlClientProvider>
  );
}
