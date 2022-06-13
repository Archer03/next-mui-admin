import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import enUS from '../../locales/en-US'
import zhCN from '../../locales/zh-CN'

type langs = 'en' | 'zh';

function loadLocaleData(locale: langs) {
  switch (locale) {
    case 'en':
      return enUS;
    case 'zh':
      return zhCN;
    default:
      return enUS;
  }
}

export const LangContext = React.createContext<(locale: langs) => void>(() => { });

export default function (props: React.PropsWithChildren) {
  const [locale, setLocale] = useState<langs>('en');
  const messages = loadLocaleData(locale);
  console.log(locale, messages);
  return (
    <LangContext.Provider value={setLocale}>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={messages}
      >
        {props.children}
      </IntlProvider>
    </LangContext.Provider>
  )
}