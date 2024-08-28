<template>
    <div>
        <h4>Student Info</h4>
        <ul>
            <li v-for="stu in studentList" :key="stu">{{ stu }}</li>
        </ul>
    </div>
</template>



<script>
    export default {
        props: {
            studentList:{
                type: Array
            },
        },
    }
</script>




<style scoped>
    div{
        color: black;
    }
</style>