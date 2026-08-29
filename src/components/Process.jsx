import Container from './Container'
import StepsFlow from './StepsFlow'

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
  return (
    <section className="bg-bg-white">
      <Container className="py-10 md:py-14">
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Как проходит обучение
        </h2>
        <p className="mt-3 max-w-5xl text-[15px] leading-relaxed text-[#5B6180] xl:text-body-sm">
          Мы сопровождаем ребенка на каждом этапе — от первой консультации до
          достижения поставленных целей.
        </p>

        <StepsFlow steps={STEPS} ctaIndex={1} ctaLabel="Записаться" ctaHref="#" />
      </Container>
    </section>
  )
}
