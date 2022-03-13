<template>
    <div class="container features">
        <br>
        <h1 id="header1">Medical Products</h1>
        <div class="row" id="home">
          <div class="divout" style="">
            <img class="imgaphotne" src="../assets/clinic.jpg" width="width: 100%;" alt="">
          </div>
          <b-container class="bv-example-row" >
                <b-row>
                    <b-col v-for="product in productfields" v-bind:key="product._id">
                        <!-- <img src="../assets/mercedes2.jpg" class="imagediv"/> -->
                        <img :src="`http://localhost:5000/images/${product.image}`" class="imagediv">
                        <br><br>
                        <b-row>
                            <b-col>
                                <h5>{{ product.name }}</h5>
                                <p>{{product.price}} Euro / {{ product.inStock }}</p>
                            </b-col>
                            <b-col>
                                <b-button class="btn" id="buttonres" href="#/reservations" squared><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                  </svg>
                                    Buy
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <br>
    </div>
</template>

<style scoped>


    .imagediv{
        width:auto;
        height:200px;
    }

    #buttonres{
        border:1px solid #3d3b7c;
        background-color: white;
        color:#3d3b7c;
    }

    #buttonres:hover{
        background-color: #3d3b7c;
        color:white;
    }

    #home{
        margin-top:5%;
        margin-bottom:5%;
    }
    .imgaphotne{
      width:auto;
      height:60vh
    }

    .divout{
      text-align: center;
      padding-bottom: 5%;
    }
</style>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateProducts',
  data () {
    return {
      productfields:{},
      products: {}
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
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:4000/products`, this.products)
      .then(function (response) {
        console.log(response);
        })
      
    }
  }
}
</script>