import {
  BarChart3,
  Eye,
  MessageCircle,
  Puzzle,
  Smile,
  UserCog,
} from 'lucide-react'
import Container from './Container'

const TRUST_ITEMS = [
  {
    icon: UserCog,
    tint: 'bg-brand-purple',
    title: 'Индивидуальный подход',
    description:
      'Подбираем программу и темп обучения с учетом уровня знаний и целей ребенка.',
  },
  {
    icon: Smile,
    tint: 'bg-brand-blue',
    title: 'Молодые преподаватели',
    description:
      'Объясняют понятно, умеют заинтересовать и находят общий язык с детьми.',
  },
  {
    icon: Puzzle,
    tint: 'bg-brand-pink',
    title: 'Учимся без зубрежки',
    description:
      'Интерактивные задания помогают ребенку понимать материал, а не просто запоминать.',
  },
  {
    icon: MessageCircle,
    tint: 'bg-brand-yellow',
    title: 'Регулярная обратная связь',
    description:
      'Рассказываем родителям о прогрессе ребенка и всегда готовы ответить на вопросы.',
  },
  {
    icon: BarChart3,
    tint: 'bg-brand-green',
    title: 'Срезы знаний',
    description:
      'Каждую четверть оцениваем результаты и корректируем программу обучения при необходимости.',
  },
  {
    icon: Eye,
    tint: 'bg-brand-purple',
    title: 'Прозрачная система обучения',
    description:
      'Родители понимают, как проходит обучение и каких результатов достигает ребенок.',
  },
]

// Геометрия компактной схемы (десктоп, xl+): центральный круг с "300+"
// и две колонки вытянутых карточек-плашек по бокам (по 3 штуки).
// Шрифты карточек — те же, что у карточек направлений (заголовок 22px,
// описание 18px = --font-size-text-secondary), поэтому ширина плашки
// подобрана под самый длинный заголовок ("Прозрачная система обучения"
// — 338px при 22px/700 Manrope) в одну строку. Из-за этого схема стала
// шире, чем помещается на lg (1024px), — порог показа диаграммы поднят
// до xl (1280px), ниже — список.
// Средняя пара (на уровне центра круга) отодвинута от круга заметно
// дальше, чем верхняя/нижняя — по отдельному запросу.
const DIAGRAM_W = 1156
const DIAGRAM_H = 448
const CENTER_X = 578
const CENTER_Y = 224
const CENTER_CIRCLE_R = 90
const CARD_W = 420
const GAP_SIDE = 24
const GAP_MID = 48
const ROW_Y = [64, 224, 384]

function cardEdgeX(isLeft, row) {
  const gap = row === 1 ? GAP_MID : GAP_SIDE
  return isLeft ? CENTER_X - CENTER_CIRCLE_R - gap : CENTER_X + CENTER_CIRCLE_R + gap
}

function cardLeftX(isLeft, row) {
  const edge = cardEdgeX(isLeft, row)
  return isLeft ? edge - CARD_W : edge
}

export default function Trust() {
  return (
    <section className="bg-bg-lavender">
      <Container className="py-16 md:py-20">
        <h2 className="max-w-2xl text-h2 font-h2 text-brand-navy">
          Почему нам доверяют
        </h2>

        {/* Десктоп: центральный круг + две колонки карточек-плашек */}
        <div
          className="relative mx-auto mt-6 hidden xl:block"
          style={{ width: DIAGRAM_W, height: DIAGRAM_H }}
        >
          <svg
            className="absolute inset-0"
            width={DIAGRAM_W}
            height={DIAGRAM_H}
            aria-hidden="true"
          >
            {TRUST_ITEMS.map((item, i) => {
              const isLeft = i < 3
              const row = i % 3
              const x = cardEdgeX(isLeft, row)
              return (
                <line
                  key={item.title}
                  x1={CENTER_X}
                  y1={CENTER_Y}
                  x2={x}
                  y2={ROW_Y[row]}
                  stroke="#E9E6FB"
                  strokeWidth="1.5"
                />
              )
            })}
          </svg>

          <div
            className="absolute flex flex-col items-center justify-center rounded-full bg-bg-lavender2 text-center"
            style={{
              left: CENTER_X,
              top: CENTER_Y,
              width: CENTER_CIRCLE_R * 2,
              height: CENTER_CIRCLE_R * 2,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="text-[44px] font-extrabold leading-none text-brand-navy">
              300+
            </span>
            <span className="mt-2 max-w-[160px] text-caption font-caption leading-snug text-brand-navy/70">
              семей уже доверили нам обучение своих детей
            </span>
          </div>

          {TRUST_ITEMS.map(({ icon: Icon, tint, title, description }, i) => {
            const isLeft = i < 3
            const row = i % 3
            const left = cardLeftX(isLeft, row)
            return (
              <div
                key={title}
                className="absolute flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-card"
                style={{ left, top: ROW_Y[row], width: CARD_W, transform: 'translateY(-50%)' }}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tint}`}
                >
                  <Icon size={16} strokeWidth={2} className="text-white" />
                </span>
                <div className="min-w-0">
                  <h3 className="whitespace-nowrap text-[22px] font-bold leading-snug text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-body-sm leading-snug text-[#5B6180]">
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Планшет/моб: карточка "300+" сверху + вертикальный список */}
        <div className="xl:hidden">
          <div className="mx-auto mt-6 max-w-md rounded-card bg-bg-lavender2 p-6 text-center">
            <span className="text-[40px] font-extrabold leading-none text-brand-navy">
              300+
            </span>
            <p className="mt-2 text-caption font-caption text-brand-navy/70">
              семей уже доверили нам обучение своих детей
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {TRUST_ITEMS.map(({ icon: Icon, tint, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-card bg-white p-5 shadow-card"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tint}`}
                >
                  <Icon size={20} strokeWidth={2} className="text-white" />
                </span>
                <div>
                  <h3 className="text-[22px] font-bold leading-snug text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-[#5B6180]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
