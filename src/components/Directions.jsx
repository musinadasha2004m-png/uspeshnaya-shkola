import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardCheck,
  Compass,
  FileText,
  GraduationCap,
  School,
} from 'lucide-react'
import Container from './Container'
import iconBackpack from '../assets/icon-backpack.png'

const DIRECTIONS = [
  {
    icon: School,
    tint: 'bg-brand-blue',
    title: 'Подготовка к школе',
    description: 'Занятия онлайн интересны и познавательны даже детям 5–7 лет.',
  },
  {
    icon: BookOpen,
    tint: 'bg-brand-purple',
    title: 'Предметные репетиторы',
    description:
      'Определим уровень знаний ребенка, найдем пробелы и составим план обучения.',
  },
  {
    icon: Brain,
    tint: 'bg-brand-pink',
    title: 'Нейроскорочтение',
    description:
      'Развиваем память, внимание и скорость чтения через интересные упражнения.',
  },
  {
    icon: ClipboardCheck,
    tint: 'bg-brand-yellow',
    title: 'Подготовка к ВПР',
    description:
      'Разберем структуру проверочной работы и поможем уверенно справиться с заданиями.',
  },
  {
    icon: FileText,
    tint: 'bg-brand-green',
    title: 'Подготовка к ОГЭ',
    description: 'Научим понимать логику экзамена и подготовим к каждому заданию.',
  },
  {
    icon: GraduationCap,
    tint: 'bg-brand-purple',
    title: 'Подготовка к ЕГЭ',
    description:
      'Поможем получить высокий балл и уверенно поступить в выбранный вуз.',
  },
  {
    icon: Compass,
    tint: 'bg-brand-blue',
    title: 'Профориентация',
    description:
      'Поможем выбрать профессию, которая соответствует интересам и способностям ребенка.',
  },
]

export default function Directions() {
  return (
    <section id="directions" className="bg-bg-lavender">
      <Container className="py-10 md:py-14">
        <div className="max-w-2xl">
          <h2 className="text-[28px] font-bold leading-tight text-brand-navy lg:text-h2 lg:font-h2">
            Выберите направление
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Мы поможем подобрать программу и ответим на все вопросы на
            бесплатной консультации.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {DIRECTIONS.map(({ icon: Icon, tint, title, description }) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-card bg-white p-4 shadow-card md:p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${tint}`}
                >
                  <Icon size={14} strokeWidth={2.2} className="text-white" />
                </span>
                <h3 className="text-[18px] font-bold leading-snug text-brand-navy lg:text-[22px]">
                  {title}
                </h3>
              </div>

              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
                {description}
              </p>

              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-purple transition-all hover:gap-2.5 lg:text-caption"
              >
                Подробнее о программе
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          ))}

          <div className="flex h-full flex-col rounded-card bg-brand-purple p-4 shadow-card md:p-5">
            <div className="flex items-center gap-3">
              <img
                src={iconBackpack}
                alt=""
                className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_6px_14px_rgba(27,36,85,0.25)]"
              />
              <h3 className="text-[18px] font-bold leading-snug text-white lg:text-[22px]">
                Не нашли то, что нужно?
              </h3>
            </div>

            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/80 lg:text-body-sm">
              Расскажем на бесплатной консультации, какая программа подойдёт
              именно вашему ребенку
            </p>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-white transition-all hover:gap-2.5 lg:text-caption"
            >
              Записаться на консультацию
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
