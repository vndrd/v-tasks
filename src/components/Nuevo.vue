<template>
    <div class="nuevo">
        <div class="elementos">
            <label for=""></label>
            <input type="text" 
                    v-model="mensaje.text"
                    v-on:keyup.enter="onEnter"
                    ref="input">         
            <a href="#" @click="agregar">anotar!</a>
        </div>
    </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'Nuevo',
    data() {
        return {
            mensaje: {
                text: '',
                checked: false
            },
        }
    },
    methods:{
        ...mapActions(['newTask']),
        agregar(e){
            e.preventDefault()
            if( this.mensaje.text === '')
                return false
            this.newTask({    
                ...this.mensaje,
                date: this.dateString(new Date()),
                id: this.getTopId
            })
            this.focusInput()
        },
        onEnter(){
            if( this.mensaje.text === '')
                return false
            this.newTask({    
                ...this.mensaje,
                date: this.dateString(new Date()),
                id: this.getTopId
            })
            this.focusInput()
        },
        focusInput(){
            this.$nextTick(() => {
                this.$refs['input'].focus()
            })
            this.mensaje.text = ''
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
    computed: {
        ...mapGetters(['getTopId'])
    }
}
</script>
<style lang="scss" scoped>
.nuevo {
    /*
    position: absolute ;
    bottom: 0 ;
    */
    margin: 0 100px ;    
    padding: 20px 10px ;
    overflow: hidden;
    background: #8bb ;    
    height: 70px;
}
.elementos {
    position: relative;
    width: fit-content;
    margin: 0 auto;

    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
}
label {
    font-size: 1rem;
    float: left;
    font-weight: bolder;
    padding-right: 30px;
    z-index: 99;
}
input {
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
    font-size: 1.5rem;
    padding: 10px;
    width: 200px;
    border: 4px solid rgba($color: #111, $alpha: .1);
    background: rgba($color: #fff, $alpha: .4);
    transition: all .3s ease;
}
input:focus{    
    border: 4px solid rgba($color: #111, $alpha: .2);
}
label::before{
    content: 'Texto Vacío';
    position:absolute;
    bottom:-0px;
    left: -100px;
    background: white;
    width: 100px;
    height: 30px;
    opacity: 0;
}
a {
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;
    margin-left: 5px;
    padding: 10px 30px;
    cursor: pointer;
    background: #fff;    
    color: #444;
    border: 1px solid rgba($color: #fff, $alpha: 0);
    transition: all .2s;
}
a:focus, a:hover{
    background: #66f;    
    color: #fff;
}
</style>
