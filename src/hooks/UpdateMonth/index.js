const getUpcomingMonths = (numMonths) => {
    const currentDate = new Date(); // Получаем текущую дату
    const currentMonth = currentDate.getMonth(); // Получаем текущий месяц (0-11)
    let currentYear = currentDate.getFullYear(); // Получаем текущий год

    const monthsArray = [];

    for (let i = 0; i < numMonths; i++) {
      // Вычисляем следующий месяц и год
      let month = (currentMonth + i + 1) % 12; // добавляем 1, чтобы начать со следующего месяца
      let year = currentYear + Math.floor((currentMonth + i + 1) / 12); // вычисляем год

      // Форматируем месяц и год в нужный формат 'MM.YYYY'
      const formattedMonth = String(month + 1).padStart(2, '0'); // к месяцу добавляем 1 и форматируем
      monthsArray.push({
        id: i,
        month: `${formattedMonth}.${year}`
      });

    }
    return monthsArray;
  };

export default getUpcomingMonths;