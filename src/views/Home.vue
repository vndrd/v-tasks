<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <h1>Tareas</h1>
      <Lista :datos="dt"/>
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
    agregar({text,checked = false}) {
      this.dt.top_id++;
      this.dt.tareas.push(
        {
          text, 
          id:this.dt.top_id,
          checked
        }
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