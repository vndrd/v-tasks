<template>
    <div class="nuevo">
        <div class="elementos">
            <label for=""></label>
            <input type="text" 
                    v-model="mensaje.text"
                    ref="input">         
            <a @click="agregar" href="#">anotar!</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Nuevo',
    data() {
        return {
            mensaje: {
                text: '',
            },
        }
    },
    methods:{
        agregar(e){
            e.preventDefault()
            this.$emit('agregar',this.mensaje);
            this.mensaje.text = ''
            this.$nextTick(() => {
                this.$refs['input'].focus()
            })
        }
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
}
.elementos {
    width: fit-content;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
}
label {
    font-size: 1.5rem;
    float: left;
    font-weight: bolder;
    padding-right: 30px;
}
input {
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
    font-size: 1.5rem;
    padding: 10px;
    width: 200px;
    border: 1px solid #ddd;
    background: rgba($color: #fff, $alpha: .4);
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
a:focus{
    background: #66f;    
    color: #fff;
}

a:hover {
    
    background: #66f;    
    color: #fff;
}

</style>
