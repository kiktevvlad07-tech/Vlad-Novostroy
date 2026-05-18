'use client';

import { useState } from 'react';

const purchaseConditions = [
  'Семейная ипотека — ребёнок до 7 лет или ребёнок-инвалид до 18 лет',
  'Семейная ипотека — двое детей до 18 лет',
  'IT-ипотека',
  'Льготная ипотека 2% в новых регионах',
  'Сельская ипотека',
  'Стандартная ипотека с субсидией',
  'Военная ипотека',
  'Военная + семейная ипотека',
  'Наличный расчёт',
  'Рассрочка',
  'Нужна консультация по одобрению'
];

export default function Home() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function updateProgress(form) {
    const fields = [
      'goal',
      'name',
      'phone',
      'messenger',
      'district',
      'initialPaymentFrom',
      'initialPaymentTo',
      'propertyType',
      'deadline',
      'area',
      'renovation',
      'conditions',
      'comment'
    ];

    const data = new FormData(form);
    let filled = 0;

    fields.forEach((field) => {
      if (field === 'conditions') {
        if (data.getAll('conditions').length > 0) filled += 1;
      } else if (data.get(field)) {
        filled += 1;
      }
    });

    setProgress(Math.round((filled / fields.length) * 100));
  }

  function handleProgressChange(event) {
    updateProgress(event.currentTarget);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    const form = event.currentTarget;
    const data = new FormData(form);

    const initialPaymentFrom = data.get('initialPaymentFrom');
    const initialPaymentTo = data.get('initialPaymentTo');

    const payload = {
      goal: data.get('goal'),
      name: data.get('name'),
      phone: data.get('phone'),
      messenger: data.get('messenger'),
      district: data.get('district'),
      initialPayment: `От: ${initialPaymentFrom || 'не указано'} / До: ${initialPaymentTo || 'не указано'}`,
      propertyType: data.get('propertyType'),
      deadline: data.get('deadline'),
      area: data.get('area'),
      renovation: data.get('renovation'),
      conditions: data.getAll('conditions'),
      comment: data.get('comment')
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      setStatus('ok');
      form.reset();
      setProgress(0);
    } catch {
      setStatus('err');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <div className="badge">Краснодар • Новостройки • Ипотека</div>

          <img
            src="/vlad.jpg"
            alt="Владислав Киктев"
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '18px',
              border: '4px solid white',
              boxShadow: '0 16px 35px rgba(0,0,0,0.12)'
            }}
          />

          <h1>Владислав Киктев</h1>

          <p className="subtitle">
            Эксперт по новостройкам Краснодара. Помогу подобрать квартиру, дом или инвестиционный объект без комиссии и переплат.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '22px' }}>
            <a href="https://www.ayax.ru/rieltory/16356/" target="_blank" style={{ padding: '14px 18px', borderRadius: '18px', background: 'linear-gradient(135deg,#22c55e,#06b6d4)', color: 'white', textDecoration: 'none', fontWeight: '800' }}>
              ⭐ Отзывы
            </a>

            <a href="https://t.me/ovkkik" target="_blank" style={{ padding: '14px 18px', borderRadius: '18px', background: '#ffffff', color: '#101828', textDecoration: 'none', fontWeight: '800', border: '1px solid #d0d5dd' }}>
              ✈️ Telegram
            </a>

            <a href="https://max.ru/krdshpatel" target="_blank" style={{ padding: '14px 18px', borderRadius: '18px', background: '#ffffff', color: '#101828', textDecoration: 'none', fontWeight: '800', border: '1px solid #d0d5dd' }}>
              🚀 MAX
            </a>
          </div>
        </section>

        <form className="form" onSubmit={handleSubmit} onChange={handleProgressChange} onInput={handleProgressChange}>
          <div className="section">
            <div className="section-title">1. Цель обращения</div>
            <div className="options">
              <label className="option"><input type="radio" name="goal" value="Покупка новостройки" required /> 🏙️ Покупка новостройки: квартира или дом</label>
              <label className="option"><input type="radio" name="goal" value="Покупка вторичного жилья" /> 🏠 Покупка вторичного жилья</label>
              <label className="option"><input type="radio" name="goal" value="Хочу продать" /> 💰 Хочу продать недвижимость</label>
            </div>
          </div>

          <div className="section">
            <div className="section-title">2. Как с вами связаться?</div>

            <div className="grid">
              <div>
                <label>Имя</label>
                <input name="name" placeholder="Например: Владислав" required />
              </div>

              <div>
                <label>Телефон</label>
                <input name="phone" placeholder="+7..." required />
              </div>
            </div>

            <label>Удобный способ связи</label>
            <div className="options">
              <label className="option"><input type="radio" name="messenger" value="Звонок" required /> 📞 Звонок</label>
              <label className="option"><input type="radio" name="messenger" value="Telegram" /> ✈️ Telegram</label>
              <label className="option"><input type="radio" name="messenger" value="MAX" /> 💬 MAX</label>
              <label className="option"><input type="radio" name="messenger" value="WhatsApp" /> 🟢 WhatsApp</label>
            </div>
          </div>

          <div className="section">
            <div className="section-title">3. Параметры поиска</div>

            <label>Район</label>
            <input name="district" placeholder="Например: Западный обход, ФМР, Губернский" />

            <label>Что рассматриваете?</label>
            <select name="propertyType">
              <option>Студия</option>
              <option>1-комнатная</option>
              <option>2-комнатная</option>
              <option>3-комнатная</option>
              <option>4+ комнат</option>
              <option>Дом</option>
            </select>

            <div className="grid">
              <div>
                <label>Максимальный срок сдачи</label>
                <select name="deadline">
                  <option>Уже сдан</option>
                  <option>До 6 месяцев</option>
                  <option>До 1 года</option>
                  <option>До 2 лет</option>
                  <option>Не принципиально</option>
                </select>
              </div>

              <div>
                <label>Площадь</label>
                <input name="area" placeholder="Например: от 45 м²" />
              </div>
            </div>

            <label>Ремонт</label>
            <div className="options">
              <label className="option"><input type="radio" name="renovation" value="Да" /> ✅ Да</label>
              <label className="option"><input type="radio" name="renovation" value="Нет" /> ❌ Нет</label>
              <label className="option"><input type="radio" name="renovation" value="Желательно" /> ⭐ Желательно</label>
            </div>
          </div>

          <div className="section">
            <div className="section-title">4. Первый взнос</div>

            <div className="grid">
              <div>
                <label>От</label>
                <input name="initialPaymentFrom" placeholder="Например: 500 000 ₽" />
              </div>

              <div>
                <label>До</label>
                <input name="initialPaymentTo" placeholder="Например: 2 000 000 ₽" />
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-title">5. Условия покупки</div>
            <div className="options">
              {purchaseConditions.map((item) => (
                <label className="option" key={item}>
                  <input type="checkbox" name="conditions" value={item} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section-title">6. Дополнительные сведения</div>
            <textarea name="comment" placeholder="Напишите, что важно: школа рядом, минимальный платёж, переезд, инвестиция, маткапитал, продажа своей квартиры и т.д." />
          </div>

          <button className="submit" disabled={loading}>
            {loading ? 'Отправляю...' : 'Отправить заявку'}
          </button>

          {status === 'ok' && <div className="notice ok">✅ Заявка успешно отправлена. Я скоро свяжусь с вами.</div>}
          {status === 'err' && <div className="notice err">Не получилось отправить заявку. Попробуйте ещё раз.</div>}
        </form>

        <div className="footer-note">
          Нажимая кнопку, вы соглашаетесь на обработку данных для обратной связи.
        </div>
      </div>

      <div className="sticky-progress">
        <div className="sticky-progress-text">
          <span>Заполнение заявки</span>
          <span>{progress}%</span>
        </div>
        <div className="sticky-progress-track">
          <div className="sticky-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </main>
  );
}
