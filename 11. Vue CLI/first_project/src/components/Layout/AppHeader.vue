<template>
    <div>
        <h1>Hader</h1>
        <h4>{{ companyName }}</h4>
    </div>
</template>



<script>
    export default {
        props: ['companyName'],
    }
</script>




<style scoped>
    div{
        color: blue;
    }
</style>