
const initialState = {
    count: 0,
    cities: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'INCREMENT':
            newState.count += action.value;
            if (newState.count === 10) newState.count = 0;
            break;
        case 'DECREMENT':
            newState.count -= action.value;
            if (newState.count === -10) newState.count = 0;
            break;
        case 'RESET':
            newState.count = 0;
            break;
        case 'SUBMIT':
            {
                axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then(res => {
                        const persons = res.data;
                        this.setState({ persons });
                    })
            }
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;