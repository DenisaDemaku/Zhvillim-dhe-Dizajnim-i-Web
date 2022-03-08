<template>
  <div class="container">
    <div class="row justify-content-center" id="registercontainer">
      <div class="col-md-8">
        <div class="card" id="cardregister">
          <div class="">
            <img src="../../assets/Logom.png" alt="" width="250" height="200">
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name:</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email:</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password:</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>
              <br>
              <div class="form-group row mb-0">
                <div class="col-md-12">
                  <b-button type="submit" class="btn" squared id="registerbutton">Register</b-button>
                </div>
              </div>
              <br>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable*/
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
  #registercontainer{
    padding:10%;
  }

  #cardregister{
    box-shadow: 5px 5px 5px 1px rgb(46, 49, 146, 0.5);
  }

  #registerbutton{
    background-color:white;
    color:#3d3b7c;
    border: 1px solid #3d3b7c;
    padding-left: 5%;
    padding-right: 5%;
  }

  #registerbutton:hover{
    background-color:#3d3b7c;
    color:white;
    border: 1px solid #3d3b7c;
  }
</style>