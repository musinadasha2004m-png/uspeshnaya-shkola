import { useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { LogoMark, MaxIcon, TelegramIcon, WhatsAppIcon } from './icons'
import Container from './Container'

const DIRECTIONS = [
  { label: 'Подготовка к школе', href: '#' },
  { label: 'Предметные репетиторы', href: '#' },
  { label: 'Нейроскорочтение', href: '#' },
  { label: 'Подготовка к ВПР', href: '#' },
  { label: 'Подготовка к ОГЭ', href: '#' },
  { label: 'Подготовка к ЕГЭ', href: '#' },
  { label: 'Профориентация', href: '#' },
]

const NAV_LINKS = [
  { label: 'Главная', href: '/' },
  { label: 'О школе', href: '#about' },
  { label: 'Успехи учеников', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
]

const PHONE_DISPLAY = '8 (933) 025-27-73'
const PHONE_TEL = 'tel:+79330252773'
const WHATSAPP_HREF = 'https://wa.me/79330252773'
const TELEGRAM_HREF = 'https://t.me/DariaYSPESHNO'
const MAX_HREF = 'https://max.ru/join/C69YMAj0bUsbf0DEHIJcq4fBEn_FDYuUkMT3xj-L4DY'

function SocialIcons({ size = 32 }) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={TELEGRAM_HREF}
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
        className="transition-opacity hover:opacity-80"
      >
        <TelegramIcon width={size} height={size} />
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="transition-opacity hover:opacity-80"
      >
        <WhatsAppIcon width={size} height={size} />
      </a>
      <a
        href={MAX_HREF}
        target="_blank"
        rel="noreferrer"
        aria-label="MAX"
        className="transition-opacity hover:opacity-80"
      >
        <MaxIcon width={size} height={size} />
      </a>
    </div>
  )
}

export default function Header() {
  const [directionsOpen, setDirectionsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-bg-lavender2 bg-bg-white">
      <div className="hidden border-b border-bg-lavender2 md:block">
        <Container className="flex items-center justify-between py-2.5 text-caption font-caption text-brand-navy/70">
          <p>Обучаем детей онлайн из любой точки мира</p>
          <div className="flex items-center gap-6">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 font-semibold text-brand-navy transition-colors hover:text-brand-purple"
            >
              <Phone size={18} strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <SocialIcons size={32} />
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <a
          href="/"
          className="flex shrink-0 items-center gap-1.5 self-center whitespace-nowrap"
        >
          <LogoMark className="h-6 w-6 shrink-0" />
          <span className="whitespace-nowrap text-[18px] font-extrabold leading-none tracking-tight text-brand-navy">
            УСПЕШНОшкола
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          <a
            href={NAV_LINKS[0].href}
            className="font-caption text-caption text-brand-navy transition-colors hover:text-brand-purple"
          >
            {NAV_LINKS[0].label}
          </a>

          <div
            className="relative"
            onMouseEnter={() => setDirectionsOpen(true)}
            onMouseLeave={() => setDirectionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDirectionsOpen((v) => !v)}
              aria-expanded={directionsOpen}
              className="flex items-center gap-1 font-caption text-caption text-brand-navy transition-colors hover:text-brand-purple"
            >
              Направления обучения
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={`transition-transform ${directionsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {directionsOpen && (
              <div className="absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3">
                <div className="rounded-card border border-bg-lavender2 bg-bg-white p-2 shadow-card">
                  {DIRECTIONS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 font-caption text-caption text-brand-navy transition-colors hover:bg-bg-lavender3 hover:text-brand-purple"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-caption text-caption text-brand-navy transition-colors hover:text-brand-purple"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="hidden shrink-0 self-center rounded-button bg-brand-purple px-5 py-2.5 text-sm font-semibold leading-none text-white transition-opacity hover:opacity-90 xl:inline-block"
        >
          Записаться на консультацию
        </button>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-brand-navy xl:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-bg-lavender2 xl:hidden">
          <Container className="pb-6 pt-4">
            <nav className="flex flex-col gap-4">
            <a
              href={NAV_LINKS[0].href}
              className="font-caption text-caption text-brand-navy"
            >
              {NAV_LINKS[0].label}
            </a>

            <div>
              <button
                type="button"
                onClick={() => setDirectionsOpen((v) => !v)}
                aria-expanded={directionsOpen}
                className="flex w-full items-center justify-between font-caption text-caption text-brand-navy"
              >
                Направления обучения
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`transition-transform ${directionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {directionsOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {DIRECTIONS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-1 font-caption text-caption text-brand-navy/80"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-caption text-caption text-brand-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="mt-5 w-full rounded-button bg-brand-purple px-6 py-3 font-button text-button text-white"
          >
            Записаться на консультацию
          </button>

          <div className="mt-5 flex items-center justify-between border-t border-bg-lavender2 pt-4">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 font-semibold text-brand-navy"
            >
              <Phone size={18} strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <SocialIcons size={30} />
          </div>
        </Container>
        </div>
      )}
    </header>
  )
}
