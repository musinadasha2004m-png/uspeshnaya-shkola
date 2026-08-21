import { ArrowRight, Calendar, TrendingUp, Users } from 'lucide-react'
import Container from './Container'
import heroBoy from '../assets/hero-boy.png'
import iconBrain from '../assets/icon-brain.png'
import iconLightbulb from '../assets/icon-lightbulb.png'
import iconBook from '../assets/icon-book.png'
import iconStar from '../assets/icon-star.png'
import iconTarget from '../assets/icon-target.png'
import iconBackpack from '../assets/icon-backpack.png'

const STATS = [
  { icon: Users, value: '300+', label: 'учеников', tint: 'bg-brand-purple/15 text-brand-purple' },
  {
    icon: TrendingUp,
    value: '87',
    label: 'средний балл ЕГЭ',
    tint: 'bg-brand-yellow/25 text-brand-yellow',
  },
  {
    icon: Calendar,
    value: '5 лет',
    label: 'работаем для ваших детей',
    tint: 'bg-brand-green/20 text-brand-green',
  },
]

// Иконки расставлены строго радиально от центра круга-подложки
// (50%/50%): каждая сидела точно на его окружности (радиус 42%
// контейнера), теперь отодвинута дальше от центра вдоль той же линии
// на +17.5% (середина диапазона 15–20%) — расстояния друг от друга и
// пропорции сохранены, просто весь узор чуть крупнее. Зоны — по
// design/homepage-reference.png, нижняя дуга (силуэт мальчика) пустая.
// Размер (width) одинаковый у всех — эталон взят с иконки мозга.
const ICON_SIZE = 68
// На мобильных (узкий квадрат-контейнер) фото мальчика занимает почти
// всю высоту вплотную к верхнему краю — верхние две иконки (мозг,
// звезда) на исходном top:5.4% заезжают на фото. mobileTop поднимает
// их выше, за верхний край подложки, только до sm; с sm — как задумано.
const FLOATING_ICONS = [
  { src: iconBrain, alt: '', left: '30%', top: '5.4%', mobileTop: '-6%', width: ICON_SIZE, rotate: -8, delay: 0, duration: 4.6 },
  { src: iconStar, alt: '', left: '70%', top: '5.4%', mobileTop: '-6%', width: ICON_SIZE, rotate: 8, delay: 0.9, duration: 5 },
  { src: iconLightbulb, alt: '', left: '97%', top: '34.7%', mobileTop: '34.7%', width: ICON_SIZE, rotate: -4, delay: 0.4, duration: 5.2 },
  { src: iconBackpack, alt: '', left: '92.3%', top: '74.7%', mobileTop: '74.7%', width: ICON_SIZE, rotate: 8, delay: 1.1, duration: 4.4 },
  { src: iconTarget, alt: '', left: '7.7%', top: '74.7%', mobileTop: '74.7%', width: ICON_SIZE, rotate: -14, delay: 0.2, duration: 5 },
  { src: iconBook, alt: '', left: '3%', top: '34.7%', mobileTop: '34.7%', width: ICON_SIZE, rotate: -15, delay: 1.5, duration: 4.8 },
]

export default function Hero() {
  return (
    <section className="bg-bg-white">
      <Container className="grid gap-16 py-6 md:py-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h1 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Поможем вашему ребенку стать успешным и уверенным в себе
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Подготовка к школе, предметные репетиторы, нейроскорочтение,
            подготовка к ВПР, ОГЭ и ЕГЭ, профориентация — всё, что нужно
            ребенку для успешной учебы.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map(({ icon: Icon, value, label, tint }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-card bg-bg-white p-3 shadow-card"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${tint}`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[20px] font-extrabold text-brand-navy lg:text-h4">
                    {value}
                  </span>
                  <span className="text-[13px] font-caption text-brand-navy/60 lg:text-caption">
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-button bg-brand-purple px-8 py-3.5 font-button text-button text-white transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
              <ArrowRight size={20} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-button border border-bg-lavender2 bg-bg-white px-8 py-3.5 font-button text-button text-brand-navy transition-colors hover:bg-bg-lavender3"
            >
              Выбрать направление
              <ArrowRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[480px]">
          <div className="absolute inset-[8%] rounded-full bg-bg-lavender2/40" />
          <div className="absolute inset-[10%] rounded-full border border-dashed border-bg-lavender2" />

          <img
            src={heroBoy}
            alt="Ученик «Успешной школы»"
            className="absolute left-1/2 top-1/2 z-10 h-[92%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
          />

          {FLOATING_ICONS.map(({ src, alt, left, top, mobileTop, width, rotate, delay, duration }, i) => (
            <div
              key={i}
              className="absolute z-20 top-[var(--top-mobile)] sm:top-[var(--top-desktop)]"
              style={{ left, '--top-mobile': mobileTop, '--top-desktop': top, transform: 'translate(-50%, -50%)' }}
            >
              <div
                className="animate-hero-float"
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{ transform: `rotate(${rotate}deg)`, '--icon-w': `${width}px` }}
                  className="h-auto w-[46px] max-w-none drop-shadow-[0_8px_16px_rgba(27,36,85,0.12)] sm:w-[56px] lg:w-[var(--icon-w)]"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
