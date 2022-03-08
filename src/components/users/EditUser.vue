<template>
  <b-row id="editpage">
    <b-col cols="12">
      <h2 id="h2edituser">
        Edit User - {{user.name}}
      </h2>
      <b-col cols="12" align="right">
        <router-link :to="{ name: 'ShowUsers', params: { id: key } }" class="btn" id="addbtn" squared> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
</svg> Back to User Data</router-link>
      </b-col>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="nameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Change name">
            <b-form-input id="name" v-model.trim="user.name"></b-form-input>
          </b-form-group>
          <b-form-group id="descGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Change Description">
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
                    label="Change email">
            <b-form-input id="email" v-model.trim="user.email"></b-form-input>
          </b-form-group>
          <br>
          <b-button type="submit" squared variant="outline-primary">Update</b-button>
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
  name: 'Edituser',
  data () {
    return {
      key: this.$route.params.id,
      user: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('users').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('users').doc(this.$route.params.id);
      updateRef.set(this.user).then((docRef) => {
        this.key = ''
        this.user.name = ''
        this.user.description = ''
        this.user.email = ''
        this.$router.push({ name: 'ShowUsers', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }

  #editpage{
    margin:5%;
  }

  #h2edituser{
    color: #3d3b7c;
  }
</style>
