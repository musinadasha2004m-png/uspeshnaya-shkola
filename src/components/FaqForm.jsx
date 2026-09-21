import { useLayoutEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import Container from './Container'
import { TelegramIcon, MaxIcon } from './icons'
import iconStar from '../assets/icon-star.png'
import { CONSULTATION_HREF, CONSULTATION_LINK_PROPS } from '../links'

const TELEGRAM_HREF = 'https://t.me/DariaYSPESHNO'
const MAX_HREF = CONSULTATION_HREF

// Декор по тому же принципу, что в фиолетовой/розовой/синей плашках —
// звёзды со светлой круглой подложкой, частично выступающие за края.
const FAQ_DECOR = [
  { size: 36, circle: 54, style: { top: '-18px', left: '20px' } },
  { size: 24, circle: 38, style: { top: '-10px', right: '100px' } },
  { size: 44, circle: 64, style: { bottom: '-22px', right: '24px' } },
]

const FAQ_ITEMS = [
  {
    question: 'Как проходят занятия?',
    answer:
      'Все занятия проходят онлайн в индивидуальном формате с преподавателем. Для занятий понадобится компьютер или планшет, стабильный интернет и желание учиться.',
  },
  {
    question: 'Как понять, какая программа подойдет моему ребенку?',
    answer:
      'Запишитесь на бесплатную консультацию. Мы узнаем цели, уровень подготовки ребенка и поможем подобрать подходящую программу обучения.',
  },
  {
    question: 'Можно ли поменять преподавателя?',
    answer:
      'Да. Если по каким-либо причинам преподаватель не подойдет, мы подберем другого специалиста.',
  },
  {
    question: 'Что делать, если ребенок пропустил занятие?',
    answer:
      'Свяжитесь с администратором. Мы поможем перенести занятие или предложим другое удобное время.',
  },
  {
    question: 'Как родители узнают о результатах обучения?',
    answer:
      'Каждую четверть мы проводим срез знаний и предоставляем родителям обратную связь о прогрессе ребенка. При необходимости вы всегда можете обратиться к преподавателю или администратору.',
  },
  {
    question: 'Можно ли заниматься из любого города?',
    answer:
      'Да. Обучение полностью проходит онлайн, поэтому заниматься можно из любой точки мира.',
  },
]

function FaqItem({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight)
  }, [])

  return (
    <div className="overflow-hidden rounded-card bg-white shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
      >
        <span className="text-[16px] font-bold text-brand-navy md:text-[18px]">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: isOpen ? height : 0 }}
      >
        <p
          ref={contentRef}
          className="px-5 pb-5 text-[15px] leading-relaxed text-[#5B6180] md:px-6 md:pb-6 lg:text-body-sm"
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FaqForm() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-bg-white" id="faq">
      <Container className="py-10 md:py-14">
        <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Остались вопросы?
          <br className="min-[1407px]:hidden" /> Мы ответили на
          <br className="min-[1407px]:hidden" /> самые популярные
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 md:mt-10 lg:grid-cols-2 lg:gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}

          <div className="relative isolate flex flex-col items-start gap-4 rounded-card bg-brand-yellow p-5 sm:flex-row sm:items-center sm:justify-between md:p-6 lg:col-span-2">
            {FAQ_DECOR.map(({ size, circle, style }, i) => (
              <span
                key={i}
                className="pointer-events-none absolute -z-10 flex items-center justify-center rounded-full bg-white/25"
                style={{ width: circle, height: circle, ...style }}
              >
                <img
                  src={iconStar}
                  alt=""
                  style={{ width: size, height: size }}
                  className="object-contain"
                />
              </span>
            ))}

            <p className="text-[15px] leading-relaxed text-brand-navy lg:text-body-sm">
              Наш администратор всегда на связи и с удовольствием поможет
              разобраться в любой ситуации.
            </p>
            <div className="flex shrink-0 gap-3">
              <a
                href={TELEGRAM_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-button bg-white px-5 py-2.5 font-button text-[15px] text-brand-navy shadow-card transition-opacity hover:opacity-90"
              >
                <TelegramIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                Написать в Telegram
              </a>
              <a
                href={MAX_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-button bg-white px-5 py-2.5 font-button text-[15px] text-brand-navy shadow-card transition-opacity hover:opacity-90"
              >
                <MaxIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                Написать в MAX
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-card bg-white p-6 shadow-card md:p-10 md:mt-14">
          <div>
            <h3 className="text-[24px] font-bold leading-tight text-brand-navy lg:text-h3 lg:font-h3">
              Давайте вместе найдем лучшее решение для обучения вашего
              ребенка
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
              На бесплатной консультации мы познакомимся, ответим на ваши
              вопросы, определим цели ребенка и поможем подобрать программу
              обучения.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <a
              {...CONSULTATION_LINK_PROPS}
              className="inline-flex w-full items-center justify-center rounded-button bg-brand-purple px-8 py-3.5 font-button text-button text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              Записаться на консультацию
            </a>
          </div>

          <div className="mt-8 border-t border-bg-lavender2 pt-6 text-center md:mt-10">
            <p className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
              Предпочитаете написать самостоятельно? Мы всегда на связи и
              будем рады ответить на ваши вопросы.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={TELEGRAM_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-button border border-bg-lavender2 bg-bg-white px-5 py-2.5 font-button text-[15px] text-brand-navy transition-colors hover:bg-bg-lavender3"
              >
                <TelegramIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                Написать в Telegram
              </a>
              <a
                href={MAX_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-button border border-bg-lavender2 bg-bg-white px-5 py-2.5 font-button text-[15px] text-brand-navy transition-colors hover:bg-bg-lavender3"
              >
                <MaxIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                Написать в MAX
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
