const handlePending = (state) => {

    state.isLoading = true
}

const handleFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.items = payload
    state.error = ''
}
const handleUpdate = (state, { payload }) => {
    state.isLoading = false
    state.items.unshift(payload)
    state.error = ''
}
const handleDelete = (state, { payload }) => {
    state.isLoading = false
    state.items = state.items.filter(item => item.id !== payload.id)
    state.error = ''
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
}
export { handleRejected, handleDelete, handleUpdate, handleFulfilled, handlePending }