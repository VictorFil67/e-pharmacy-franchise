export const selectCustomers = (state) =>
  state.statistics.statistics?.recentCustomers;
export const selectGoods = (state) => state.statistics?.clientProducts;
export const selectClientInfo = (state) => state.statistics?.clientInfo;
export const selectstatisticsResult = (state) =>
  state.statistics.statistics?.statisticsResult;
