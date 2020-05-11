<template>
    <div class="tarea">
        <input type="checkbox">
        {{data.text}}
    </div>
</template>
<script>
export default {
    name: 'Tarea',
    props: ['data']
}
</script>
<style lang="scss" scoped>
.tarea {
    float: left;
}
</style>