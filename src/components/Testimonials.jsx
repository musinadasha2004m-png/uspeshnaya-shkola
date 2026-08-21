import { useRef } from 'react'
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from './Container'

// Порядок кейсов подобран так, чтобы одинаковый предмет не шёл
// подряд, — сохраняй именно эту последовательность, не перемешивать.
const CASES = [
  {
    tag: 'ЕГЭ по математике (профиль)',
    name: 'Александр, 11 класс',
    challenge:
      'Подготовку начали за 2 месяца до экзамена, задача — набрать проходные 27 баллов.',
    results: [
      'Занимались 4–5 раз в неделю.',
      'Сдал экзамен на 52 балла — почти вдвое выше цели.',
    ],
  },
  {
    tag: 'ОГЭ по математике + школьная программа',
    name: 'Михаил, 9 класс',
    challenge:
      'Тройка по школьной программе, нужно было подтянуть успеваемость и подготовиться к ОГЭ.',
    results: [
      '7 месяцев регулярных занятий.',
      'Вышел на пятёрку по школьной программе.',
      'Сдал ОГЭ на 4.',
    ],
  },
  {
    tag: 'ЕГЭ по русскому языку',
    name: 'Николай, 11 класс',
    challenge:
      'Не понимал, как подступиться к предмету; подготовку начали в начале 10 класса.',
    results: [
      'Первый пробник — 10 баллов.',
      'Итоговый результат — 82 балла.',
      'Поступил в вуз, который хотел.',
    ],
  },
  {
    tag: 'ЕГЭ по базовой математике',
    name: 'Вероника, 11 класс',
    challenge:
      'Пришла в декабре с пробником на 5 баллов (оценка 3), боялась заданий с дробями и диаграммами.',
    results: [
      '5 месяцев занятий — разобрали все темы, отработали тесты.',
      'Итоговая оценка — отлично.',
    ],
  },
  {
    tag: 'Английский язык',
    name: 'Варя, 4 класс',
    challenge:
      'Читала медленно, пересказывать тексты было сложно, правила быстро забывались.',
    results: [
      'Уверенно читает и понимает тексты.',
      'Пересказывает своими словами.',
      'Использует грамматику не только в упражнениях, но и в речи.',
      'Бегло говорит и отвечает на вопросы на английском.',
    ],
  },
  {
    tag: 'Скорочтение',
    name: 'Стася, 3 класс, 9 лет',
    challenge:
      'Дислексия и дисграфия, скорость чтения вслух — 75 слов/мин, прочитанное не понимала.',
    results: [
      'Через 6 месяцев — 183 слова/мин вслух (в 2,5 раза быстрее) и 311 слов/мин про себя.',
      'Читает без ошибок, понимает прочитанное, пересказ сформирован.',
    ],
  },
  {
    tag: 'Скорочтение',
    name: 'Валерия, 6 лет',
    challenge: 'Знала только некоторые буквы.',
    results: [
      'Через 8 месяцев — 40 слов/мин вслух (норма для окончания 1 класса).',
      'Понимает прочитанное, пересказ сформирован.',
    ],
  },
  {
    tag: 'Скорочтение',
    name: 'Полина, 7 класс, 14 лет',
    challenge:
      'Дислексия и дисграфия, скорость чтения вслух — 20 слов/мин, пересказ не был сформирован.',
    results: [
      'Через 4 месяца — 68 слов/мин вслух (в 4 раза быстрее) и 112 слов/мин про себя.',
      'Читает без ошибок, понимает прочитанное, пересказ сформирован.',
    ],
  },
  {
    tag: 'Скорочтение',
    name: 'Марк, 3 класс, 9 лет',
    challenge: 'Скорость чтения вслух — 38 слов/мин, пересказ не был сформирован.',
    results: [
      'Через 4 месяца — 179 слов/мин вслух (более чем в 4 раза быстрее) и 181 слово/мин про себя.',
      'Понимает прочитанное, пересказ сформирован.',
    ],
  },
]

const CARD_WIDTH = 300 // px, шаг прокрутки по стрелке = ширина карточки + gap

export default function Testimonials() {
  const scrollerRef = useRef(null)

  const scrollByCards = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction * (CARD_WIDTH + 20),
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-bg-lavender">
      <Container className="py-16 md:py-20">
        <h2 className="max-w-2xl text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Успехи наших учеников
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
          Более 200 семей уже доверили нам обучение своих детей. Сегодня наши
          ученики уверенно сдают экзамены, поступают в колледжи и вузы, о
          которых мечтали, и делают первые шаги к будущей профессии.
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Прокрутить влево"
            className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-purple text-white shadow-card transition-opacity hover:opacity-90 lg:flex"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Прокрутить вправо"
            className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-purple text-white shadow-card transition-opacity hover:opacity-90 lg:flex"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          <div
            ref={scrollerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {CASES.map(({ tag, name, challenge, results }) => (
              <div
                key={name}
                className="flex w-[260px] shrink-0 snap-start flex-col rounded-card bg-white p-5 shadow-card sm:w-[280px] lg:w-[300px]"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-brand-purple/10 px-3 py-1 text-[13px] font-bold text-brand-purple">
                  {tag}
                </span>
                <p className="mt-2 text-[15px] font-bold text-brand-navy lg:text-body-sm">
                  {name}
                </p>

                <div className="mt-3">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-brand-navy/50">
                    С чем пришли
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                    {challenge}
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-brand-navy/50">
                    Результат
                  </p>
                  <ul className="mt-1.5 flex flex-col gap-1">
                    {results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-brand-green"
                        />
                        <span className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* 10-я карточка — не кейс, а переход на страницу всех историй */}
            <a
              href="#"
              className="flex w-[260px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-card bg-brand-purple p-5 text-center shadow-card transition-opacity hover:opacity-90 sm:w-[280px] lg:w-[300px]"
            >
              <p className="text-[18px] font-bold leading-snug text-white">
                Смотреть все истории учеников
              </p>
              <span className="flex items-center gap-2 text-[15px] font-bold text-white">
                Перейти
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
