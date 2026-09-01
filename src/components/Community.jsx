import Container from './Container'
import { TelegramIcon, MaxIcon } from './icons'
import iconStar from '../assets/icon-star.png'
import iconBook from '../assets/icon-book.png'

const TELEGRAM_HREF = 'https://t.me/+lcxBC-MCz91mZjgy'
const MAX_HREF = 'https://max.ru/join/C69YMAj0bUsbf0DEHIJcq4fBEn_FDYuUkMT3xj-L4DY'

// Декоративные иконки со светлой круглой подложкой (opacity 15-20%),
// частично выступающие за края блока — по духу плавающих иконок в Hero.
const DECOR = [
  // сверху справа — увеличенная звезда из предыдущей версии
  { src: iconStar, size: 84, circle: 124, style: { top: '-32px', right: '18px' } },
  // сверху слева — пара звёзд разного размера
  { src: iconStar, size: 58, circle: 88, style: { top: '-18px', left: '14px' } },
  { src: iconStar, size: 32, circle: 50, style: { top: '4px', left: '76px' } },
  // снизу справа — книга и маленькая звезда рядом
  { src: iconBook, size: 74, circle: 108, style: { bottom: '-28px', right: '68px' } },
  { src: iconStar, size: 28, circle: 44, style: { bottom: '-8px', right: '24px' } },
]

const DEFAULT_SUBTITLE =
  'Полезные материалы для родителей, новости школы, достижения учеников, советы преподавателей и анонсы мероприятий — всё в наших сообществах.'

// Акцент по умолчанию — фиолетовый (главная); на страницах направлений
// с другой цветовой темой передаётся accent. Зелёный светлее фиолетового,
// поэтому текст на нём — navy, а не белый (недостаточно контрастно).
const ACCENT = {
  purple: { solid: 'bg-brand-purple', onSolid: 'text-white', onSolidMuted: 'text-white/80', onWhite: 'text-brand-purple' },
  green: { solid: 'bg-brand-green', onSolid: 'text-brand-navy', onSolidMuted: 'text-brand-navy/70', onWhite: 'text-brand-navy' },
}

function DefaultCta({ onWhite }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={TELEGRAM_HREF}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-3 rounded-button bg-white px-6 py-2.5 font-button text-button shadow-card transition-opacity hover:opacity-90 ${onWhite}`}
      >
        <TelegramIcon className="h-7 w-7 shrink-0 sm:h-[22px] sm:w-[22px]" />
        Перейти в Telegram-канал
      </a>
      <a
        href={MAX_HREF}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-3 rounded-button bg-white px-6 py-2.5 font-button text-button shadow-card transition-opacity hover:opacity-90 ${onWhite}`}
      >
        <MaxIcon className="h-7 w-7 shrink-0 sm:h-[22px] sm:w-[22px]" />
        Перейти в сообщество MAX
      </a>
    </div>
  )
}

// Компактная фиолетовая плашка-приглашение (по образцу "Будьте ближе к
// жизни нашей школы") — переиспользуется и на страницах направлений
// под другой заголовок/CTA, с тем же layout и пропорциями.
export default function Community({
  title = 'Будьте ближе к жизни нашей школы',
  titleMaxWidth = 'max-w-2xl',
  subtitle = DEFAULT_SUBTITLE,
  decor = DECOR,
  children,
  accent = 'purple',
}) {
  const a = ACCENT[accent] ?? ACCENT.purple
  return (
    <section className="bg-bg-white">
      <Container className="py-6 md:py-10">
        <div className={`relative isolate flex flex-col items-center gap-3 rounded-card px-4 py-5 text-center md:gap-4 md:p-6 ${a.solid}`}>
          {decor.map(({ src, size, circle, style }, i) => (
            <span
              key={i}
              className="pointer-events-none absolute -z-10 flex items-center justify-center rounded-full bg-white/15"
              style={{ width: circle, height: circle, ...style }}
            >
              <img
                src={src}
                alt=""
                style={{ width: size, height: size }}
                className="object-contain"
              />
            </span>
          ))}

          <div className="relative z-10 flex flex-col items-center gap-4">
            <h2 className={`${titleMaxWidth} text-[28px] font-bold leading-snug ${a.onSolid}`}>
              {title}
            </h2>

            {subtitle && (
              <p className={`max-w-xl text-caption font-caption leading-snug ${a.onSolidMuted}`}>
                {subtitle}
              </p>
            )}

            {children ?? <DefaultCta onWhite={a.onWhite} />}
          </div>
        </div>
      </Container>
    </section>
  )
}
