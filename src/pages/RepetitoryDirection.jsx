import Header from '../components/Header'
import Container from '../components/Container'

// Заглушка: маршрут и ссылки на страницу "Предметные репетиторы" уже
// подключены (шапка, карточки "Предметные репетиторы" и "Подготовка к
// ВПР" на главной), но реальный контент блоков ещё не утверждён — см.
// content/pages/napravlenie-repetitory.md. Как только текст появится,
// эта заглушка будет заменена полной вёрсткой по структуре страницы
// "Нейроскорочтение".
export default function RepetitoryDirection() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />
      <section className="bg-bg-white">
        <Container className="py-16 md:py-24">
          <h1 className="text-[32px] font-extrabold leading-tight text-brand-navy md:text-[40px] lg:text-h1 lg:font-h1">
            Предметные репетиторы
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
            Страница в разработке — скоро здесь появится подробный
            рассказ о программе.
          </p>
          <div id="vpr" className="mt-10 rounded-card border-2 border-brand-green bg-white p-6">
            <h2 className="text-[20px] font-bold leading-snug text-brand-navy">
              Подготовка к ВПР
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#5B6180] lg:text-body-sm">
              Раздел появится вместе с остальным контентом страницы.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
