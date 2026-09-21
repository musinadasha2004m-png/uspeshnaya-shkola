// Единая ссылка для всех кнопок записи (консультация / диагностика) —
// личный аккаунт администратора в MAX. Менять адрес нужно только здесь.
export const CONSULTATION_HREF =
  'https://max.ru/u/f9LHodD0cOIAsGNqHrsBHmBuQ_E92Z2BhD2_J4ybwT0oPafu1hB_p2op9YA'

// Разворачивается прямо в <a {...CONSULTATION_LINK_PROPS}>.
export const CONSULTATION_LINK_PROPS = {
  href: CONSULTATION_HREF,
  target: '_blank',
  rel: 'noreferrer',
}
