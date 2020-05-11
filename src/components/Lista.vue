<template>
    <div>
        <div class="lista-header">
            <h3>                todas las tareas            </h3>
        </div>
        <div class="contenedor-tareas">
            <Tarea v-for="tarea in dt.tareas" :key="tarea.id" :data="tarea" />
        </div>
    </div>
</template>
<script>
import Tarea from '@/components/Tarea'
export default {
    name:'Lista',
    data(){
        return {
            dt: {
                tareas: [
                    {id: 1, text: 'Tarea prueba',date: '2019-05-11'},
                    {id: 2, text: 'Tarea prueba2',date: '2019-05-11'}
                ]
            },
            st: {

            }
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
.contenedor-lista{

}
.contenedor-tareas {
    margin: 0 100px;
        
}
.lista-header {
    /*background-color: #dddddd;*/
    h3{
        
    }    
}

</style>