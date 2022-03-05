const init = () => {
    localStorage.setItem('tasks', JSON.stringify([]))
}

const getTasks = () => {
    if (localStorage.getItem('tasks')) {
        return JSON.parse(localStorage.getItem('tasks'))
    } else {
        return []
    }
}

const setTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export default {
    init,
    setTasks,
    getTasks
}