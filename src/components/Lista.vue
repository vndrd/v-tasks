<template>
    <div>
        <transition-group tag="div" class="contenedor-tareas" name="tarea">
            <h1 key="titulo">
                {{item.date}}
            </h1>
            <Tarea v-for="tarea in item.tareas" 
                    :key="tarea.id" 
                    :data="tarea" />
        </transition-group>
    </div>
</template>
<script>
//
import Tarea from '@/components/Tarea'
export default {
    name:'Lista',
    props: ['item'],
    data(){
        return {
        
        }
    },
    created(){
        
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
    padding: 0px 30px;
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