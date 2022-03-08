<template>
  <b-row id="addUser">
    <b-col cols="12">
      <h2 id="usersh">
        User
      </h2>
      <b-col cols="12" align="right">
        <b-button squared href="#/users-list" id="addbtn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
</svg> Back to List of Users</b-button>
      </b-col>

      <b-jumbotron>
        <b-row>
          <b-col cols="6">
            <div class="center">
              <h1>
              {{user.name}}
              </h1>
            </div>
          </b-col>
          <b-col cols="1">
            <div class="vl"></div>
          </b-col>
          
          <b-col cols="5" id="centered">
            <b-col id="font">
              Name: {{user.name}}<br>
              Description: {{user.description}}<br>
              Email: {{user.email}}<br>
            </b-col>
          </b-col>
        </b-row>
        
        <hr class="my-4">
        <b-btn class="edit-btn" squared variant="outline-success" @click.stop="edituser(key)" id="editbtnn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> Edit  </b-btn>
        <b-btn variant="outline-danger" squared @click.stop="deleteuser(key)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Delete  </b-btn>
      </b-jumbotron>
      
    </b-col>
    
  </b-row>
</template>

<script>
/*eslint-disable */

import firebase from '../../Firebase'
import router from '../../routes'

export default {
  name: 'Showuser',
  data () {
    return {
      key: '',
      user: {}
    }
  },
//created perdoret per me ekzekutu automatikisht kodin ose queryn ne momentin qe komponenta bohet render!
created () {
    const ref = firebase.firestore().collection('users').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edituser (id) {
      this.$router.push({
        name: 'EditUser',
        params: { id: id }
      })
    },
    deleteuser (id) {
      firebase.firestore().collection('users').doc(id).delete().then(() => {
        this.$router.push({
          name: 'UsersList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>


<style>

    .jumbotron {
      padding: 2rem;
    }
    .edit-btn {
      margin-right: 20px;
      width: 70px;
    }

    #editbtnn{
      padding-left: 1%;
      padding-right: 5%;
    }

    #addUser{
      margin:5%;
    }

    #usersh{
        color: #3d3b7c;
    }

    #font{
      font-size: 20px;
      text-align: left;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .center{
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-25%, -50%);
    }

    #centered{
      margin:0;
    }

    .vl {
      border-left: 3px solid #3d3b7c;
      height: 100px;
    }

</style>
