import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import StepsFlow from '../components/StepsFlow'
import Testimonials, { CASES } from '../components/Testimonials'
import ParentReviews, { REVIEWS } from '../components/ParentReviews'
import { CONSULTATION_LINK_PROPS } from '../links'

const SUBTITLE =
  'Работаем по официальным материалам ФИПИ, показываем реальную динамику, а не только «всё отлично» на словах — и не превращаем подготовку в ещё один источник тревоги в доме.'

const WHO_FOR_INTRO =
  'Направление — для учеников 10–11 класса, которые готовятся к поступлению в вуз.'

const WHO_FOR = [
  'нужна системная подготовка к одному или нескольким предметам',
  'текущий уровень знаний нужно подтянуть',
  'подготовку важно грамотно распределить на пару лет вперёд, а не устраивать аврал в 11 классе',
  'хочется сопровождения специалистов до самого экзамена, а не курса "в пустоту"',
]
const WHO_FOR_FORMAT = 'Формат — индивидуально или в мини-группах, в зависимости от целей.'

const WHY_TEXT_1 =
  'Многие курсы с первого занятия сажают ребёнка решать пробники — это выглядит как подготовка, но часто просто тренирует тревогу, а не знания. Мы работаем иначе: сначала смотрим, какой вуз и какие предметы на самом деле нужны, и уже под это строим программу. Если направление ещё не выбрано — сначала стоит разобраться с этим, а не хвататься сразу за все предметы подряд.'
const WHY_TEXT_2 =
  'Мы занимаемся по официальным демоверсиям и кодификаторам ФИПИ — не по "своему видению" того, что может встретиться на экзамене.'

const PARENT_SEES = [
  'регулярную обратную связь о прогрессе, а не тишину до самого экзамена',
  'понятную динамику: что уже отработано, а над чем ещё идёт работа',
  'честную картину результатов пробников — даже если она не идеальная',
  'план, а не ощущение, что "как-то само образуется"',
]

const PATH_STEPS = [
  {
    title: 'Бесплатная консультация',
    description: 'Обсуждаем цель: вуз, предметы, сроки.',
  },
  {
    title: 'Диагностика',
    description: 'Смотрим реальный уровень, а не ориентируемся на школьные оценки.',
  },
  {
    title: 'Программа под конкретные экзамены',
    description: 'Не все предметы подряд, а именно те, что нужны для поступления.',
  },
  {
    title: 'Регулярная практика и разбор ошибок',
    description: 'С пробниками в формате, близком к настоящему экзамену.',
  },
  {
    title: 'Отчёт и корректировка',
    description: 'Обратная связь родителям, изменения в программе при необходимости.',
  },
]

const CALM_TEXT =
  'Родительская тревога перед ЕГЭ передаётся ребёнку почти напрямую — это не голословное утверждение, а то, о чём говорят и психологи, и сами выпускники: детям в этот период важнее ровная поддержка, а не дополнительные расспросы и напоминания о ставках. Мы стараемся быть той стороной процесса, которая снимает напряжение, а не добавляет его: чёткий план вместо неизвестности, обратная связь вместо тишины и домыслов.'

// Кейсы с тегом "ЕГЭ" (профиль, база, русский язык) и отзыв про подготовку
// к профильной математике — без переписывания текста, только фильтр.
const EGE_CASES = CASES.filter((c) => c.tag.includes('ЕГЭ'))
const EGE_REVIEWS = REVIEWS.filter((r) => r.subject === 'Математика' && r.text.includes('ЕГЭ'))

export default function PodgotovkaKEgeDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h1 className="max-w-4xl text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
            Готовим к ЕГЭ так, чтобы можно было выдохнуть — и родителям, и ребёнку
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
          <p className="mt-4 text-[20px] font-bold uppercase tracking-wide text-brand-blue">
            Чаще всего к нам обращаются, если:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-8">
            {WHO_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-card bg-white p-4 shadow-card">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">{item}</span>
              </div>
            ))}

            <a
              {...CONSULTATION_LINK_PROPS}
              className="animate-card-glow-blue flex items-center gap-3 rounded-card bg-brand-blue p-4 transition-opacity hover:opacity-90"
            >
              <span className="text-[15px] font-bold leading-relaxed text-white lg:text-body-sm">
                Похоже на вашего ребёнка?
              </span>
              <ArrowRight size={18} strokeWidth={2.5} className="ml-auto shrink-0 text-white" />
            </a>
          </div>
          <p className="mt-6 max-w-4xl text-[15px] font-bold leading-relaxed text-brand-navy lg:text-body-sm">
            {WHO_FOR_FORMAT}
          </p>
        </Container>
      </section>

      {/* Блок 2. Почему мы не начинаем с решения вариантов */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Почему мы не начинаем с решения вариантов
          </h2>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHY_TEXT_1}
          </p>
          <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {WHY_TEXT_2}
          </p>
        </Container>
      </section>

      {/* Блок 3. Что вы будете видеть как родитель */}
      <section className="bg-bg-lavender">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Что вы будете видеть как родитель
          </h2>
          <div className="mt-6 max-w-4xl rounded-card bg-white p-5 shadow-card md:mt-8 md:p-8">
            <div className="flex flex-col gap-3">
              {PARENT_SEES.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-brand-green" />
                  <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Блок 4. Как проходят занятия */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Как проходят занятия
          </h2>
          <StepsFlow steps={PATH_STEPS} accent="blue" />
        </Container>
      </section>

      {/* Блок 5. Подготовка — это ещё и про спокойствие в доме */}
      <section className="bg-bg-lavender2">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Подготовка — это ещё и про спокойствие в доме
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            {CALM_TEXT}
          </p>
        </Container>
      </section>

      {/* Блок 6. Если ещё не определились с направлением.
          Страница /napravleniya/proforientaciya пока не создана — ссылка
          оставлена по тексту, ведёт на неё. */}
      <section className="bg-bg-white">
        <Container className="py-10 md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Если ещё не определились с направлением
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Если пока не ясно, какие именно предметы сдавать и куда поступать — подготовка к ЕГЭ
            начинается не с этого. Сначала стоит заглянуть в{' '}
            <Link
              to="/napravleniya/proforientaciya"
              className="font-bold text-brand-navy underline decoration-brand-blue decoration-2 underline-offset-4 transition-colors hover:text-brand-blue"
            >
              Профориентацию
            </Link>{' '}
            — тогда экзамены выбираются осознанно, под конкретную цель, а не "на всякий случай".
          </p>
        </Container>
      </section>

      {/* Блок 7. Реальные истории — карусели с главной, отфильтрованные по ЕГЭ */}
      <Testimonials
        items={EGE_CASES}
        title="Истории учеников"
        subtitle={null}
        showCta={false}
        sectionBg="bg-bg-lavender"
        accent="blue"
      />
      <ParentReviews
        items={EGE_REVIEWS}
        title="Отзывы родителей"
        showCta={false}
        showBlueBlock={false}
        sectionBg="bg-bg-white"
        accent="blue"
      />

      {/* Блок 8. Финальный CTA */}
      <section className="bg-brand-blue">
        <Container className="py-10 text-center md:py-14">
          <h2 className="text-[28px] font-bold leading-tight text-white lg:text-h2 lg:font-h2">
            Разберёмся, какой план подготовки нужен именно вам
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white lg:text-body-sm">
            Запишитесь на бесплатную консультацию — обсудим вуз, предметы и сроки, и предложим
            реальный план, а не курс "для всех".
          </p>
          <a
            {...CONSULTATION_LINK_PROPS}
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
