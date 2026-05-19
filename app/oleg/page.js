export default function OlegPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #f4f7f5 0%, #edf4f2 50%, #e6f0ec 100%)',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '430px',
          background: 'rgba(255,255,255,0.78)',
          backdropFilter: 'blur(18px)',
          borderRadius: '34px',
          padding: '38px 28px',
          boxShadow: '0 25px 60px rgba(15,23,42,0.12)',
          border: '1px solid rgba(255,255,255,0.7)',
          textAlign: 'center'
        }}
      >
        <img
          src="/oleg.jpg"
          alt="Олег Киктев"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '22px',
            border: '4px solid white',
            boxShadow: '0 16px 40px rgba(0,0,0,0.12)'
          }}
        />

        <div
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            borderRadius: '999px',
            background:
              'linear-gradient(135deg,#dff7ea,#edfdf5)',
            color: '#15803d',
            fontWeight: '700',
            fontSize: '14px',
            marginBottom: '20px'
          }}
        >
          Краснодар • Недвижимость • Более 8 лет опыта
        </div>

        <h1
          style={{
            fontSize: '42px',
            marginBottom: '14px',
            color: '#0f172a',
            lineHeight: '1.1'
          }}
        >
          Олег Киктев
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#475467',
            marginBottom: '34px'
          }}
        >
          Помогаю спокойно и безопасно проводить сделки
          с недвижимостью в Краснодаре.
        </p>

        <a
          href="tel:+79181234567"
          style={{
            display: 'block',
            width: '100%',
            padding: '18px',
            borderRadius: '20px',
            background:
              'linear-gradient(135deg,#16a34a,#06b6d4)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: '800',
            marginBottom: '18px',
            boxShadow: '0 18px 40px rgba(34,197,94,0.28)'
          }}
        >
          📞 Позвонить
        </a>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}
        >
          <a
            href="https://t.me/"
            target="_blank"
            style={smallButton}
          >
            ✈️ Telegram
          </a>

          <a
            href="https://wa.me/79181234567"
            target="_blank"
            style={smallButton}
          >
            💬 WhatsApp
          </a>

          <a
            href="https://max.ru/"
            target="_blank"
            style={smallButton}
          >
            🚀 MAX
          </a>

          <a
            href="#"
            style={smallButton}
          >
            ⭐ Отзывы
          </a>
        </div>

        <div
          style={{
            marginTop: '34px',
            paddingTop: '24px',
            borderTop: '1px solid #e4e7ec',
            color: '#667085',
            fontSize: '15px',
            lineHeight: '1.7'
          }}
        >
          Надёжный подбор недвижимости без давления,
          спешки и лишних рисков.
        </div>
      </div>
    </main>
  );
}

const smallButton = {
  padding: '15px',
  borderRadius: '18px',
  background: 'rgba(255,255,255,0.82)',
  border: '1px solid #e4e7ec',
  textDecoration: 'none',
  color: '#101828',
  fontWeight: '700',
  fontSize: '16px',
  transition: '0.25s'
};
