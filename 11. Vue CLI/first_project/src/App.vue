<template>
  <div>
    <div style="padding: 5px;">
      <app-header :companyName="name"></app-header>

      <app-student :studentList="students"></app-student>

      <app-student-details
        :fullname="fullname"
        :email="email"
        :phone="phone"
        :age="age"
        :gender="gender"
        :hobbies="hobbies"
        :address="address"
        :birthdate="birthdate"
        :website="website"
        :picture="picture"
        :isEmployed="isEmployed"
        :userFunction="userFunction"
        :userSymbol="userSymbol"
        :userError="userError"
        @updateName="updateFullName"
      ></app-student-details>

      <!-- <h5>User Information</h5> -->
      <!-- <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p> -->

      <hr>
      <app-component-a :aname="aname"></app-component-a>
      <hr>
      <app-component-b :bname="bname"></app-component-b>
      <hr>

      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppStudent from "./components/StudentList.vue";
  import AppStudentDetails from "./components/StudentDetails.vue";

  import AppComponentA from "./components/CTCComponent/ComponentA.vue";
  import AppComponentB from "./components/CTCComponent/ComponentB.vue";

  export default {

    data() {
      return {
        name: 'ABC Limited',
        students : ["Rakib", "Tuhin", "Ubayda", "Noman"],

        // Details Data
        fullname: "Md Rakib Hassan",
        email: "rakib1515hassan@gmail.com",
        phone: "+8801515612682",
        age: 25,
        gender: "Male",
        hobbies: ['Reading', 'Traveling'],
        address: { city: 'Dhaka', country: 'Bangladesh' },
        birthdate: new Date('1998-10-20'),
        website: "https://texonltd.com/",
        picture: "https://example.com/picture.jpg",
        isEmployed: true,
        userFunction: () => 'Hello, Vue!',
        userSymbol: Symbol('vueSymbol'), 
        userError: new Error('An example error'),

        aname : "I Am A",
        bname : "I Am B",
      };
    },

    methods: {
      updateFullName(newName) {
        // Update the fullname property when the event is received
        this.fullname = newName;
      }
    },

    components: {
      'app-student': AppStudent,
      'app-student-details': AppStudentDetails,
      'app-component-a': AppComponentA,
      'app-component-b': AppComponentB,
    }

  };
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
