
const state = {
    tasks: [
        {id: 1, text: 'Tarea prueba',date: '12-05-2020',checked: true},
        {id: 2, text: 'Tarea prueba2',date: '12-05-2020',checked: false},
        {id: 2, text: 'Tarea prueba2',date: '14-05-2020',checked: false},
        {id: 3, text: 'Alimentar Scrappy',date: '11-05-2020',checked: false},
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
    prueba: function({commit}){
        console.log("pppppppppprueba")
        console.log(commit)
    },
    newTask: function({commit},tarea) {
        commit('newTask',tarea)
    }
}
const mutations = {
    newTask: (state,tarea) => {
        state.tasks.push(tarea) 
        state.top_id += 1
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}