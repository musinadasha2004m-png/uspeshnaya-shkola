import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import Testimonials, { CASES } from '../components/Testimonials'
import ParentReviews, { REVIEWS } from '../components/ParentReviews'
import iconBrain from '../assets/icon-brain.png'
import iconBook from '../assets/icon-book.png'
import iconLightbulb from '../assets/icon-lightbulb.png'
import iconStar from '../assets/icon-star.png'
import iconTarget from '../assets/icon-target.png'

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

const CLASSES_TEXT =
  'Всё обучение — полностью онлайн. Мы принципиально не делаем больших потоков: группа — от 4 до 10 человек, это сохраняет индивидуальный подход и одновременно даёт пользу групповой динамики.'

const CLASSES_FORMAT = [
  'постоянно взаимодействует с преподавателем',
  'участвует в игровых упражнениях',
  'выполняет задания разного уровня сложности',
  'переключается между видами активности каждые несколько минут',
  'получает обратную связь практически сразу',
]

const CLASSES_NOTE =
  'Даже дети 6–7 лет спокойно занимаются 90 минут без потери внимания — за счёт постоянной смены активности.'

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

function BulletList({ items }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
      {items.map((item) => (
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
    </div>
  )
}

function InlineCta({ text, buttonLabel }) {
  return (
    <div className="mt-6 flex flex-col items-start gap-4 rounded-card border-2 border-brand-purple bg-white p-5 sm:flex-row sm:items-center sm:justify-between md:mt-8">
      <p className="text-[16px] font-bold leading-snug text-brand-navy lg:text-[18px]">
        {text}
      </p>
      <a
        href="/#faq"
        className="flex shrink-0 items-center justify-center gap-2 rounded-button bg-brand-purple px-6 py-3 font-button text-button text-white transition-opacity hover:opacity-90"
      >
        {buttonLabel}
        <ArrowRight size={18} strokeWidth={2.5} />
      </a>
    </div>
  )
}

export default function NeuroskorochtenieDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center lg:gap-10">
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
                круглая подложка + плавающие иконки вместо фото ребёнка. */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[280px] lg:block">
              <div className="absolute inset-[8%] rounded-full bg-brand-purple/10" />
              <div className="absolute inset-[14%] rounded-full border border-dashed border-bg-lavender2" />

              <div
                className="animate-hero-float absolute"
                style={{ left: '32%', top: '32%', transform: 'translate(-50%, -50%)' }}
              >
                <img
                  src={iconBrain}
                  alt=""
                  className="h-auto w-20 max-w-none drop-shadow-[0_10px_20px_rgba(27,36,85,0.18)]"
                />
              </div>
              <div
                className="animate-hero-float absolute"
                style={{
                  left: '70%',
                  top: '66%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: '0.8s',
                }}
              >
                <img
                  src={iconBook}
                  alt=""
                  className="h-auto w-16 max-w-none drop-shadow-[0_10px_20px_rgba(27,36,85,0.18)]"
                />
              </div>
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
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHO_FOR_INTRO}
          </p>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-brand-navy/50">
            Чаще всего к нам обращаются, если ребёнок:
          </p>
          <BulletList items={WHO_FOR} />

          <InlineCta
            text="Похоже на вашего ребёнка? Запишитесь на бесплатную консультацию"
            buttonLabel="Записаться на консультацию"
          />
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
          <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
            {METHOD_SKILLS.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 rounded-full bg-brand-purple/10 px-4 py-2 text-[14px] font-bold text-brand-purple"
              >
                {METHOD_ICONS[skill] && (
                  <img src={METHOD_ICONS[skill]} alt="" className="h-4 w-4 object-contain" />
                )}
                {skill}
              </span>
            ))}
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

      {/* Как проходят занятия */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как проходят занятия
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {CLASSES_TEXT}
          </p>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-brand-navy/50">
            На занятии ребёнок:
          </p>
          <BulletList items={CLASSES_FORMAT} />
          <p className="mt-4 max-w-3xl text-[15px] italic leading-relaxed text-[#5B6180] lg:text-body-sm">
            {CLASSES_NOTE}
          </p>
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
