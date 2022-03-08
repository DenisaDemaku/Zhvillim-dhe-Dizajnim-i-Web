<template>
<b-row id="usersList">
    <h1 id="usersh">Users</h1>
<b-col cols="12" align="right">
    
    <h2>
        <b-button squared href="#/add-user" id="addbtn">+ Add User</b-button>
    </h2>
    <b-table hover :items="users" :fields="fields" id="myTable">
        <template v-slot:cell(actions)="data">
            <b-button @click.stop="details(data.item)" squared variant="outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></b-button>
        </template>
    </b-table>
</b-col>
</b-row>
</template>
<script>
import firebase from '../../Firebase'
// import router from '../../routes'

export default{
    /*eslint-disable */
    name:'UsersList',
    data(){
        return{
            fields:[
                { key: 'name', label:'Name', sortable:true, 'class':'text-left'},
                { key: 'actions', label:'Actions', 'class':'text-center'}
            ],
            users:[],
            errors:[],
            ref:firebase.firestore().collection('users'),
        }
    },created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.users = [];
            querySnapshot.forEach((doc) =>{
                this.users.push({
                    key:doc.id,
                    name:doc.data().name
                })
            })
        })
    },
    methods:{
        details(user){
            this.$router.push({name:'ShowUsers', params:{id:user.key}})
        }
    }
}

</script>

<style scoped>
    #usersList{
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