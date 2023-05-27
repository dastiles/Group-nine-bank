'use client'


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import paymentsService from './paymentsService'



const initialState = {
    payments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',

}

// create new transactions
export const createPayment = createAsyncThunk('payment/create', async (paymentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await paymentsService.makePayment(paymentData, token)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

export const getPayments = createAsyncThunk('payments/get', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await paymentsService.getPayment(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})


export const paymentsSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createPayment.pending, (state) => {
            state.isLoading = true
        })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.payments.push(action.payload)
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.message = action.payload
            })
            .addCase(getPayments.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPayments.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.payments = action.payload
            })
            .addCase(getPayments.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.message = action.payload
            })
    }
})

export const { reset } = paymentsSlice.actions
export default paymentsSlice.reducer

