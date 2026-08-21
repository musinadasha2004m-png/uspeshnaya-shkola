import { useLayoutEffect, useRef, useState } from 'react'
import { CheckCircle2, Plus } from 'lucide-react'
import Container from './Container'
import { TelegramIcon, MaxIcon } from './icons'

const TELEGRAM_HREF = 'https://t.me/DariaYSPESHNO'
const MAX_HREF =
  'https://max.ru/u/f9LHodD0cOIAsGNqHrsBHmBuQ_E92Z2BhD2_J4ybwT0oPafu1hB_p2op9YA'

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

const DIRECTIONS = [
  'Подготовка к школе',
  'Предметные репетиторы',
  'Нейроскорочтение',
  'Подготовка к ВПР',
  'Подготовка к ОГЭ',
  'Подготовка к ЕГЭ',
  'Профориентация',
]

const PHONE_CHARS_RE = /^[0-9+\-\s()]+$/

function isValidPhone(value) {
  if (!PHONE_CHARS_RE.test(value)) return false
  return value.replace(/\D/g, '').length >= 10
}

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

function Field({ label, name, value, onChange, error, type = 'text', placeholder }) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[13px] font-bold text-brand-navy/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-button border bg-bg-white px-4 py-3 text-[15px] text-brand-navy outline-none transition-colors placeholder:text-brand-navy/30 focus:border-brand-purple ${
          error ? 'border-brand-pink' : 'border-bg-lavender2'
        }`}
      />
      {error && <span className="text-[12px] font-medium text-brand-pink">{error}</span>}
    </label>
  )
}

function SelectField({ label, name, value, onChange, error, options, placeholder }) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[13px] font-bold text-brand-navy/70">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-button border bg-bg-white px-4 py-3 text-[15px] text-brand-navy outline-none transition-colors ${
          value ? '' : 'text-brand-navy/30'
        } ${error ? 'border-brand-pink' : 'border-bg-lavender2'}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-brand-navy">
            {opt}
          </option>
        ))}
      </select>
      {error && <span className="text-[12px] font-medium text-brand-pink">{error}</span>}
    </label>
  )
}

const EMPTY_VALUES = { name: '', phone: '', grade: '', direction: '' }

function ConsultForm() {
  const [values, setValues] = useState(EMPTY_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success
  const [visible, setVisible] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Введите имя'
    if (!isValidPhone(values.phone)) errs.phone = 'Введите корректный номер телефона'
    if (!values.grade.trim()) errs.grade = 'Укажите класс ребенка'
    if (!values.direction) errs.direction = 'Выберите направление'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setVisible(false)
    setTimeout(() => {
      setStatus('success')
      setValues(EMPTY_VALUES)
      setErrors({})
      setVisible(true)
    }, 250)
  }

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {status === 'idle' ? (
        <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Имя"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Как к вам обращаться"
          />
          <Field
            label="Телефон"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="+7 999 123-45-67"
          />
          <Field
            label="Класс ребенка"
            name="grade"
            value={values.grade}
            onChange={handleChange}
            error={errors.grade}
            placeholder="Например, 5 класс"
          />
          <SelectField
            label="Направление обучения"
            name="direction"
            value={values.direction}
            onChange={handleChange}
            error={errors.direction}
            options={DIRECTIONS}
            placeholder="Выберите направление"
          />

          <button
            type="submit"
            className="mt-1 flex items-center justify-center rounded-button bg-brand-purple px-8 py-3.5 font-button text-button text-white transition-opacity hover:opacity-90 sm:col-span-2"
          >
            Записаться на консультацию
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-card bg-bg-lavender3 px-6 py-14 text-center">
          <CheckCircle2 size={44} strokeWidth={2} className="text-brand-green" />
          <p className="max-w-xs text-[18px] font-bold leading-snug text-brand-navy">
            Спасибо! Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      )}
    </div>
  )
}

export default function FaqForm() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-bg-white" id="faq">
      <Container className="py-10 md:py-14">
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Остались вопросы? Мы ответили на самые популярные
        </h2>

        <div className="mt-6 flex max-w-3xl flex-col gap-3 md:mt-10">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>

        <div className="mt-6 flex max-w-3xl flex-col items-start gap-4 rounded-card bg-bg-lavender3 p-5 sm:flex-row sm:items-center sm:justify-between md:mt-8 md:p-6">
          <p className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Наш администратор всегда на связи и с удовольствием поможет
            разобраться в любой ситуации.
          </p>
          <div className="flex shrink-0 gap-3">
            <a
              href={TELEGRAM_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-button bg-white px-5 py-2.5 font-button text-[15px] text-brand-purple shadow-card transition-opacity hover:opacity-90"
            >
              <TelegramIcon width={20} height={20} />
              Написать в Telegram
            </a>
            <a
              href={MAX_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-button bg-white px-5 py-2.5 font-button text-[15px] text-brand-purple shadow-card transition-opacity hover:opacity-90"
            >
              <MaxIcon width={20} height={20} />
              Написать в MAX
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-card bg-white p-6 shadow-card md:p-10 md:mt-14">
          <div className="max-w-2xl">
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
            <ConsultForm />
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
                <TelegramIcon width={20} height={20} />
                Написать в Telegram
              </a>
              <a
                href={MAX_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-button border border-bg-lavender2 bg-bg-white px-5 py-2.5 font-button text-[15px] text-brand-navy transition-colors hover:bg-bg-lavender3"
              >
                <MaxIcon width={20} height={20} />
                Написать в MAX
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
