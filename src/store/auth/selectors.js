export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.user?.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectExpireTime = (state) => state.auth.expireTime;
export const selectPath = (state) => state.auth.path;
