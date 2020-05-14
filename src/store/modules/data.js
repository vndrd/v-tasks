
const state = {
    tasks: [
        /*
        {id: 1, text: 'youtube',date: '12-05-2020',checked: true},
        {id: 2, text: 'Comer esto',date: '12-05-2020',checked: false},
        {id: 2, text: 'Leer esto',date: '14-05-2020',checked: false},
        {id: 3, text: 'Alimentar Scrappy',date: '11-05-2020',checked: false},*/
    ],
    top_id: 4
}
const getters = {
    alltasks: state => state.tasks,
    getTopId: state =>state.top_id,
    orderedByDate: (state) => {
        let dates_only = state.tasks.map(tarea => tarea.date)
        let no_repeat = [...new Set(dates_only)];
        let result = no_repeat.reduce( (a, date) => {
            a.push({
                tareas:state.tasks.filter( tarea => tarea.date === date),
                date
            })
            return a
        },[])
        let orden = result.sort((a,b) => {
            let aDate=a.date.split('-').reverse().join('-')
            let bDate=b.date.split('-').reverse().join('-')
            return new Date(aDate) > new Date(bDate) ? 1 : -1; 
        })
        return orden
    },
    
}
const actions = {
    callTasks: function({commit}){
        //localStorage.clear()
        let tasks = []
        let id = 1
        if(localStorage.tareas){
            tasks = JSON.parse(localStorage.getItem("tareas"))
            id = localStorage.getItem("topid")
        }
        commit('setTasks',tasks)
        commit('setTopId',id)
    },
    newTask: function({commit},tarea) {
        let tasks = []
        if(localStorage.tareas){
            tasks = JSON.parse(localStorage.getItem("tareas"));
        }
        tasks.push(tarea)
        localStorage.setItem("tareas",JSON.stringify(tasks))
        localStorage.setItem("topid", tarea.id + 1)
        commit('newTask',tarea)
    }
}
const mutations = {
    newTask: (state,tarea) => {
        state.tasks.push(tarea) 
        state.top_id += 1
    },
    setTopId: (state,id) => state.top_id = id,
    setTasks: (state,tareas) => {state.tasks = tareas}
}

export default {
    state,
    getters,
    actions,
    mutations,
}