<template>
    <label class="container">
        {{data.text}}
        <input type="checkbox" :checked="data.checked">
        <span class="checkmark"></span>
    </label>
</template>
<script>
export default {
    name: 'Tarea',
    props: ['data'],
}
</script>
<style lang="scss" scoped>
.container {
    float: left;
    font-size: 1.5rem;
    font-weight: 200;
    position: relative;
    padding-left: 35px;
    padding-right: 35px;
    margin-bottom: 30px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
}
.container:focus-within input ~ .checkmark {
    background-color: #ccc;
    border: 2px solid #888;
    border-radius: 5px;
}
/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    transition: all 2s ease;
    background-color: #2196F3;
}
.container input:focus ~ .container {
    text-decoration: underline;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
content: "";
    position: absolute;
    display: none;
    opacity: 0;
    transition: all 2s ease;
}
/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
    opacity: 1;
    transition: all 2s ease;
}
/* Style the checkmark/indicator */
.container .checkmark:after {
    transition: all 2s ease;
    position:absolute;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg) scale(3);
    -ms-transform: rotate(45deg) scale(3);
    transform: rotate(45deg) scale(3);
}
</style>