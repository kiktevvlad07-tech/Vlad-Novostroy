export async function POST(request) {
  try {
    const data = await request.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return Response.json({ error: 'Telegram settings are missing' }, { status: 500 });
    }

    const conditions = data.conditions && data.conditions.length
      ? data.conditions.join('\n• ')
      : 'Не указано';

    const message = `
📩 Новая заявка с формы

🎯 Цель:
${data.goal || 'Не указано'}

👤 Клиент:
${data.name || 'Не указано'}

📞 Телефон:
${data.phone || 'Не указано'}

💬 Связь:
${data.messenger || 'Не указано'}

📍 Район:
${data.district || 'Не указано'}

🏠 Что рассматривает:
${data.propertyType || 'Не указано'}

📐 Площадь:
${data.area || 'Не указано'}

⏳ Срок сдачи:
${data.deadline || 'Не указано'}

🛠 Ремонт:
${data.renovation || 'Не указано'}

💵 Первый взнос:
${data.initialPayment || 'Не указано'}

🏦 Условия покупки:
• ${conditions}

📝 Дополнительные сведения:
${data.comment || 'Не указано'}
`;

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    if (!telegramResponse.ok) {
      return Response.json({ error: 'Telegram error' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
