import { createSelector } from 'reselect'
export const userAuthSelector = createSelector(
   state=>state.userAuthReducer,
   userAuthReducer=>userAuthReducer.response
)