import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import StepsFlow from '../components/StepsFlow'
import Testimonials, { CASES } from '../components/Testimonials'
import ParentReviews, { REVIEWS } from '../components/ParentReviews'

const SUBTITLE =
  'Если ребёнок теряет уверенность из-за оценок, не понимает объяснения в школе или подолгу сидит над уроками — мы поможем разобраться в ситуации, а не просто временно закрыть пробел перед контрольной.'

const SIGNS = [
  'ребёнок стал получать более низкие оценки',
  'не понимает объяснения учителя в школе',
  'подолгу сидит над домашними заданиями',
  'начал избегать сложных заданий или предмета в целом',
  'потерял интерес к учёбе',
  'готовится к переходу в старшую школу или к итоговым работам',
  'допускает много ошибок, хотя вроде бы старается',
]

const WHO_FOR_TEXT =
  'Направление — для учеников с 1 по 8 класс: и для начальной школы (1–4 классы), и для средней (5–8 классы). Переход в среднюю школу сам по себе непростой этап — предметов и учителей становится больше, материал сложнее, не все дети быстро адаптируются. Мы работаем с обоими возрастами, но по-разному: в начальной школе закладываем базу и учим не бояться сложных заданий, в средней — помогаем систематизировать знания и подготовиться к следующему этапу.'

const WHAT_WE_DO_TEXT =
  'Наша задача — не просто повысить оценку к следующей четверти. Мы стремимся к тому, чтобы ребёнок начал понимать предмет и почувствовал себя увереннее на уроках — тогда оценки подтягиваются сами, и это не разовый эффект, а устойчивый результат.'

const TEACHER_ACTIONS = [
  'объясняет сложные темы простым языком',
  'находит и закрывает конкретные пробелы в знаниях',
  'развивает навык самостоятельной работы, а не просто "решает вместе"',
  'формирует ответственное отношение к учёбе, а не разовую помощь перед контрольной',
]

const FORMAT_TEXT =
  'Формат: индивидуально или в мини-группах — зависит от целей ребёнка и рекомендации педагога после диагностики.'

const PATH_STEPS = [
  {
    title: 'Бесплатная консультация',
    description: 'Обсуждаем ситуацию, а не сразу предлагаем программу.',
  },
  {
    title: 'Диагностика',
    description:
      'Определяем реальный уровень знаний и конкретные пробелы, а не общее "надо подтянуть предмет".',
  },
  {
    title: 'Онлайн-занятия',
    description: 'По индивидуальному плану, под темп и цели именно этого ребёнка.',
  },
  {
    title: 'Регулярная обратная связь',
    description:
      'Рассказываем, что проходили, что получается, а что ещё в работе. Не тишина месяцами.',
  },
  {
    title: 'Устойчивый результат',
    description:
      'Ребёнок не просто "исправил оценку", а понимает предмет и увереннее чувствует себя на уроках.',
  },
]

const PROMISES = [
  'Мы не обещаем "пятёрку через месяц" — прогресс всегда индивидуален, и честный педагог не даёт таких гарантий.',
  'Мы не сажаем детей на поток по одному шаблону — программа строится под конкретного ребёнка.',
  'Мы не оставляем родителей без обратной связи между занятиями.',
]

const VPR_TEXT_1 =
  'Всероссийские проверочные работы (ВПР) — не экзамен с последствиями для аттестата, но хороший повод спокойно проверить, насколько прочно ребёнок усвоил программу года. Мы не делаем отдельный "интенсив перед ВПР" — вместо этого разбираем структуру и формат проверочной работы прямо в рамках обычных занятий с предметным репетитором, без лишнего стресса и отдельной оплаты нового курса.'
const VPR_TEXT_2 =
  'Если ребёнок уже занимается с нами по предмету — подготовка к ВПР органично встраивается в план. Если пришли именно ради ВПР — начнём с диагностики, чтобы понять, какие темы стоит закрыть в первую очередь.'

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

export default function RepetitoryDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h1 className="max-w-3xl text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
            Домашние задания больше не повод для слёз
          </h1>
          <div className="mt-6 max-w-3xl rounded-card border-l-4 border-brand-green bg-brand-green/10 p-5 md:mt-8 md:p-8">
            <p className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
              {SUBTITLE}
            </p>
          </div>
        </Container>
      </section>

      {/* Вы узнаёте что-то из этого? */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Вы узнаёте что-то из этого?
          </h2>
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-green">
            Чаще всего к нам обращаются, если:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
            {SIGNS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-card bg-white p-4 shadow-card"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Если хотя бы часть этого про вашего ребёнка — вы не одни, и с
            этим можно разобраться.
          </p>
        </Container>
      </section>

      {/* Кому подходит */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Кому подходит
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHO_FOR_TEXT}
          </p>
        </Container>
      </section>

      {/* Что мы на самом деле делаем */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Что мы на самом деле делаем
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHAT_WE_DO_TEXT}
          </p>
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-green">
            Педагог
          </p>
          <div className="mt-6 rounded-card bg-white p-5 shadow-card md:mt-8 md:p-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TEACHER_ACTIONS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check
                    size={18}
                    strokeWidth={3}
                    className="mt-0.5 shrink-0 text-brand-green"
                  />
                  <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Как проходят занятия */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как проходят занятия
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {FORMAT_TEXT}
          </p>
          <StepsFlow steps={PATH_STEPS} />
        </Container>
      </section>

      {/* Чему мы принципиально не обещаем — сдержанный, "честный" тон:
          светлый фон, зелёная рамка, без ярких заливок и иконок. */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <div className="mx-auto max-w-3xl rounded-card border-2 border-brand-green bg-white p-6 md:p-8">
            <h2 className="text-[24px] font-bold leading-tight text-brand-navy lg:text-h3 lg:font-h3">
              Чему мы принципиально не обещаем
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {PROMISES.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Подготовка к ВПР — якорь для карточки на главной */}
      <section id="vpr" className="bg-bg-white scroll-mt-20">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Готовимся к ВПР с теми же педагогами
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {VPR_TEXT_1}
          </p>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {VPR_TEXT_2}
          </p>
        </Container>
      </section>

      {/* Если дело не только в предмете — компактная карточка-переход
          на страницу "Нейроскорочтение" */}
      <section className="bg-bg-lavender">
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

      {/* Реальные истории — переиспользуем карусели с главной, отфильтрованные по тегам предмета */}
      <Testimonials
        items={REPETITORY_CASES}
        title="Истории учеников"
        subtitle="Реальные результаты детей, которые занимались с предметными репетиторами."
        showCta={false}
        sectionBg="bg-bg-white"
      />
      <ParentReviews
        items={REPETITORY_REVIEWS}
        title="Отзывы родителей"
        showCta={false}
        showBlueBlock={false}
        sectionBg="bg-bg-lavender"
      />

      {/* Финальный CTA */}
      <section className="bg-brand-green">
        <Container className="py-10 text-center md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Разберёмся в ситуации вместе
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-navy/80 lg:text-body-sm">
            Запишитесь на бесплатную консультацию — обсудим, что
            происходит, и предложим план, а не готовое решение "для
            всех".
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
