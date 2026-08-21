import Container from './Container'
import giftBox from '../assets/gift-box.png'
import iconStar from '../assets/icon-star.png'

// Звёзды слева — для баланса с подарками справа, разного размера,
// частично выступают за верхний/нижний край плашки (по духу декора
// в блоке "Будьте ближе к жизни нашей школы"). Только sm+: на самых
// узких телефонах текст и так переносится на много строк — с
// боковыми резервами под декор плашка раздувается по высоте, поэтому
// там подарок — маленькая decorативная деталь над текстом, в потоке.
const STARS = [
  { size: 52, style: { top: '-18px', left: '18px' } },
  { size: 30, style: { top: '48%', left: '2px' } },
  { size: 42, style: { bottom: '-16px', left: '34px' } },
]

export default function Promo() {
  return (
    <section className="bg-bg-white">
      <Container className="py-10 md:py-14">
        <div className="relative rounded-card bg-brand-pink px-4 py-4 sm:py-3 md:px-10 md:py-2">
          {/* Компактный вариант — только для самых узких экранов (< sm) */}
          <img
            src={giftBox}
            alt="Подарочные коробки"
            className="relative z-10 mx-auto mb-4 h-24 w-auto object-contain drop-shadow-[0_12px_24px_rgba(27,36,85,0.25)] sm:hidden"
          />

          {/* Полная композиция с выступающим декором — sm+ */}
          {STARS.map(({ size, style }, i) => (
            <img
              key={i}
              src={iconStar}
              alt=""
              className="pointer-events-none absolute z-0 hidden object-contain drop-shadow-[0_8px_16px_rgba(27,36,85,0.2)] sm:block"
              style={{ width: size, height: size, ...style }}
            />
          ))}

          <img
            src={giftBox}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-1/2 z-0 hidden h-40 w-auto -translate-y-1/2 object-contain drop-shadow-[0_16px_32px_rgba(27,36,85,0.25)] sm:block md:right-6 md:h-72 lg:right-10 lg:h-80"
          />

          <div className="relative z-10 text-center sm:pl-16 sm:pr-48 sm:text-left md:pl-16 md:pr-[22rem] lg:pr-[26rem]">
            <h2 className="text-[30px] font-extrabold leading-[1.15] text-white sm:whitespace-nowrap sm:text-[44px] sm:leading-[1.05] lg:text-[48px]">
              Профориентация
              <br className="sm:hidden" /> в подарок
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/90 lg:text-body-sm">
              При покупке годовой программы. Поможем ребенку определиться с
              будущей профессией, выбрать экзамены, которые понадобятся для
              поступления, и сделать первый шаг к профессии мечты.
            </p>
            <a
              href="https://max.ru/u/f9LHodD0cOIAsGNqHrsBHmBuQ_E92Z2BhD2_J4ybwT0oPafu1hB_p2op9YA"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-button bg-white px-6 py-2.5 font-button text-button text-brand-pink shadow-card transition-opacity hover:opacity-90"
            >
              Узнать подробнее
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
