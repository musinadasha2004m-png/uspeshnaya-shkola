import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import StepsFlow from '../components/StepsFlow'
import Testimonials, { CASES } from '../components/Testimonials'
import ParentReviews, { REVIEWS } from '../components/ParentReviews'
import iconBrain from '../assets/icon-brain.png'
import iconBook from '../assets/icon-book.png'
import iconLightbulb from '../assets/icon-lightbulb.png'
import iconStar from '../assets/icon-star.png'
import iconTarget from '../assets/icon-target.png'

// Буквы вокруг мозга в hero — просто цветной текст, без подложки.
// Цвета идут по палитре токенов, при нехватке — повторяются.
const LETTER_COLORS = [
  'text-brand-purple',
  'text-brand-yellow',
  'text-brand-blue',
  'text-brand-green',
  'text-brand-pink',
]

// Расставлены по кругу вокруг мозга (7 точек, ~51° друг от друга), как
// иконки вокруг фото ребёнка в Hero на главной, но с разбросом —
// у каждой буквы свой радиус (±15–20% от базового), угол поворота
// (-15…15°) и размер шрифта, чтобы не выглядело как ровный штамп.
const BRAIN_LETTERS = [
  { letter: 'А', left: '50%', top: '10%', rotate: -8, size: 36, delay: 0, duration: 4.6 },
  { letter: 'Б', left: '87%', top: '22%', rotate: 12, size: 50, delay: 0.3, duration: 5 },
  { letter: 'В', left: '92%', top: '59%', rotate: -14, size: 32, delay: 0.6, duration: 4.4 },
  { letter: 'Г', left: '71%', top: '94%', rotate: 6, size: 46, delay: 0.9, duration: 5.2 },
  { letter: 'Д', left: '31%', top: '87%', rotate: 15, size: 40, delay: 1.2, duration: 4.8 },
  { letter: 'Е', left: '7%', top: '61%', rotate: -5, size: 34, delay: 1.5, duration: 5 },
  { letter: 'Ж', left: '14%', top: '23%', rotate: 10, size: 44, delay: 1.8, duration: 4.6 },
]

const WHO_FOR_INTRO =
  'Направление — для дошкольников и учеников начальной школы, а также для детей постарше, если есть трудности с чтением, пониманием текста или обработкой информации.'

const WHO_FOR = [
  'читает медленно',
  'не понимает смысл прочитанного',
  'быстро устаёт при чтении',
  'не любит читать',
  'испытывает сложности с концентрацией внимания',
  'подолгу выполняет домашние задания',
  'испытывает трудности с запоминанием информации',
]

const METHOD_TEXT =
  'В основе — нейропсихологический подход методики Регины Казарян. Его задача не в том, чтобы научить ребёнка быстрее произносить слова, а в том, чтобы перестроить процессы обработки информации мозгом.'

const METHOD_SKILLS = [
  'внимание',
  'концентрация',
  'память',
  'периферическое зрение',
  'межполушарное взаимодействие',
  'логическое мышление',
  'скорость обработки информации',
  'понимание текста',
  'навык анализа прочитанного',
]

// Иконки — не к каждому пункту, только там, где ассоциация читается
// сразу (по смыслу слова), для визуального акцента, а не подписи.
const METHOD_ICONS = {
  внимание: iconTarget,
  память: iconBrain,
  'логическое мышление': iconLightbulb,
  'понимание текста': iconBook,
}

// Круговая композиция (десктоп, xl+) — по образцу диаграммы "Почему нам
// доверяют" с главной: центральный круг + пункты вокруг него овальными
// плашками, соединённые тонкими линиями. 9 пунктов не делятся поровну
// на строки, поэтому — 5 слева / 4 справа, как в Trust.jsx, но без
// "лепестков": только мягкие rounded-full плашки.
const METHOD_CENTER_LABEL = 'Нейропсихологический подход'
const METHOD_DIAGRAM_W = 1040
const METHOD_DIAGRAM_H = 480
const METHOD_CENTER_X = 520
const METHOD_CENTER_Y = 240
const METHOD_CIRCLE_R = 100
const METHOD_CARD_W = 340
const METHOD_GAP = 36
const METHOD_LEFT_Y = [30, 148, 240, 332, 450]
const METHOD_RIGHT_Y = [60, 190, 290, 420]

function methodEdgeX(isLeft) {
  return isLeft
    ? METHOD_CENTER_X - METHOD_CIRCLE_R - METHOD_GAP
    : METHOD_CENTER_X + METHOD_CIRCLE_R + METHOD_GAP
}

function methodLeftX(isLeft) {
  const edge = methodEdgeX(isLeft)
  return isLeft ? edge - METHOD_CARD_W : edge
}

function methodPosition(i) {
  const isLeft = i < 5
  const row = isLeft ? i : i - 5
  const y = isLeft ? METHOD_LEFT_Y[row] : METHOD_RIGHT_Y[row]
  return { isLeft, y, left: methodLeftX(isLeft) }
}

const PROGRAM_TEXT =
  'Слово «нейро» в названии — не маркетинговый приём, а суть метода. Ребёнок не просто читает тексты, а выполняет упражнения, которые активизируют разные участки мозга и формируют новые нейронные связи:'

const PROGRAM_ITEMS = [
  'нейроигры',
  'упражнения на внимание',
  'задания на развитие памяти',
  'упражнения для периферического зрения',
  'задания на координацию',
  'развитие слухового восприятия',
  'упражнения на переключение внимания',
  'задания на понимание текста',
  'упражнения на скорость мышления',
]

const PROGRAM_ICONS = {
  нейроигры: iconStar,
  'задания на развитие памяти': iconBrain,
  'задания на координацию': iconTarget,
  'задания на понимание текста': iconBook,
  'упражнения на скорость мышления': iconLightbulb,
}

const PATH_STEPS = [
  {
    title: 'Бесплатная консультация',
    description:
      'Определяем, с какими именно сложностями сталкивается ребёнок, и подбираем оптимальную программу под его возраст и уровень.',
  },
  {
    title: 'Онлайн-занятия',
    description:
      'Полностью дистанционно, в Zoom или Яндекс Телемост. Небольшие группы (4–10 человек) или индивидуально. Яркая, красочная методика с печатными пособиями (рабочая тетрадь и тексты для чтения). Каждые несколько минут — смена активности, поэтому даже дети 6–7 лет спокойно занимаются 90 минут без потери внимания.',
  },
  {
    title: 'Постоянная обратная связь с родителями',
    description:
      'На связи вне уроков в Telegram, отвечаем на вопросы по успеваемости и занятиям.',
  },
  {
    title: 'Отслеживание результатов',
    description:
      'Регулярно измеряем скорость чтения и отслеживаем, с какими заданиями у ребёнка ещё остаются сложности, при необходимости корректируем программу.',
  },
  {
    title: 'Результат',
    description:
      'Ребёнок становится увереннее не только в чтении, но и в любом школьном предмете.',
  },
]

const ONLINE_EASY_TITLE = 'Онлайн — это не сложно, даже для дошкольников'
const ONLINE_EASY_TEXT =
  'Формат подходит и по-настоящему увлекает даже детей 5–6 лет — занятия построены как игра, с постоянной сменой активности, а не как урок за партой. Если сомневаетесь, подойдёт ли это именно вашему ребёнку — убедиться проще всего на бесплатной диагностике: за одну встречу будет видно, комфортно ли ребёнку в таком формате.'

const RESULTS = [
  'скорость чтения увеличивается в несколько раз',
  'ребёнок начинает понимать смысл прочитанного',
  'улучшается пересказ',
  'повышается концентрация внимания',
  'развивается память',
  'улучшается почерк',
  'уменьшается количество ошибок при письме',
  'ребёнок становится более самостоятельным',
  'домашние задания выполняются быстрее',
  'повышается успеваемость сразу по нескольким предметам',
  'появляется уверенность в собственных силах',
  'снижается уровень стресса в семье',
]

const NEURO_CASES = CASES.filter((c) => c.tag === 'Скорочтение')
const NEURO_REVIEWS = REVIEWS.filter((r) => r.subject === 'Скорочтение')

// Декор для сплошных фиолетовых/синих плашек — по тому же принципу,
// что в блоке "Будьте ближе к жизни нашей школы" на главной.
const MID_CTA_DECOR = [
  { size: 46, circle: 68, style: { top: '-22px', left: '10%' } },
  { size: 28, circle: 44, style: { bottom: '-14px', left: '28%' } },
  { size: 56, circle: 82, style: { bottom: '-28px', right: '8%' } },
]

export default function NeuroskorochtenieDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-10">
            <div>
              <h1 className="text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
                Нейроскорочтение
              </h1>

              <div className="mt-6 rounded-card border-l-4 border-brand-purple bg-brand-purple/5 p-5 md:mt-8 md:p-8">
                <p className="text-[20px] font-bold italic leading-snug text-brand-purple md:text-[26px]">
                  Нейропрограмма успешной учёбы
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                  Скорочтение — это не про то, чтобы просто быстрее
                  произносить слова. Это про то, чтобы ребёнок понимал,
                  осмыслял и анализировал прочитанное, умел быстро находить
                  ответ на вопрос учителя, удерживал внимание на большом
                  объёме информации и запоминал главное. Мы развиваем именно
                  те навыки, которые нужны для лёгкой учёбы: понимание
                  текста, анализ, память, усидчивость и скорость обработки
                  информации — а быстрое чтение становится приятным побочным
                  результатом, а не самоцелью.
                </p>
              </div>
            </div>

            {/* Декоративная композиция — по духу Hero главной страницы:
                статичный мозг на круглой подложке в центре, вокруг —
                плавающие буквы-кружки по кругу, вместо фото ребёнка. */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[360px] lg:block">
              {/* Мозг в центре — главный элемент композиции, полностью
                  статичен, без анимации */}
              <div className="absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-purple/10">
                <img
                  src={iconBrain}
                  alt=""
                  className="h-auto w-36 max-w-none drop-shadow-[0_10px_20px_rgba(27,36,85,0.18)]"
                />
              </div>

              {BRAIN_LETTERS.map(({ letter, left, top, rotate, size, delay, duration }, i) => (
                <div
                  key={letter}
                  className="absolute"
                  style={{ left, top, transform: 'translate(-50%, -50%)' }}
                >
                  <div
                    className="animate-hero-float"
                    style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
                  >
                    <span
                      className={`inline-block font-extrabold leading-none ${LETTER_COLORS[i % LETTER_COLORS.length]}`}
                      style={{ fontSize: `${size}px`, transform: `rotate(${rotate}deg)` }}
                    >
                      {letter}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Кому подходит */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Кому подходит
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHO_FOR_INTRO}
          </p>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-brand-purple">
            Чаще всего к нам обращаются, если ребёнок:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
            {WHO_FOR.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-card bg-white p-4 shadow-card"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                  {item}
                </span>
              </div>
            ))}

            <div className="flex flex-col items-start justify-center gap-3 rounded-card bg-brand-purple p-4 shadow-card">
              <p className="text-[16px] font-bold leading-snug text-white">
                Похоже на вашего ребёнка?
              </p>
              <a
                href="/#faq"
                className="flex items-center justify-center gap-2 rounded-button bg-white px-5 py-2.5 font-button text-button text-brand-purple transition-opacity hover:opacity-90"
              >
                Записаться на консультацию
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Как устроена методика */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как устроена методика
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {METHOD_TEXT}
          </p>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-brand-navy/50">
            На занятиях одновременно развиваются
          </p>

          {/* Десктоп: центральный круг + пункты вокруг него */}
          <div
            className="relative mx-auto mt-8 hidden xl:block"
            style={{ width: METHOD_DIAGRAM_W, height: METHOD_DIAGRAM_H }}
          >
            <svg
              className="absolute inset-0"
              width={METHOD_DIAGRAM_W}
              height={METHOD_DIAGRAM_H}
              aria-hidden="true"
            >
              {METHOD_SKILLS.map((skill, i) => {
                const { y, isLeft } = methodPosition(i)
                const x = methodEdgeX(isLeft)
                return (
                  <line
                    key={skill}
                    x1={METHOD_CENTER_X}
                    y1={METHOD_CENTER_Y}
                    x2={x}
                    y2={y}
                    stroke="#E9E6FB"
                    strokeWidth="1.5"
                  />
                )
              })}
            </svg>

            <div
              className="absolute flex flex-col items-center justify-center rounded-full bg-brand-purple/10 p-6 text-center"
              style={{
                left: METHOD_CENTER_X,
                top: METHOD_CENTER_Y,
                width: METHOD_CIRCLE_R * 2,
                height: METHOD_CIRCLE_R * 2,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="text-[20px] font-bold leading-snug text-brand-purple">
                {METHOD_CENTER_LABEL}
              </span>
            </div>

            {METHOD_SKILLS.map((skill, i) => {
              const { y, left } = methodPosition(i)
              const icon = METHOD_ICONS[skill]
              return (
                <div
                  key={skill}
                  className="absolute flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-card"
                  style={{ left, top: y, width: METHOD_CARD_W, transform: 'translateY(-50%)' }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-purple/10">
                    {icon ? (
                      <img src={icon} alt="" className="h-4 w-4 object-contain" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-brand-purple" />
                    )}
                  </span>
                  <span className="text-[15px] font-bold leading-snug text-brand-navy">
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Планшет/моб: обычный вертикальный список */}
          <div className="mt-3 flex flex-col gap-2 xl:hidden md:mt-4">
            {METHOD_SKILLS.map((skill) => {
              const icon = METHOD_ICONS[skill]
              return (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-card bg-white p-4 shadow-card"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-purple/10">
                    {icon ? (
                      <img src={icon} alt="" className="h-4 w-4 object-contain" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-brand-purple" />
                    )}
                  </span>
                  <span className="text-[15px] font-bold leading-snug text-brand-navy">
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Что входит в программу */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Что входит в программу
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {PROGRAM_TEXT}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-8">
            {PROGRAM_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-bg-lavender2 bg-white px-3 py-2.5"
              >
                {PROGRAM_ICONS[item] ? (
                  <img
                    src={PROGRAM_ICONS[item]}
                    alt=""
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                ) : (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                )}
                <span className="text-[14px] font-medium leading-snug text-brand-navy">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Акцентная пауза + CTA — по образцу "Будьте ближе к жизни нашей школы" */}
      <section className="bg-brand-purple">
        <Container className="py-10 md:py-14">
          <div className="relative isolate flex flex-col items-center gap-5 rounded-card p-2 text-center">
            {MID_CTA_DECOR.map(({ size, circle, style }, i) => (
              <span
                key={i}
                className="pointer-events-none absolute -z-10 flex items-center justify-center rounded-full bg-white/15"
                style={{ width: circle, height: circle, ...style }}
              >
                <img src={iconStar} alt="" style={{ width: size, height: size }} className="object-contain" />
              </span>
            ))}

            <h2 className="max-w-xl text-[28px] font-bold leading-tight text-white lg:text-h2 lg:font-h2">
              Узнайте, подойдёт ли программа вашему ребёнку
            </h2>
            <a
              href="/#faq"
              className="flex items-center justify-center gap-2 rounded-button bg-white px-8 py-3.5 font-button text-button text-brand-purple transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
              <ArrowRight size={20} strokeWidth={2.2} />
            </a>
          </div>
        </Container>
      </section>

      {/* Путь ребёнка и родителя */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Путь ребёнка и родителя
          </h2>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            От первого контакта до результата — вот как это устроено.
          </p>

          <StepsFlow steps={PATH_STEPS} />
        </Container>
      </section>

      {/* Онлайн — это не сложно, даже для дошкольников */}
      <section className="bg-bg-lavender2">
        <Container className="py-10 md:py-14">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <h3 className="text-[24px] font-bold leading-tight text-brand-navy lg:text-h3 lg:font-h3">
                {ONLINE_EASY_TITLE}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                {ONLINE_EASY_TEXT}
              </p>
            </div>
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white/60 md:h-40 md:w-40">
              <img
                src={iconTarget}
                alt=""
                className="h-16 w-16 object-contain drop-shadow-[0_10px_20px_rgba(27,36,85,0.15)] md:h-20 md:w-20"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Результаты */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Результаты
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Что чаще всего отмечают родители после курса:
          </p>
          <div className="mt-6 rounded-card bg-white p-5 shadow-card md:mt-8 md:p-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RESULTS.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <Check
                    size={18}
                    strokeWidth={3}
                    className="mt-0.5 shrink-0 text-brand-green"
                  />
                  <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center md:mt-8">
            <a
              href="/#faq"
              className="flex items-center justify-center gap-2 rounded-button bg-brand-purple px-8 py-3.5 font-button text-button text-white transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
              <ArrowRight size={20} strokeWidth={2.2} />
            </a>
          </div>
        </Container>
      </section>

      {/* Реальные истории — переиспользуем карусели с главной, отфильтрованные по тегу "Скорочтение" */}
      <Testimonials
        items={NEURO_CASES}
        title="Истории учеников"
        subtitle="Реальные результаты детей, которые занимались по программе нейроскорочтения."
        showCta={false}
        sectionBg="bg-bg-white"
      />
      <ParentReviews
        items={NEURO_REVIEWS}
        title="Отзывы родителей"
        showCta={false}
        showBlueBlock={false}
        sectionBg="bg-bg-lavender"
      />

      {/* Переход на страницу "О школе" (пока заглушка — страница ещё не создана) */}
      <section className="bg-bg-white">
        <Container className="py-10 text-center md:py-14">
          <h3 className="text-[24px] font-bold leading-tight text-brand-navy lg:text-h3 lg:font-h3">
            Хотите узнать больше о школе?
          </h3>
          <Link
            to="/o-shkole"
            className="mt-4 inline-flex items-center gap-2 text-[16px] font-bold text-brand-purple transition-all hover:gap-3 lg:text-[18px]"
          >
            Познакомиться со школой
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </Container>
      </section>

      {/* Финальный CTA */}
      <section className="bg-brand-purple">
        <Container className="py-10 text-center md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-white lg:text-h2 lg:font-h2">
            Хотите, чтобы ребёнок учился легче?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/90 lg:text-body-sm">
            Запишитесь на бесплатную консультацию — расскажем, подойдёт ли
            программа вашему ребёнку, и ответим на все вопросы.
          </p>
          <a
            href="/#faq"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-button bg-white px-8 py-3.5 font-button text-button text-brand-purple transition-opacity hover:opacity-90"
          >
            Записаться на консультацию
            <ArrowRight size={20} strokeWidth={2.2} />
          </a>
        </Container>
      </section>
    </div>
  )
}
