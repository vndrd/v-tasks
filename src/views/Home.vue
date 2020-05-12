<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <h1>Tareas</h1> 
      <Lista :tareas="ordenFecha"/>
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
                      
            
          ],
          top_id: 2,
      },
      st: {

      }
    }
  },  
  methods: {
    agregar({text,checked = false,today}) {
      today = new Date(today)
      console.log("agggggggggggggg",today)
      let convertirString = (num) => num < 10 ? `0${num}`: num;
      let concatenar = ({dia,mes,year}) => `${dia}-${mes}-${year}`
      let dateobj = {
          dia: convertirString(today.getDate()),
          mes: convertirString(today.getMonth()+1),
          year: today.getFullYear()
      }
      let date = concatenar(dateobj)
      this.dt.top_id++;
      this.dt.tareas.push(
        {
          text, 
          id:this.dt.top_id,
          checked,
          date
        }
      )
    }
  },
  components: {
    Lista, Nuevo,
  },
  computed: {
    ordenFecha(){
      
      return this.dt.tareas
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