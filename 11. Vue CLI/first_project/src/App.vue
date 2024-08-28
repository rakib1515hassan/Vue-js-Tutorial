<template>
  <div>
    <app-header :companyName="name"></app-header>

    <app-student :studentList="students"></app-student>

    <app-student-details
      name="Md Rakib Hassan"
      email="rakib1515hassan@gmail.com"
      phone="+8801515612682"
      :age="25"
      gender="Male"
      :hobbies="['Reading', 'Traveling']"
      :address="{ city: 'Dhaka', country: 'Bangladesh' }"
      :birthdate="new Date('1998-10-20')"
      website="https://texonltd.com/"
      picture="https://example.com/picture.jpg"
      :isEmployed="true"
      :userFunction="() => 'Hello, Vue!'"
      :userSymbol="studentSymbol"
      :userError="new Error('An example error')"
    ></app-student-details>

    <!-- <h5>User Information</h5> -->
    <!-- <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p> -->

    <app-footer></app-footer>

  </div>
</template>




<script>
  import AppStudent from "./components/StudentList.vue";
  import AppStudentDetails from "./components/StudentDetails.vue";

  export default {
    data() {
      return {
        name: 'Texon Limited',
        students : ["Rakib", "Tuhin", "Ubayda", "Noman"],
        studentSymbol: Symbol('vueSymbol') // Correctly define Symbol
      };
    },
    components: {
      'app-student': AppStudent,
      'app-student-details': AppStudentDetails,
    }
  };
</script>





<!-- Global Style -->
<style>
    body{
      font-family: "Roboto", sans-serif;
      margin: 0 auto;
    }
</style>
