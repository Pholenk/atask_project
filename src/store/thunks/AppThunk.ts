import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchGithubUsers, type GithubSearchResponse } from '@services';

export const fetchGithubUsers = createAsyncThunk<GithubSearchResponse[], string>(
  'github/fetchUsers',
  async (query, thunkAPI) => {
    try {
      const data = await searchGithubUsers(query);
      
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  },
);
