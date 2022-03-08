<template>
  <b-row id="addUser">
    <b-col cols="12">
      <h2 id="usersh">
          Add User
        </h2>
      <b-col cols="12" align="right">
        <b-button squared href="#/users-list" id="addbtn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
</svg> List of Users</b-button>
      </b-col>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="nameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter name">
            <b-form-input id="name" v-model.trim="user.name"></b-form-input>
          </b-form-group>
          <b-form-group id="descGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
              <b-form-textarea id="description"
                         v-model="user.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{user.description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="emailGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input id="email" v-model.trim="user.email"></b-form-input>
          </b-form-group>
          <b-button type="submit" squared variant="outline-primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
/*eslint-disable */

import firebase from '../../Firebase'
import router from '../../routes'

export default {
  name: 'AddUser',
  data () {
    return {
      ref: firebase.firestore().collection('users'),
      user: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.user).then(() => {
        this.user.name = ''
        this.user.description = ''
        this.user.email = ''
        this.$router.push({
          name: 'UsersList'
        })
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
    background-color:white!important;
  }

  #addUser{
    margin:5%;
    
  }

  #addbtn{
        color:#3d3b7c;
        border: 1px solid #3d3b7c;
        background-color:white;
    }

    #addbtn:hover{
        color:white;
        background-color:#3d3b7c;
    }

    #usersh{
        color: #3d3b7c;
    }

</style>
