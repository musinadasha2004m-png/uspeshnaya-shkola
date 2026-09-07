import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import StepsFlow from '../components/StepsFlow'

const SUBTITLE =
  'Мы готовим не к оценкам, а к самому процессу учёбы — чтобы в сентябре ребёнок не терялся среди новых правил и требований, а с первых дней чувствовал себя уверенно и с интересом шёл в школу.'

const WHO_FOR_INTRO =
  'Направление — для детей 5–7 лет, которым предстоит поступление в первый класс.'

const WHO_FOR = [
  'хотят заранее подготовить ребёнка к школе',
  'переживают, что ребёнку будет сложно привыкнуть к новым требованиям',
  'хотят, чтобы ребёнок легче адаптировался к учебному процессу',
  'замечают, что стоит развить внимание, память, речь, мышление, усидчивость или навыки общения',
]

const WHAT_WE_PREPARE_TEXT_1 =
  'Наша задача — не научить ребёнка программе первого класса заранее, а сформировать готовность к обучению: и интеллектуальную, и психологическую.'
const WHAT_WE_PREPARE_TEXT_2 =
  'Ребёнок, который приходит в школу уже зная основы, чувствует себя увереннее с первого дня — ему не нужно одновременно привыкать к новой роли ученика и разбираться в незнакомом материале. Именно поэтому многие дети, которые готовились у нас, не просто легче учатся, но и по-настоящему полюбили школу — она перестаёт быть источником тревоги.'

const SKILLS = [
  'речь',
  'логическое мышление',
  'внимание и память',
  'мелкая моторика',
  'математические представления',
  'первоначальные навыки чтения и письма',
  'самостоятельность и умение слушать учителя',
  'умение работать в коллективе',
  'спокойное отношение к новым ситуациям',
]

const PATH_STEPS = [
  {
    title: 'Бесплатная консультация',
    description: 'Обсуждаем, что вас беспокоит, и что уже умеет ребёнок.',
  },
  {
    title: 'Диагностика',
    description: 'Смотрим, какие навыки уже сформированы, а над какими стоит поработать.',
  },
  {
    title: 'Занятия в игровой форме',
    description:
      'Понятные задания, игровые элементы, постепенное усложнение материала, без давления и в темпе ребёнка.',
  },
  {
    title: 'Регулярная обратная связь',
    description: 'Рассказываем, что уже получается, а что в процессе.',
  },
  {
    title: 'Уверенный старт в школе',
    description:
      'Ребёнок приходит в первый класс не растерянным, а готовым — и это чувствуется с первых недель.',
  },
]

const NEURO_TEXT_1 =
  'Подготовка к школе закладывает основу, а нейроскорочтение — хороший следующий шаг, который многие наши ученики проходят уже после поступления в первый класс. Там продолжают развиваться те же важные навыки: внимание, память, мышление — и добавляется ещё один, который часто недооценивают: усидчивость.'
const NEURO_TEXT_2 =
  'Многим детям физически сложно высидеть несколько уроков подряд — и именно из-за этого начинает страдать успеваемость, даже если с пониманием материала всё в порядке. Мы работаем над этим заранее, а не ждём, когда это станет проблемой в школе.'

const ONLINE_TEXT_1 =
  'Формат подходит и по-настоящему увлекает даже дошкольников — программа разнообразная и построена так, чтобы ребёнку было интересно: игровые задания, частая смена активности, никакой скучной "учёбы за партой".'
const ONLINE_TEXT_2 =
  'Если сомневаетесь, подойдёт ли это именно вашему ребёнку — убедиться проще всего на бесплатной диагностике: за одну встречу будет видно, комфортно ли ребёнку в таком формате.'

export default function PodgotovkaKShkoleDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h1 className="max-w-3xl text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
            Первый класс начинается легче, когда ребёнок готов
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {SUBTITLE}
          </p>
        </Container>
      </section>

      {/* Блок 1. Кому подходит */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Кому подходит
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHO_FOR_INTRO}
          </p>
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-yellow">
            Чаще всего родители обращаются, если:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
            {WHO_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-card bg-white p-4 shadow-card">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">{item}</span>
              </div>
            ))}

            <a
              href="/#faq"
              className="animate-card-glow-yellow flex items-center gap-3 rounded-card bg-brand-yellow p-4 transition-opacity hover:opacity-90"
            >
              <span className="text-[15px] font-bold leading-relaxed text-brand-navy lg:text-body-sm">
                Похоже на вашего ребёнка?
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="ml-auto shrink-0 text-brand-navy" />
            </a>
          </div>
        </Container>
      </section>

      {/* Блок 2. Что мы на самом деле готовим */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Что мы на самом деле готовим
          </h2>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHAT_WE_PREPARE_TEXT_1}
          </p>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHAT_WE_PREPARE_TEXT_2}
          </p>
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-yellow">
            На занятиях развиваются
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-8">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 rounded-xl border border-bg-lavender2 bg-white px-3 py-2.5"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                <span className="text-[14px] font-medium leading-snug text-brand-navy">{skill}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Блок 3. Как проходят занятия */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как проходят занятия
          </h2>
          <StepsFlow steps={PATH_STEPS} accent="yellow" />
        </Container>
      </section>

      {/* Блок 4. Переход на "Нейроскорочтение" */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            А что после того, как ребёнок пойдёт в школу?
          </h2>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {NEURO_TEXT_1}
          </p>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {NEURO_TEXT_2}
          </p>
          <Link
            to="/napravleniya/neuroskorochtenie"
            className="mt-5 inline-flex items-center gap-2 rounded-button bg-brand-yellow px-6 py-2.5 font-button text-button text-brand-navy transition-opacity hover:opacity-90"
          >
            Узнать о нейроскорочтении
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </Container>
      </section>

      {/* Блок 5. Почему онлайн-формат подходит дошкольникам */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Онлайн — это не сложно, даже в 5–6 лет
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {ONLINE_TEXT_1}
          </p>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {ONLINE_TEXT_2}
          </p>
        </Container>
      </section>

      {/* Блок 7. Финальный CTA */}
      <section className="bg-brand-yellow">
        <Container className="py-10 text-center md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Готовы помочь ребёнку начать школу уверенно?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-navy/80 lg:text-body-sm">
            Запишитесь на бесплатную консультацию — расскажем, с чего лучше начать именно вашему ребёнку.
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
