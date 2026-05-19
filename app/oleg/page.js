export default function OlegPage() {
  return (
    <main className="oleg-page">
      <style>{`
        .oleg-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f4f7f5 0%, #edf4f2 50%, #e6f0ec 100%);
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }

        .oleg-card {
          width: 100%;
          max-width: 460px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(18px);
          border-radius: 34px;
          padding: 38px 28px;
          box-shadow: 0 25px 60px rgba(15,23,42,0.12);
          border: 1px solid rgba(255,255,255,0.7);
          text-align: center;
          animation: fadeUp 0.7s ease;
        }

        .oleg-photo {
          width: 132px;
          height: 132px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 22px;
          border: 4px solid white;
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          animation: softZoom 0.8s ease;
        }

        .oleg-badge {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg,#dff7ea,#edfdf5);
          color: #15803d;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .oleg-title {
          font-size: 42px;
          margin: 0 0 14px;
          color: #0f172a;
          line-height: 1.1;
        }

        .oleg-subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: #475467;
          margin: 0 0 28px;
        }

        .main-call {
          display: block;
          width: 100%;
          padding: 18px;
          border-radius: 20px;
          background: linear-gradient(135deg,#16a34a,#06b6d4);
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 18px;
          box-shadow: 0 18px 40px rgba(34,197,94,0.28);
          transition: 0.25s ease;
        }

        .main-call:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 50px rgba(34,197,94,0.36);
        }

        .button-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .small-button {
          padding: 15px;
          border-radius: 18px;
          background: rgba(255,255,255,0.86);
          border: 1px solid #e4e7ec;
          text-decoration: none;
          color: #101828;
          font-weight: 700;
          font-size: 16px;
          transition: 0.25s ease;
        }

        .small-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(15,23,42,0.10);
          border-color: #16a34a;
        }

        .special-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 28px 0 4px;
        }

        .special-card {
          padding: 14px 10px;
          border-radius: 18px;
          background: rgba(255,255,255,0.7);
          border: 1px solid #e4e7ec;
          color: #344054;
          font-weight: 700;
          font-size: 14px;
          transition: 0.25s ease;
        }

        .special-card:hover {
          transform: translateY(-3px);
          background: #ffffff;
          box-shadow: 0 14px 30px rgba(15,23,42,0.08);
        }

        .oleg-note {
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid #e4e7ec;
          color: #667085;
          font-size: 15px;
          line-height: 1.7;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes softZoom {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 520px) {
          .oleg-card {
            padding: 30px 22px;
          }

          .oleg-title {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="oleg-card">
        <img src="/oleg.jpg" alt="Олег Киктев" className="oleg-photo" />

        <div className="oleg-badge">
          Краснодар • Недвижимость • Более 8 лет опыта
        </div>

        <h1 className="oleg-title">Олег Киктев</h1>

        <p className="oleg-subtitle">
          Помогаю спокойно и безопасно проводить сделки с недвижимостью в Краснодаре.
        </p>

        <a href="tel:+79181234567" className="main-call">
          📞 Позвонить
        </a>

        <div className="button-grid">
          <a href="https://t.me/" target="_blank" className="small-button">
            ✈️ Telegram
          </a>

          <a href="https://wa.me/79181234567" target="_blank" className="small-button">
            💬 WhatsApp
          </a>

          <a href="https://max.ru/" target="_blank" className="small-button">
            🚀 MAX
          </a>

          <a href="#" className="small-button">
            ⭐ Отзывы
          </a>
        </div>

        <div className="special-grid">
          <div className="special-card">🏙️ Новостройки</div>
          <div className="special-card">🏡 Дома</div>
          <div className="special-card">🤝 Сделки</div>
          <div className="special-card">📈 Инвестиции</div>
        </div>

        <div className="oleg-note">
          Надёжный подбор недвижимости без давления, спешки и лишних рисков.
        </div>
      </div>
    </main>
  );
}
