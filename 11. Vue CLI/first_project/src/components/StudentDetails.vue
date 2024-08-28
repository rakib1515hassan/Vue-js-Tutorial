<template>
  <div style="margin-bottom: 30px;">
    <h3>Student Details</h3>
    <table class="student-details-table">
      <tr>
        <th>Name</th>
        <td>{{ fullname }}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{{ email }}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <th>Age</th>
        <td>{{ age }}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>{{ gender }}</td>
      </tr>
      <tr>
        <th>Hobbies</th>
        <td>{{ hobbies.join(", ") }}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td>{{ address.street }}, {{ address.city }}</td>
      </tr>
      <tr>
        <th>Birthdate</th>
        <td>{{ birthdate.toLocaleDateString() }}</td>
      </tr>
      <tr>
        <th>Website</th>
        <td><a :href="website" target="_blank">{{ website }}</a></td>
      </tr>
      <tr>
        <th>Employed</th>
        <td>{{ isEmployed ? "Yes" : "No" }}</td>
      </tr>
      <tr>
        <th>Function</th>
        <td>{{ userFunction() }}</td>
      </tr>
      <tr>
        <th>Symbol</th>
        <td>{{ userSymbol.toString() }}</td>
      </tr>
      <tr>
        <th>Error</th>
        <td>{{ userError.message }}</td>
      </tr>
    </table>
    <button class="update-button" @click="handleUpdate">Update</button>
  </div>
</template>

<script>
    export default {
        props: {
            fullname: String,
            email: String,
            phone: String,
            age: Number,
            gender: String,
            hobbies: Array,
            address: Object,
            birthdate: Date,
            website: String,
            picture: String,
            isEmployed: Boolean,
            userFunction: Function, 
            userSymbol: Symbol,     
            userError: Error       
        },
        methods: {
            handleUpdate() {
                // this.fullname = "Mohammed Hassan"
                console.log("Update Button is clicked.");
                this.$emit('updateName', "Mohammed Hassan");
            }
        }
    }
</script>

<style scoped>
.student-details-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
}

.student-details-table th,
.student-details-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.student-details-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.student-details-table tr:hover {
  background-color: #f5f5f5;
}

.update-button{
    margin-top: 10px; 
    padding: 5px; 
    margin-left: 30px;
}
</style>
