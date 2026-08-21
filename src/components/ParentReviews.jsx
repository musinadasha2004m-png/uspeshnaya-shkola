import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from './Container'
import { TelegramIcon, MaxIcon } from './icons'

const TELEGRAM_REVIEWS_HREF = 'https://t.me/otzyvuspeshnoshcola'
const MAX_REVIEWS_HREF = 'https://max.ru/join/FiNtXI2voP4aN0sry44dN3pcGUTR2NVIvnDeNuLey3I'

const AVATAR_TINTS = [
  'bg-brand-purple/15 text-brand-purple',
  'bg-brand-blue/15 text-brand-blue',
  'bg-brand-yellow/25 text-brand-yellow',
  'bg-brand-green/20 text-brand-green',
  'bg-brand-pink/15 text-brand-pink',
]

// Порядок подобран так, чтобы один предмет не шёл дважды подряд —
// сохраняй именно эту последовательность, не перемешивать.
const REVIEWS = [
  {
    name: 'Мама Алина',
    subject: 'Скорочтение',
    text: 'Хочу отметить, что начальная была очень сложной, скорость чтения увеличилась за 2 месяца в 2 раза. А ещё подтянулась учёба, стала более внимательным и сконцентрированным. По математике из четвёрок вышли 5. А по русскому грамотность осталась, и по сравнению был стал выше. В начальных улучшился слух и русский и как роботает. Он стал намного ошибаться на письме и теперь пишет практически без ошибок. Спасибо за ваши занятия 😊',
  },
  {
    name: 'Вероника',
    subject: 'Математика',
    text: 'Хочу поблагодарить Беслана Анатольевича за отличную подготовку. Сын стал намного увереннее писать пробники, разобрался в сложных заданиях и перестал бояться экзамена. Объяснение понятное, всегда можно задать вопрос и получить поддержку. Очень рада, что обратились именно к этому преподавателю.',
  },
  {
    name: 'Мама Гузеля',
    subject: 'Скорочтение',
    text: 'Выражаю огромную благодарность Юлии Владиславовне за её профессионализм и любовь к детям! Мой сын, Максим, для многих учителей "неудобный ребенок": гиперактивный, неусидчивый, быстро теряет интерес, невнимательный и т.д. Учились на 2, скорость чтения 24 слова в минуту в 3 классе... Репетиторы от него просто сбегали... Что я только не слышала в адрес моего ребенка... Пока не начали заниматься с Юлией Владиславовной! Это педагог от Бога! Не ожидала, что сможет усидеть, будет втянут в процесс, в режиме онлайн 90 минут! Благодаря профессионализму и вниманию, у нее, получилось за 2 месяца занятий увеличить скорость чтения до 63 слов в минуту! Теперь он не только читает хорошо, но и в уме решает примеры, выучил всю таблицу умножения!!! Результаты просто ПОТРЯСАЮЩИЕ! Рекомендую на 500%! Результат гарантирован!',
  },
  {
    name: 'Мария',
    subject: 'Русский язык',
    text: 'Занимаемся уже третий месяц. Все доступно и понятно. Всегда есть обратная связь и помощь с домашними заданиями. Понравились частые пробники, интересный процесс обучения. Средний балл уже вырос с 25 до 35.',
  },
  {
    name: 'Светлана',
    subject: 'Математика',
    text: 'Занимаемся всего месяц, но уже вижу, что я стала лучше разбираться в математике. На уроках в школе теперь все понятно. Оценки улучшились. Пробник написала на 5 баллов выше, чем предыдущий. Спасибо! Сама удивилась такому быстрому результату.',
  },
  {
    name: 'Мама Светлана',
    subject: 'Скорочтение',
    text: 'Хочу от всей души поблагодарить Вас за нашу долгую совместную работу! Мы с Вами уже больше года, и я очень рада, что сначала Юля, а затем и Ира попали именно в Ваши руки. Спасибо за Ваш профессионализм и системный подход. Мы видим реальные результаты в развитии внимания, памяти и кругозора, а скорость чтения у девочек выросла. Но больше всего мы ценим Ваше спокойствие, доброту и внимательное отношение к детям. Девочкам было очень комфортно с Вами заниматься! Желаем Вам успехов в Вашем важном деле и способных учеников!',
  },
  {
    name: 'Милана',
    subject: 'Обществознание',
    text: 'Готовлюсь к сдаче ЕГЭ уже почти год. Занятия проходят прекрасно, преподаватель все объясняет доступным языком. Благодаря нашим занятиям я не только готовлюсь к ЕГЭ, но и подтягиваю успеваемость и оценки. На занятиях всегда приятная атмосфера и чувствуется поддержка. Когда начала заниматься, страх перед ЕГЭ улетучился. Очень советую.',
  },
  {
    name: 'Папа Константин',
    subject: 'Математика',
    text: 'Занятия очень нравятся. Беслан настоящий профессионал своего дела. Прекрасно владеет предметом, глубоко понимает специфику и знает все ловушки экзамена. Объясняет материал простым и доступным языком. Поэтому самые сложные темы и номера из второй части ЕГЭ становятся ясными и перестают пугать. Искренне рекомендую Беслана всем, кто хочет уверенно подготовиться и сдать профильную математику на высокий балл.',
  },
  {
    name: 'Мама Александра',
    subject: 'Скорочтение',
    text: 'Хочу выразить большую признательность за вашу работу. Всё лето Матвей занимался с вами. Скоро завершится первая четверть, и вот какие у нас результаты. Чтение, была очень слабая тройка, очень слабая, теперь твердая четвёрка, русский было два, теперь твердая тройка 🙂, математика была вялая три, теперь четыре. У парня уверенность появилась в глазах, появилось желание улучшать свои показатели, самое главное он поверил в себя. Мы очень любим нашего сына и отметки нам не важны, важно как парнишка расцвёл, заискрился 🙂🙂🙂. Спасибо вам и вашей команде за такое грамотное и бережно отношение к нашим детям 💗💗💗',
  },
  {
    name: 'Игорь',
    subject: 'Русский язык',
    text: 'Преподаватель очень классный, дает материал понятно, подробно, с разбором каждой ошибки. Повысил результаты в многократном размере. Очень рекомендую! Занимаюсь с удовольствием.',
  },
  {
    name: 'Виктор',
    subject: 'Математика',
    text: 'Чудесный преподаватель по математике. Все объяснения предельно четкие, структурные и подкреплены яркими примерами из практики. Это помогает сразу же применять эти знания в решении упражнений. Особенно важно для меня было, что преподаватель не просто выдает материал, а учит мыслить логически. Очень рекомендую данного специалиста.',
  },
  {
    name: 'Виктория',
    subject: 'Биология',
    text: 'Занимались в паре с девочкой. Пришли с одним уровнем знаний. В итоге я написала ЕГЭ на 74 балла, практически с полного нуля. Думаю, что это лучший репетитор. На занятиях было очень комфортно, не было страха задавать глупые вопросы. Я очень довольна своим результатом. Благодарю за хорошую подготовку!',
  },
]

const CARD_WIDTH = 300 // px, шаг прокрутки по стрелке = ширина карточки + gap

function initialOf(name) {
  const last = name.trim().split(' ').pop()
  return last.charAt(0).toUpperCase()
}

export default function ParentReviews() {
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
        <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
          Отзывы родителей
        </h2>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Прокрутить влево"
            className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue text-white shadow-card transition-opacity hover:opacity-90 lg:flex"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Прокрутить вправо"
            className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue text-white shadow-card transition-opacity hover:opacity-90 lg:flex"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          <div
            ref={scrollerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {REVIEWS.map(({ name, subject, text }, i) => (
              <div
                key={name + i}
                className="flex h-[300px] w-[260px] shrink-0 snap-start flex-col rounded-card bg-white p-6 shadow-card sm:w-[280px] lg:w-[300px]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[18px] font-bold ${AVATAR_TINTS[i % AVATAR_TINTS.length]}`}
                  >
                    {initialOf(name)}
                  </span>
                  <div className="flex flex-col">
                    <p className="text-[15px] font-bold text-brand-navy lg:text-body-sm">
                      {name}
                    </p>
                    <p className="text-[13px] text-brand-navy/50">{subject}</p>
                  </div>
                </div>

                <div className="relative mt-4 flex-1 overflow-hidden">
                  <p className="text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                    «{text}»
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            ))}

            {/* 13-я карточка — переход на страницу со всеми отзывами */}
            <a
              href="#"
              className="flex h-[300px] w-[260px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-card bg-brand-blue p-6 text-center shadow-card transition-opacity hover:opacity-90 sm:w-[280px] lg:w-[300px]"
            >
              <p className="text-[18px] font-bold leading-snug text-white">
                Смотреть все отзывы родителей
              </p>
              <span className="flex items-center gap-2 text-[15px] font-bold text-white">
                Перейти
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-card bg-brand-blue px-6 py-5 text-left sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
          <div>
            <h3 className="text-[24px] font-bold leading-tight text-white lg:text-h3 lg:font-h3">
              Больше реальных отзывов от наших родителей
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/90 lg:text-body-sm">
              Родители регулярно делятся впечатлениями о занятиях, успехах
              своих детей и результатах обучения в наших сообществах.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <a
              href={TELEGRAM_REVIEWS_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-button bg-white px-6 py-3.5 font-button text-button text-brand-blue shadow-card transition-opacity hover:opacity-90"
            >
              <TelegramIcon width={24} height={24} />
              Telegram
            </a>
            <a
              href={MAX_REVIEWS_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-button bg-white px-6 py-3.5 font-button text-button text-brand-blue shadow-card transition-opacity hover:opacity-90"
            >
              <MaxIcon width={24} height={24} />
              MAX
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
