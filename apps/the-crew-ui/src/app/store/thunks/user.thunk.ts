import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from '@the-crew/common';

import { userApi } from '../../services';
import { userActions } from '../slices';

const getUser = createAsyncThunk(
  'users/GetOne',
  async (args: { id: uuid; query?: CreateQueryParams }, { dispatch }) => {
    const { id, query = {} } = args;
    const response = await userApi.getOne(id, query);
    dispatch(userActions.addUser(response.data));
  },
);

export { getUser };

export const userThunks = {
  getUser,
};
