<template>

<div class="container features">
    <div class="row">
  <h1>Order a Product</h1>
</div>
<br>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
    <form @submit="onSubmit">

      <select name="" id="" class="form-select" v-model="reservations.product">
        <option value="" disabled selected>Nothing Selected</option>
        <option v-for="product in productfields" v-bind:key="product._id" >{{product.name }} - {{product.description}}</option>
      </select>
      
      <br>
      <label for="">Tel Number:</label>
      <input type="text" class="form-control" v-model="reservations.tel">

      
      <br>
      <input type="submit" class="btn" value="Buy" id="sendcontact">
    </form>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from "vuex";
//let emailname = document.getElementById('dataemail').value;
import axios from 'axios'
export default {
  name: 'CreateReservations',
  
  data () {
    return {
      productfields:{},
      products: {},
      reservations:{name: window.localStorage.getItem('email') }
    }
  },created () {
    axios.get(`http://localhost:4000/products`)
    .then(response => {
      this.productfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    onSubmit () {

      
      axios.post(`http://localhost:4000/reservations`, this.reservations)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'myorders',
          //params: { id: response.data._id }
        })
        })
      
    }
  }
}
</script>

<style scoped>
.container{
  padding:5%;
}

#sendcontact{
  background-color:#3d3b7c;
  padding-left:10%;
  padding-right:10%;
  color:white;
  transition: 0.8s ease;
}

#sendcontact:hover{
  background-color:#06a0ac;
  padding-left:10%;
  padding-right:10%;
  color:white;
}

</style>