import { ProductModel } from "@/api/models";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"

interface PayloadSetSuccessFromSearch {
    data: ProductModel[] | [];
}
interface QuickSearch extends Pick<SearchState, 'isLoading'> {
    results: ProductModel[] | [];
    prevKeyword: string | '';
}
interface SearchState {
    isInitialized: boolean;
    isLoading: boolean;
    error: Error | null;
    keyWords: [];
    list: ProductModel[] | [];
    quickSearch: QuickSearch;
}

const initialState: SearchState = {
    isInitialized: false,
    isLoading: false,
    error: null,
    list: [],
    keyWords: [],

    quickSearch: {
        results: [],
        isLoading: false,
        prevKeyword: ''
    }
}

const searchSlice: Slice<
    SearchState,
    {
        setResultFromSearch: (
            state: SearchState,
            action: PayloadAction<Pick<SearchState, 'keyWords'>>
        ) => void;

        setLoadingFromSearch: (
            state: SearchState
        ) => void;

        setErrorFromSearch: (
            state: SearchState,
            action: PayloadAction<Error | null>
        ) => void;

        setSuccessFromSearch: (
            state: SearchState,
            action: PayloadAction<PayloadSetSuccessFromSearch>
        ) => void;

        setLoadingFromQuickSearch: (state: SearchState) => void;
        setSuccessFromQuickSearch: (
            state: SearchState,
            action: PayloadAction<[] | ProductModel[]>
        ) => void;
    },
    'search'
> = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setResultFromSearch(
            state: SearchState,
            action: PayloadAction<Pick<SearchState, 'keyWords'>>
        ) {
            state.keyWords = action.payload.keyWords;
            state.isInitialized = true;
        },

        setLoadingFromSearch(state: SearchState) {
            state.isLoading = true;
        },

        setErrorFromSearch(
            state: SearchState,
            action: PayloadAction<Error | null>
        ) {
            state.error = action.payload;
            state.isLoading = false;
        },

        setSuccessFromSearch(
            state: SearchState,
            action: PayloadAction<PayloadSetSuccessFromSearch>
        ) {
            state.list = action.payload.data;
            state.isLoading = false;
            state.error = null;
        },

        setLoadingFromQuickSearch(
            state: SearchState
        ) {
            state.quickSearch.isLoading = true;
        },

        setSuccessFromQuickSearch(
            state: SearchState,
            action: PayloadAction<[] | ProductModel[]>
        ) {
            state.quickSearch.isLoading = false;
            state.quickSearch.results = action.payload;
        }
    }
})

export const {
    setResultFromSearch,
    setLoadingFromSearch,
    setErrorFromSearch,
    setSuccessFromSearch,
    setLoadingFromQuickSearch,
    setSuccessFromQuickSearch
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

export const selectResultFromSearch = () => {

}

export const selectProductFromSearch = () => {

}

export const selectProductFromQuickSearch = () => {
    
}