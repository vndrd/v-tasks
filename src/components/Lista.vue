<template>
    <div>
        <div class="contenedor-tareas">
            <Tarea v-for="tarea in datos.tareas" :key="tarea.id" :data="tarea" />
        </div>
    </div>
</template>
<script>
import Tarea from '@/components/Tarea'
export default {
    name:'Lista',
    props: ['datos'],
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
    position: relative;
    margin: 0px 100px;
    background-color: #ddd;
    vertical-align: middle;
    padding: 30px;
    overflow: hidden;//worked for align
}

</style>