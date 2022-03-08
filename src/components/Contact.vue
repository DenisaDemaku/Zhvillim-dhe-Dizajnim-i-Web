<template>

<div class="container features">
    <div class="row">
  <h1>Contact</h1>
</div>
<br>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
      <img src="../assets/slider4.jpg" alt="" style="width:100%; height:auto">
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12">
      <div>
        <p id="contactParagraph">For all enquiries, please write to us using the form below.</p>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="4" placeholder="Enter your concern"></textarea>
      </div>
        <input type="submit" class="btn" value="Send" id="sendcontact">
    </div>
    </div>
</div>
</template>

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

#contactParagraph:before{
    content: "";
        display: block;
        width: 50px;
        height: 3px;
        background: #3d3b7c;
        left: 0;
        top:3%;
        position: absolute;
}
</style>