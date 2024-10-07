const getUpcomingMonths = ({
                             numMonths,
                             incomeSources,
                             expenseSources,
                             savingsMethods
                           }) => {

  const monthNames = {
      1: "Январь",
      2: "Февраль",
      3: "Март",
      4: "Апрель",
      5: "Май",
      6: "Июнь",
      7: "Июль",
      8: "Август",
      9: "Сентябрь",
      10: "Октябрь",
      11: "Ноябрь",
      12: "Декабрь"
    };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  const monthsArray = [];

  for (let i = 0; i < numMonths; i++) {
    // Вычисляем следующий месяц и год
    let month = (currentMonth + i) % 12;
    let year = currentYear + Math.floor((currentMonth + i) / 12);

    // Форматируем месяц и год в нужный формат 'MM.YYYY'
    const formattedMonth = monthNames[String(month+1)];
    monthsArray.push({
      id: i,
      month: `${year} ${formattedMonth}`,
      incomes: incomeSources,
      expenses: expenseSources,
      savingsMethods: savingsMethods
    });

  }

  return monthsArray;
};

export default getUpcomingMonths;