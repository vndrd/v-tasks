<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <h1>Tareas</h1> 
      <Lista v-for="item in ordenadosPorFecha" :item="item" :key="item.date"/>
    </div>
    <div class="grid-item-2">
      <Nuevo @agregar="agregar" />
    </div>
  </div>
</template>

<script>
import Lista from '@/components/Lista.vue'
import Nuevo from '@/components/Nuevo.vue'

export default {
  name: 'Home',
  data(){
    return {
      dt: {
          tareas: [
            
            {id: 1, text: 'Tarea prueba',date: '12-05-2020',checked: true},
            {id: 2, text: 'Tarea prueba2',date: '12-05-2020',checked: false},
            {id: 3, text: 'Tarea prueba33',date: '11-05-2020',checked: false},
            
          ],
          top_id: 3,
      },
      st: {

      }
    }
  },  
  methods: {
    agregar({text,today,checked = false}) {
      let date = this.dateString( new Date(today))
      this.dt.top_id++;
      this.dt.tareas.push(
        {
          text, 
          id:this.dt.top_id,
          checked,
          date
        }
      )
    },
    dateString(date){
      let convertirString = (num) => num < 10 ? `0${num}`: num;
      let concatenar = ({dia,mes,year}) => `${dia}-${mes}-${year}`
      let dateobj = {
          dia: convertirString(date.getDate()),
          mes: convertirString(date.getMonth()+1),
          year: date.getFullYear()
      }
      return concatenar(dateobj)
    }
  },
  components: {
    Lista, Nuevo,
  },
  computed: {
    ordenadosPorFecha(){
      let dates_only = this.dt.tareas.map(tarea => tarea.date)
      let no_repeat = [...new Set(dates_only)];
      let result = no_repeat.reduce( (a, date) => {
        a.push({tareas:this.dt.tareas.filter( tarea => tarea.date === date),date})
        return a
      },[])
      return result.sort(({date:a,date:b}) => !(new Date(a) - new Date(b)))
    }
  }
}
</script>
<style lang="scss">
.grid-container{
  display:grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
}
.grid-item-1{
  grid-column: 1/-1;
}
.grid-item-2{
  grid-column: 1/-1;
  grid-row: third-line / 4;
}
</style>