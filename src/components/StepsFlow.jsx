import { useEffect, useRef, useState } from 'react'

const COLS_CLASS = {
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-4',
  8: 'xl:grid-cols-4',
}

// Раскладки с числом карточек, не помещающимся в один ряд (7 → 4+3,
// 8 → 4+4), не рисуют горизонтальную соединительную линию — она
// рассчитана на один ряд и не будет совпадать со второй строкой.
const MULTI_ROW_COUNTS = new Set([7, 8])

// Акцент по умолчанию — фиолетовый (главная, "Нейроскорочтение"); на
// страницах направлений с другой цветовой темой передаётся accent.
// По явному решению клиента текст на кружке-номере/кнопке — всегда
// белый (для зелёного это ниже WCAG AA на обычном тексте, но клиент
// предпочёл белый чёрному/navy ради читаемости на глаз).
const ACCENT = {
  purple: { bg: 'bg-brand-purple', text: 'text-white', numText: 'text-brand-purple', hex: '#8A63F6', shadow: 'rgba(138, 99, 246, 0.35)' },
  green: { bg: 'bg-brand-green', text: 'text-white', numText: 'text-brand-green', hex: '#7FD66A', shadow: 'rgba(127, 214, 106, 0.45)' },
}

// Кружки-номера в ряд на десктопе, соединённые линией (заливается по
// мере прокрутки), карточка с текстом под каждым номером; на
// мобильном/планшете — вертикальный список с подсветкой по одной
// карточке при появлении во вьюпорте. Переиспользуется в блоке "Как
// проходит обучение" на главной и в блоке "Путь ребёнка и родителя"
// на страницах направлений.
export default function StepsFlow({
  steps,
  ctaIndex = -1,
  ctaLabel,
  ctaHref = '#',
  accent = 'purple',
  inlineNumbers = false,
  trailingCard,
  equalHeight = false,
}) {
  const a = ACCENT[accent] ?? ACCENT.purple
  const wrapRef = useRef(null)
  const cardRefs = useRef([])
  const [lineProgress, setLineProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState(() => new Set())
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 1280,
  )

  useEffect(() => {
    const update = () => {
      const el = wrapRef.current
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

  const totalCount = steps.length + (trailingCard ? 1 : 0)
  const colsClass = COLS_CLASS[totalCount] || 'xl:grid-cols-6'
  const oneRow = !MULTI_ROW_COUNTS.has(totalCount)

  return (
    <div ref={wrapRef} className="relative mt-8 md:mt-12">
      {/* Вертикальная линия — мобайл/планшет (статичная, без заливки) */}
      <div className="absolute bottom-6 left-8 top-6 w-px bg-bg-lavender2 xl:hidden" />

      {/* Горизонтальная линия — десктоп, с заливкой по скроллу; только
          для раскладок в один ряд, иначе не совпадает со второй строкой */}
      {oneRow && (
        <>
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-bg-lavender2 xl:block" />
          <div
            className={`absolute left-0 top-[42px] hidden h-px transition-[width] duration-500 ease-out xl:block ${a.bg}`}
            style={{ width: `${lineProgress * 100}%` }}
          />
        </>
      )}

      <div className={`grid grid-cols-1 gap-4 xl:gap-4 ${colsClass}`}>
        {steps.map((step, i) => {
          const highlighted = visibleSteps.has(i) && !isDesktop
          return (
            <div
              key={step.title}
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              className={`relative z-10 flex flex-col items-start rounded-card border-2 bg-white p-4 text-left transition-all duration-500 ease-out md:p-5 ${
                i === ctaIndex ? 'pb-3' : ''
              } ${equalHeight ? 'xl:h-[400px]' : ''}`}
              style={{
                borderColor: highlighted ? a.hex : 'transparent',
                boxShadow: highlighted
                  ? `0 12px 32px ${a.shadow}`
                  : '0 10px 28px rgba(27, 36, 85, 0.12)',
              }}
            >
              {inlineNumbers ? (
                <h3 className="flex items-baseline gap-1.5 text-[18px] font-bold leading-snug text-brand-navy">
                  <span className={`shrink-0 text-[22px] font-extrabold ${a.numText}`}>{i + 1}.</span>
                  {step.title}
                </h3>
              ) : (
                <div className="flex w-full items-center gap-3 xl:block">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px] font-bold xl:h-11 xl:w-11 xl:text-[18px] ${a.bg} ${a.text}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[18px] font-bold leading-snug text-brand-navy xl:mt-4 xl:text-[22px]">
                    {step.title}
                  </h3>
                </div>
              )}
              <p className="mt-2 text-[15px] leading-relaxed text-[#5B6180] xl:mt-1 xl:text-body-sm">
                {step.description}
              </p>
              {i === ctaIndex && (
                <a
                  href={ctaHref}
                  className={`mt-2 w-full shrink-0 rounded-button py-1.5 text-center text-[13px] font-bold leading-none transition-opacity hover:opacity-90 ${a.bg} ${a.text}`}
                >
                  {ctaLabel}
                </a>
              )}
            </div>
          )
        })}
        {trailingCard}
      </div>
    </div>
  )
}
