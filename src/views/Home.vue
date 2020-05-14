<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <h1>Tareas</h1> 
      <Lista v-for="item in orderedByDate" :item="item" :key="item.date"/>
    </div>
    <div class="grid-item-2">
      <Nuevo />
    </div>
  </div>
</template>

<script>
import Lista from '@/components/Lista.vue'
import Nuevo from '@/components/Nuevo.vue'
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      dt: {
          tareas: [
            {id: 1, text: 'Tarea prueba',date: '12-05-2020',checked: true},
            {id: 2, text: 'Tarea prueba2',date: '12-05-2020',checked: false},
            {id: 3, text: 'Alimentar Scrappy',date: '11-05-2020',checked: false},
          ],
          top_id: 3,
      },
      st: {

      }
    }
  },  
  created(){
    
  },
  methods: {
    ...mapActions(['prueba']),
  },
  components: {
    Lista, Nuevo,
  },
  computed: {
    ...mapGetters(['alltasks','orderedByDate']),
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