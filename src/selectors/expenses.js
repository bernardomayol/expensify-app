import moment from 'moment';

// timestamps (milliseconds)
// January 1st 1970 (unix epock)
// 33400, 10, -203
// Get Visible expenses
export default (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // typeof startDate !== 'number' || expense.createAt >= startDate;
    const createAtMoment = moment(expense.createAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy == 'date') {
      return a.createAt < b.createAt ? 1 : -1   // -1 va primero esta es orden descendente primero los mas recientes
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1
    }
  });
} 