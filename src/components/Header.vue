<template>
  <div>
        <header>
            <nav class="navbar navbar-expand-lg">
                <router-link class="nav-link" to="/" >
                  <img id="headerimg" src="../assets/Logom.png" style="width: 100%;" alt="">
                </router-link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="nav navbar-nav float-left">
                        <router-link class="nav-link" to="/" >
                            <a class="nav-link" id="alinkhome">Home</a>
                        </router-link>
                        
                        <router-link class="nav-link" to="/about" >
                            <a class="nav-link" id="alinkab">About</a>
                        </router-link>
                        <router-link class="nav-link" to="/contact" >
                            <a class="nav-link" id="alinkcont">Contact</a>
                        </router-link>
                    </ul>
                </div>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                            <ul class="nav navbar-nav float-right">
                            <template v-if="user.loggedIn">
                                
                                <div class="nav-item">
                                    <a class="nav-link"> Welcome, {{user.data.displayName}} </a>
                                </div>
                                <li class="nav-item" style="cursor:pointer">
                                    <a class="nav-link" @click.prevent="signOut">Sign out</a>
                                </li>
                                

                            </template>
                            <template v-else>
                                <li class="nav-item">
                                <router-link to="login" class="nav-link" id="alinklogin">Login</router-link>
                                </li>
                                <li class="nav-item">
                                <router-link to="register" class="nav-link" id="alinkreg">Register</router-link>
                                </li>
                                

                            </template>
                            </ul>
                            
                        </div>
            </nav>
        </header>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header:after {
    content: '';
    display: block;
    width: 100%;
    height: 30px;
      margin: -30px auto 0;
    -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
}

    #navbarSupportedContent ul{
        text-align: right;
    }

    header{
        margin:0;
    }
    a{
        cursor:pointer;
        color: #000;
    }
    a:hover{
        cursor:pointer;
        color: #3d3b7c;
    }
    #headerimg{
        width:150px;
        height:100px;
    }

    body.day-background {
  background: #FFDB88;
}

.button-con {
  cursor: default;
  position: absolute;
  top: 50%;
  left: 70%;
  margin-left: -76px;
  margin-top: -18px;
}

#dayIcon {
  position: relative;
  width: 26px;
  height: 26px;
  top: -18px;
  margin: 0 7px;
  fill: #9caec0;
}

#nightIcon {
  position: relative;
  width: 26px;
  height: 26px;
  top: -18px;
  margin: 0 7px;
  fill: #9caec0;
}

#dayIcon, #nightIcon {
  cursor: pointer;
}

.toggle {
  display: none;
}

.toggle, .toggle:after, .toggle:before, .toggle *, .toggle *:after, .toggle *:before, .toggle + .toggle-button {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.toggle::-moz-selection, .toggle:after::-moz-selection, .toggle:before::-moz-selection, .toggle *::-moz-selection, .toggle *:after::-moz-selection, .toggle *:before::-moz-selection, .toggle + .toggle-button::-moz-selection {
  background: none;
}

.toggle::selection, .toggle:after::selection, .toggle:before::selection, .toggle *::selection, .toggle *:after::selection, .toggle *:before::selection, .toggle + .toggle-button::selection {
  background: none;
}

.toggle + .toggle-button {
  outline: 0;
  display: inline-block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  border: 2px solid #333;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.toggle + .toggle-button:after, .toggle + .toggle-button:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}

.toggle + .toggle-button:after {
  left: 0;
}

.toggle + .toggle-button:before {
  display: none;
}

.toggle:checked + .toggle-button:after {
  left: 50%;
}

.toggle + .toggle-button {
  padding: 2px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  border: 2px solid rgba(156, 174, 192, 0.27);
  border-radius: 2em;
}

.toggle + .toggle-button:after {
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  background: rgba(156, 174, 192, 0.27);
  content: "";
  border-radius: 1em;
}

.toggle:checked + .toggle-button:after {
  left: 50%;
}
</style>

