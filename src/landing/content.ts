export type ContactInfo = {
  phone: string
  email: string
  addressNote: string
}

export type MethodItem = {
  short: string
  full?: string
}

export type DocumentItem = {
  label: string
  value: string
}

export const landingContent = {
  company: {
    name: 'Лаборатория неразрушающего контроля',
    legal: 'ООО "НКМ-ЭКСПЕРТ"',
  },
  hero: {
    title:
      'Проведем контроль качества сварных соединений любых типов и сложностей различными методами неразрушающего контроля',
    methodsInline: '(ВИК, УЗК, РК, ПВК, ПВТ, МПК, ЭК)',
  },
  methods: [
    { short: 'ВИК', full: 'Визуально-измерительный контроль' },
    { short: 'УЗК', full: 'Ультразвуковой контроль' },
    { short: 'РК', full: 'Радиографический контроль' },
    { short: 'ПВК' },
    { short: 'ПВТ' },
    { short: 'МПК', full: 'Магнитопорошковый контроль' },
    { short: 'ЭК' },
  ] satisfies MethodItem[],
  documents: [
    { label: 'Аттестация лаборатории', value: 'СНК № ЛНК-098А0140' },
    { label: 'Аттестация персонала', value: 'II уровень' },
    { label: 'Нормативная база', value: 'Работы выполняются по ГОСТ и РД' },
  ] satisfies DocumentItem[],
  geography: [
    'Работаем по всей территории РФ',
    'Выезд на объект заказчика',
    'Москва',
  ],
  reasons: [
    'Аттестованная лаборатория',
    'Персонал с аттестацией II уровня',
    'Работы по ГОСТ и РД',
    'Выезд на объект заказчика',
  ],
  contacts: {
    phone: '+7 981 909-06-38',
    email: 'nkmexpert@gmail.com',
    addressNote: 'Адрес: по запросу',
  } satisfies ContactInfo,
} as const

