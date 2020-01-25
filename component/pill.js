document.getElementById("aboutPill").innerHTML = `
<!-- Pill -->
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

  <li class="nav-item">
    <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" 
    href="#pills-profile" role="tab" aria-controls="pills-profile" 
    aria-selected="false">Persada Herbs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" 
    href="#pills-contact" role="tab" aria-controls="pills-contact" 
    aria-selected="false">Kejayaan</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-pemasaran-tab" data-toggle="pill" 
    href="#pills-pemasaran" role="tab" aria-controls="pills-pemasaran" 
    aria-selected="false">Pemasaran </a>
  </li>
</ul>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" 
          aria-labelledby="pills-profile-tab">  
        <div class="row">
        <div class="col-sm-3">
            <img class="img-fluid" src="/asset/image/ramuan-sihat.png" alt="">
        </div>
        <div class="col-sm">
         <p> Persada herbs Sdn Bhd merupakan sebuah syarikat bumiputra diasaskan oleh 
        3 orang adik beradik dengan wawasan menunaikan perintah fardhu kifayah, iaitu 
        untuk menghasil produk halalan toyyiban dengan
        formula sendiri, kilang sendiri, pemasaran sendiri.</p>
        <br/>
        <p>Memandangkan zaman ini kita menghadapi pelbagai penyakit dengan tidak ada penyelesaiannya. 
        Persada Herbs berpegang kuat dengan falsafah mencegah lebih elok dari merawat secara alamiah.</p>
        <br/><br/>
        <a href="#tehPersadaModal!" 
        class="btn btn-danger float-right" style="color: white; border-radius:20em;">Lanjutkan Bacaan</a>
        </div>
        </div>
    </div>
      
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div class="row">
        <p>Consectetur dolor cillum laborum id dolor sunt officia laboris laboris adipisicing mollit do. 
        Esse culpa ut ex qui excepteur ut proident consequat deserunt ipsum sit. Velit pariatur proident 
        fugiat cillum cupidatat reprehenderit eu elit aute aute nulla occaecat id.
        </p>
      </div>
    </div>


    <div class="tab-pane fade" id="pills-pemasaran" role="tabpanel" aria-labelledby="pills-pemasaran-tab">
      <p>Consectetur dolor cillum laborum id dolor sunt officia laboris laboris adipisicing mollit do. 

        Esse culpa ut ex qui excepteur ut proident consequat deserunt ipsum sit. Velit pariatur proident 
        fugiat cillum cupidatat reprehenderit eu elit aute aute nulla occaecat id.
        </p>
    </div>
</div>
</div>
`