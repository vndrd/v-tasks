<template>
  <div class="home">
    <h1>Tareas</h1>
    <Lista />
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from '@/components/Lista.vue'

export default {
  name: 'Home',
  components: {
    Lista
  }
}
</script>
