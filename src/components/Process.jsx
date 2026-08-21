import { useEffect, useRef, useState } from 'react'
import Container from './Container'

const STEPS = [
  {
    title: 'Оставьте заявку',
    description:
      'Выберите удобное время, и наш менеджер свяжется с вами для бесплатной консультации.',
  },
  {
    title: 'Бесплатная консультация',
    description:
      'Обсудим цели, ответим на вопросы и поможем подобрать подходящую программу.',
  },
  {
    title: 'Диагностика знаний',
    description:
      'Преподаватель определит уровень подготовки ребенка и покажет, над чем важно работать.',
  },
  {
    title: 'Начало обучения',
    description:
      'Подбираем преподавателя и начинаем занятия по индивидуальному плану.',
  },
  {
    title: 'Контроль прогресса',
    description:
      'Проводим срезы знаний, даем обратную связь и при необходимости корректируем программу.',
  },
  {
    title: 'Достигаем поставленных целей',
    description:
      'Поддерживаем ребенка на каждом этапе и помогаем двигаться к новым образовательным достижениям.',
  },
]

export default function Process() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const [lineProgress, setLineProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState(() => new Set())
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 1280,
  )

  // Прогресс горизонтальной линии (десктоп, xl+) — доля скролла секции
  // во вьюпорте, 0 (секция ещё не появилась) → 1 (секция полностью
  // прокручена), плавно через CSS transition на ширине заливки.
  // Заодно отслеживаем брейкпоинт xl (1280px) — подсветка карточек
  // нужна только ниже него, на десктопе вместо неё светится линия.
  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      setIsDesktop(window.innerWidth >= 1280)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = (vh - rect.top) / (rect.height + vh)
      setLineProgress(Math.min(1, Math.max(0, raw)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Подсветка карточек по одной при появлении во вьюпорте (мобайл/таб).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSteps((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const idx = Number(entry.target.dataset.index)
            if (entry.isIntersecting) next.add(idx)
            else next.delete(idx)
          })
          return next
        })
      },
      { threshold: 0.4 },
    )
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-bg-white">
      <Container className="py-10 md:py-14">
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Как проходит обучение
        </h2>
        <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] xl:text-body-sm">
          Мы сопровождаем ребенка на каждом этапе — от первой консультации до
          достижения поставленных целей.
        </p>

        <div className="relative mt-8 md:mt-12">
          {/* Вертикальная линия — мобайл/планшет (статичная, без заливки) */}
          <div className="absolute bottom-6 left-8 top-6 w-px bg-bg-lavender2 xl:hidden" />

          {/* Горизонтальная линия — десктоп, с заливкой по скроллу */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-bg-lavender2 xl:block" />
          <div
            className="absolute left-0 top-[42px] hidden h-px bg-brand-purple transition-[width] duration-500 ease-out xl:block"
            style={{ width: `${lineProgress * 100}%` }}
          />

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-6 xl:gap-4">
            {STEPS.map((step, i) => {
              const highlighted = visibleSteps.has(i) && !isDesktop
              return (
                <div
                  key={step.title}
                  ref={(el) => (cardRefs.current[i] = el)}
                  data-index={i}
                  className={`relative z-10 flex flex-col items-start rounded-card border-2 bg-white p-4 text-left transition-all duration-500 ease-out md:p-5 ${
                    i === 1 ? 'pb-3' : ''
                  }`}
                  style={{
                    borderColor: highlighted ? '#8A63F6' : 'transparent',
                    boxShadow: highlighted
                      ? '0 12px 32px rgba(138, 99, 246, 0.35)'
                      : '0 10px 28px rgba(27, 36, 85, 0.12)',
                  }}
                >
                  <div className="flex w-full items-center gap-3 xl:block">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple text-[14px] font-bold text-white xl:h-11 xl:w-11 xl:text-[18px]">
                      {i + 1}
                    </span>
                    <h3 className="text-[18px] font-bold leading-snug text-brand-navy xl:mt-4 xl:text-[22px]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5B6180] xl:mt-1 xl:text-body-sm">
                    {step.description}
                  </p>
                  {i === 1 && (
                    <a
                      href="#"
                      className="mt-2 w-full shrink-0 rounded-button bg-brand-purple py-1.5 text-center text-[13px] font-bold leading-none text-white transition-opacity hover:opacity-90"
                    >
                      Записаться
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
