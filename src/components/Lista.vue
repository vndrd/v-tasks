<template>
    <div>
        <transition-group tag="div" class="contenedor-tareas" name="tarea">

            <Tarea v-for="tarea in tareas" :key="tarea.id" :data="tarea" />
        </transition-group>
    </div>
</template>
<script>
//            <h1 key="titulo">{{tareas.date}}</h1>
import Tarea from '@/components/Tarea'
export default {
    name:'Lista',
    props: ['tareas'],
    data(){
        return {
        
        }
    },
    created(){
        console.log("created thinf")
    },
    components: {
        Tarea
    }
}
</script>
<style lang="scss">
.contenedor-tareas {
    position: relative ;
    margin: 0px 100px ;
    background-color: #ddd ;
    vertical-align: middle ;
    padding: 30px ;
    overflow: hidden ;//worked for align
}
h1 {
    color: #444;
}
.tarea-enter-active, .tarea-enter-active {
  transition: all .3s ease;
  
}
.tarea-enter {
    opacity: 0;
}
.tarea-enter-to {
    opacity: 1;
}

</style>