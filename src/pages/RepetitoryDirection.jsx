import { ArrowRight, CheckCircle2, ClipboardCheck, Lightbulb, Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import StepsFlow from '../components/StepsFlow'
import Testimonials, { CASES } from '../components/Testimonials'
import ParentReviews, { REVIEWS } from '../components/ParentReviews'
import Community from '../components/Community'
import iconStar from '../assets/icon-star.png'

const SHORT_LINE = '1–8 класс · индивидуальные занятия · программа по уровню знаний ребенка'

const SUBTITLE =
  'Поможем разобраться в сложных темах, устранить пробелы и уверенно справляться со школьной программой.'

const GRADE_GROUPS = [
  {
    title: '1–4 класс',
    subjects: ['Русский язык', 'Литературное чтение', 'Математика', 'Окружающий мир', 'Иностранный язык (английский)'],
    text: 'Поможем разобраться со школьной программой, устранить пробелы и уверенно выполнять задания.',
  },
  {
    title: '5–8 класс',
    subjects: [
      'Русский язык',
      'Литература',
      'Математика',
      'Алгебра',
      'Геометрия',
      'История',
      'Обществознание',
      'География',
      'Биология',
      'Физика',
      'Химия',
      'Английский язык',
      'Информатика',
    ],
    text: 'Поможем разобраться в сложных темах, устранить пробелы в знаниях и уверенно справляться со школьной программой.',
  },
]

const TASKS = [
  'не понимает отдельные темы',
  'отстает от школьной программы',
  'получает низкие оценки',
  'допускает много ошибок',
  'долго делает домашние задания',
  'потерял интерес к предмету',
  'не уверен в своих знаниях',
  'хочет улучшить результат',
]

const PATH_STEPS = [
  {
    title: 'Бесплатная консультация',
    description:
      'Знакомимся с родителем и ребенком, обсуждаем цели обучения, сложности и задачи, которые необходимо решить.',
  },
  {
    title: 'Диагностика знаний',
    description: 'Педагог определяет уровень знаний ребенка и находит темы, в которых есть пробелы или сложности.',
  },
  {
    title: 'Составляем программу',
    description:
      'На основе диагностики определяем, что именно нужно изучить, повторить и закрепить. Программа учитывает уровень знаний, цели и темп обучения ребенка.',
  },
  {
    title: 'Занимаемся и закрепляем знания',
    description:
      'Педагог объясняет сложные темы понятным языком, вместе с ребенком разбирает задания, помогает систематизировать знания и постепенно учит самостоятельно справляться с учебными задачами.',
  },
  {
    title: 'Срез знаний каждую четверть',
    description:
      'Проверяем, что ребенок уже освоил, а над чем еще нужно поработать. Родители получают обратную связь о результатах.',
  },
  {
    title: 'При необходимости корректируем программу',
    description:
      'Если какие-то темы остаются сложными, возвращаемся к ним, разбираем ошибки и меняем программу занятий с учетом новых результатов.',
  },
  {
    title: 'Уверенные знания',
    description:
      'В результате ребенок лучше понимает школьный материал, увереннее выполняет задания и готовится к проверочным и ВПР.',
  },
]

const RESULT_CARDS = [
  {
    icon: Lightbulb,
    title: 'Понимает сложные темы',
    description: 'Разбирается в материале, который раньше казался непонятным.',
  },
  {
    icon: Puzzle,
    title: 'Устраняет пробелы',
    description: 'Последовательно закрывает темы, которые мешали двигаться дальше.',
  },
  {
    icon: CheckCircle2,
    title: 'Уверенно выполняет задания',
    description: 'Учится применять знания самостоятельно, а не ждать подсказки.',
  },
  {
    icon: ClipboardCheck,
    title: 'Готовится к ВПР',
    description: 'Закрепляет школьную программу и учится справляться с заданиями проверочных работ.',
  },
]

const RESULT_CLOSING = 'В итоге ребенок понимает школьную программу, уверенно выполняет задания и готов к ВПР.'

const PARENTS_TEXT_1 =
  'Педагог поддерживает связь с родителями, рассказывает о результатах обучения и помогает понять, над чем ребенку еще нужно поработать.'
const PARENTS_TEXT_2 = 'Каждую четверть проводим срез знаний и при необходимости корректируем программу.'
const PARENTS_TEXT_3 = 'Если у вас появляются вопросы, их всегда можно задать педагогу или администратору.'

const NEURO_CROSSLINK_TEXT =
  'Если сложности не столько в конкретном предмете, сколько в том, что ребёнку в целом трудно долго удерживать внимание, запоминать большие объёмы информации или быстро читать и понимать текст — возможно, дело не только в математике или русском. В этом случае может больше подойти нейроскорочтение — курс, который развивает эти базовые навыки напрямую, а предметные занятия идут уже проще и быстрее.'

const REPETITORY_CASE_NAMES = [
  'Александр, 11 класс',
  'Михаил, 9 класс',
  'Николай, 11 класс',
  'Вероника, 11 класс',
]
const REPETITORY_REVIEW_SUBJECTS = ['Математика', 'Русский язык', 'Обществознание', 'Биология']

const REPETITORY_CASES = CASES.filter((c) => REPETITORY_CASE_NAMES.includes(c.name))
const REPETITORY_REVIEWS = REVIEWS.filter((r) => REPETITORY_REVIEW_SUBJECTS.includes(r.subject))

// Тот же формат декора, что ожидает компонент Community (звёзды по
// краям плашки, частично выступающие за края).
const CTA_DECOR_1 = [
  { src: iconStar, size: 46, circle: 68, style: { top: '-22px', left: '10%' } },
  { src: iconStar, size: 28, circle: 44, style: { bottom: '-14px', left: '28%' } },
  { src: iconStar, size: 56, circle: 82, style: { bottom: '-28px', right: '8%' } },
]
const CTA_DECOR_2 = [
  { src: iconStar, size: 52, circle: 76, style: { top: '-24px', right: '12%' } },
  { src: iconStar, size: 30, circle: 46, style: { bottom: '-16px', right: '30%' } },
  { src: iconStar, size: 40, circle: 60, style: { top: '-16px', left: '8%' } },
]

export default function RepetitoryDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Блок 1. Первый экран */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h1 className="max-w-3xl text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
            Предметные репетиторы для школьников
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {SUBTITLE}
          </p>
          <p className="mt-4 text-[14px] font-semibold text-brand-navy/60">{SHORT_LINE}</p>
          <a
            href="/#faq"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-button bg-brand-green px-8 py-3.5 font-button text-button text-brand-navy shadow-card transition-opacity hover:opacity-90"
          >
            Записаться на консультацию
            <ArrowRight size={20} strokeWidth={2.2} />
          </a>
        </Container>
      </section>

      {/* Блок 2. Выберите класс и предмет */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Репетиторы для школьников 1–8 класса
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2 md:gap-6">
            {GRADE_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col rounded-card bg-white p-6 shadow-card md:p-8">
                <h3 className="text-[22px] font-bold leading-snug text-brand-navy">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-brand-green/10 px-3 py-1.5 text-[13px] font-bold text-brand-navy"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">{group.text}</p>
                <a
                  href="/#faq"
                  className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-button bg-brand-green px-6 py-2.5 font-button text-button text-brand-navy transition-opacity hover:opacity-90"
                >
                  Выбрать предмет
                  <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Блок 3. С какими задачами приходят к нам */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Если ребенку сложно с предметом — разберемся вместе
          </h2>
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-green">
            Родители обращаются к нам, когда ребенок:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
            {TASKS.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-card bg-white p-4 shadow-card">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">{item}</span>
              </div>
            ))}

            <a
              href="/#faq"
              className="animate-card-glow-green flex items-center gap-3 rounded-card bg-brand-green p-4 transition-opacity hover:opacity-90"
            >
              <span className="text-[15px] font-bold leading-relaxed text-brand-navy lg:text-body-sm">
                Похоже на вашего ребёнка?
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="ml-auto shrink-0 text-brand-navy" />
            </a>
          </div>
        </Container>
      </section>

      {/* Акцентная пауза + CTA — тот же компонент/пропорции, что
          "Будьте ближе к жизни нашей школы" на главной, только зелёная. */}
      <Community
        title="Хотите разобраться, в чём именно застрял ребёнок?"
        titleMaxWidth="max-w-3xl"
        subtitle={null}
        decor={CTA_DECOR_1}
        accent="green"
      >
        <a
          href="/#faq"
          className="flex items-center justify-center gap-2 rounded-button bg-white px-6 py-2.5 font-button text-button text-brand-navy shadow-card transition-opacity hover:opacity-90"
        >
          Записаться на консультацию
          <ArrowRight size={20} strokeWidth={2.2} />
        </a>
      </Community>

      {/* Блок 4. Как проходят занятия */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как мы помогаем ребенку разобраться в предмете
          </h2>
          <StepsFlow steps={PATH_STEPS} accent="green" />
        </Container>
      </section>

      {/* Блок 5. Что получает ребенок — якорь для карточки "Подготовка к ВПР" на главной */}
      <section id="vpr" className="bg-bg-white scroll-mt-20">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Не просто хорошие оценки — понимание предмета
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8">
            {RESULT_CARDS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 rounded-card bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green">
                  <Icon size={20} strokeWidth={2} className="text-brand-navy" />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold leading-snug text-brand-navy">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#5B6180]">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[15px] font-bold leading-relaxed text-brand-navy lg:text-body-sm">
            {RESULT_CLOSING}
          </p>
        </Container>
      </section>

      {/* Акцентная пауза + CTA #2 */}
      <Community
        title="Остались вопросы про формат занятий?"
        titleMaxWidth="max-w-3xl"
        subtitle={null}
        decor={CTA_DECOR_2}
        accent="green"
      >
        <a
          href="/#faq"
          className="flex items-center justify-center gap-2 rounded-button bg-white px-6 py-2.5 font-button text-button text-brand-navy shadow-card transition-opacity hover:opacity-90"
        >
          Записаться на консультацию
          <ArrowRight size={20} strokeWidth={2.2} />
        </a>
      </Community>

      {/* Блок 6. Родители всегда знают о результатах */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Вы знаете, как продвигается ребенок
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {PARENTS_TEXT_1}
          </p>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {PARENTS_TEXT_2}
          </p>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {PARENTS_TEXT_3}
          </p>
        </Container>
      </section>

      {/* Блок 7. Если дело не только в предмете — компактная карточка-переход
          на страницу "Нейроскорочтение" */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-card bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <h3 className="text-[20px] font-bold leading-snug text-brand-navy">
                Если дело не только в предмете
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                {NEURO_CROSSLINK_TEXT}
              </p>
            </div>
            <Link
              to="/napravleniya/neuroskorochtenie"
              className="flex shrink-0 items-center gap-2 rounded-button bg-brand-green px-6 py-2.5 font-button text-button text-brand-navy transition-opacity hover:opacity-90"
            >
              Узнать о нейроскорочтении
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Блок 8. Реальные истории — переиспользуем карусели с главной, отфильтрованные по тегам предмета */}
      <Testimonials
        items={REPETITORY_CASES}
        title="Истории учеников"
        subtitle="Реальные результаты детей, которые занимались с предметными репетиторами."
        showCta={false}
        sectionBg="bg-bg-lavender"
        accent="green"
      />
      <ParentReviews
        items={REPETITORY_REVIEWS}
        title="Отзывы родителей"
        showCta={false}
        showBlueBlock={false}
        sectionBg="bg-bg-white"
        accent="green"
      />

      {/* Блок 9. Финальный CTA */}
      <section className="bg-brand-green">
        <Container className="py-10 text-center md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Не знаете, какой предмет нужно подтянуть?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-navy/80 lg:text-body-sm">
            Оставьте заявку на бесплатную консультацию. Разберемся в ситуации ребенка и поможем подобрать подходящие занятия.
          </p>
          <a
            href="/#faq"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-button bg-white px-8 py-3.5 font-button text-button text-brand-navy shadow-card transition-opacity hover:opacity-90"
          >
            Записаться на консультацию
            <ArrowRight size={20} strokeWidth={2.2} />
          </a>
        </Container>
      </section>
    </div>
  )
}
