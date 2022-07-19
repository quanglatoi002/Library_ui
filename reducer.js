const init = {
    todos: [
        {
            title: 'Learn Ja',
            completed: false,
        },
        {
            title: 'Learn HTML, CSS',
            completed: true,
        },
    ]
}

export default function reducer(state = init, action, args) {
    switch(action) {

        default:
            return state
    }
}