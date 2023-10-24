import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const FetchNews = createAsyncThunk(
  'news/fetchNews', 
  async () => {
    var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2a1080d9d2e944ca871c32c1b093866e';
    const res = await fetch(url)
    const data = await res.json()
    return data
}
)

const newsSlice = createSlice({
  name: 'news', 
  initialState: {
      newsArr:[],
      isLoading:false,
      error:null,
      sortOrder: 'DESC'
  },

reducers:{
  toggleSortOrder: (state) => {
    state.sortOrder = state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    state.newsArr.articles.sort((a, b) => {
      if (state.sortOrder === 'ASC') {
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      }
      else {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      }
    })
},
},
extraReducers: (builder) => {
  builder.addCase(FetchNews.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(FetchNews.fulfilled, (state, action) => {
    state.newsArr = action.payload
    state.isLoading = false
  })
  builder.addCase(FetchNews.rejected, (state, action) => {
    state.isLoading = false
    state.error = true
  })
},

})

export const { toggleSortOrder } = newsSlice.actions
export default newsSlice.reducer 
