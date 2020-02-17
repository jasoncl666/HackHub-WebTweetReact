export const user = {
    state: {
        profile: {},
        token: ''
    },

    // pure function
    reducers: {
        update(prevState, user){
            return{
                ...prevState,
                ...user 
            }
        }
    },

    // other fucntions : User Api
    effects: {

    }
}

export const tweets = {
    state: []
}