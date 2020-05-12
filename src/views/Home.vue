<template>
  <div class="grid-container">
    <h1>Tareas</h1>
    <Lista :datos="dt"/>
    <Nuevo @agregar="agregar" />    
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from '@/components/Lista.vue'
import Nuevo from '@/components/Nuevo.vue'

export default {
  name: 'Home',
  data(){
    return {
      dt: {
          tareas: [
            {id: 1, text: 'Tarea prueba',date: '2019-05-11',checked: true},
            {id: 2, text: 'Tarea prueba2',date: '2019-05-11',checked: false},
          ],
          top_id: 2,
      },
      st: {

      }
    }
  },  
  methods: {
    agregar({text}) {
      this.dt.top_id++;
      this.dt.tareas.push(
        {text, id:this.dt.top_id}
      )
    }
  },
  components: {
    Lista, Nuevo
  }
}
</script>
<style lang="scss">
.grid-container{
  display:grid;
}
</style>