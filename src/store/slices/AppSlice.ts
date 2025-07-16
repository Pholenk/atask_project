import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GithubUser } from '@services';
import { fetchGithubUsers } from '../thunks';

interface AppState {
  loading: boolean;
  error: string | null;
  githubUsers: GithubUser[];
}

const initialState: AppState = {
  loading: false,
  error: null,
  githubUsers: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGithubUsers.fulfilled, (state, action: PayloadAction<GithubUser[]>) => {
        
        state.loading = false;
        state.githubUsers = action.payload;
      })
      .addCase(fetchGithubUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setLoading, setError } = appSlice.actions;
export default appSlice.reducer;
