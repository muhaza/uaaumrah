document.getElementById("produk").innerHTML = `
<div id="vue-card">
    <!-- start vue -->
    <div class="tab-content container" id="pills-tabContent">
        <div class="tab-pane fade show active" id="page-1" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="row">
                <div class="col-sm">
                    <!-- start product -->
                    <section id="product" style="background: whitesmoke">
                        <div class="my-5">
                            <div class="row">
                                <!-- 📚📚📚 card start 📚📚📚-->
                                <div class="col-sm">
                                    <div class="card mt-1" style="width: 100%;">
                                    
                                        <img class="card-img-top wow fadeInUp" v-bind:src="product2img" alt=" 📚Card image cap" />
                                        <h3><span data-wow-delay="0.3s" data-wow-duration="0.3" class="wow fadeInUp badge badge-danger float-right p-1 price">RM28</span></h3>
                                        <div class="card-body">
                                            <h5 class="card-title">{{product2Title}}</h5>
                                            <p class="card-text text-justify">
                                                {{product2Desc}}
                                            </p>
                                            <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                data-toggle="modal" data-target="#tehPersadaModal"
                                                style="color:white">Lebih Informasi</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- 📚📚📚 card start 📚📚📚-->
                                <div class="col-sm">
                                    <div class="card mt-1" style="width: 100%;">
                                        <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{{soonTitle}}</h5>
                                            <p class="card-text text-justify">
                                                {{soonDesc}}
                                            </p>
                                            <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                data-toggle="modal" data-target="#tehPersadaModal!"
                                                style="color:white">Lebih Informasi</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- 📚📚📚 card start 📚📚📚-->
                                <div class="col-sm">
                                    <div class="card mt-1" style="width: 100%;">
                                        <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{{soonTitle}}</h5>
                                            <p class="card-text text-justify">
                                                {{soonDesc}}
                                            </p>
                                            <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                data-toggle="modal" data-target="#tehPersadaModal!"
                                                style="color:white">Lebih Informasi</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- end vue -->
                    </section>
                    <!-- end product 1 -->
                </div>
            </div>
        </div>

        <div class="tab-pane fade" id="page-2" role="tabpanel" aria-labelledby="pills-contact-tab">


            <div class="row">
                <div class="col-sm">
                    <!-- start product -->
                    <section id="product" style="background: whitesmoke">
                        <div id="vue-card">
                            <!-- start vue -->
                            <div class="container my-5">
                                <div class="row">

                                    <!-- 📚📚📚 card start 📚📚📚-->
                                    <div class="col-sm">
                                        <div class="card mt-1" style="width: 100%;">
                                            <img class="card-img-top" v-bind:src="soonimg"
                                                alt=" 📚Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{{soonTitle}}</h5>
                                                <p class="card-text text-justify">
                                                {{soonDesc}}
                                                </p>
                                                <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                    data-toggle="modal" data-target="#tehPersadaModal!"
                                                    style="color:white">Lebih Informasi</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 📚📚📚 card start 📚📚📚-->
                                    <div class="col-sm">
                                        <div class="card mt-1" style="width: 100%;">
                                            <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{{soonTitle}}</h5>
                                                <p class="card-text text-justify">
                                                    {{soonDesc}}
                                                </p>
                                                <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                    data-toggle="modal" data-target="#tehPersadaModal!"
                                                    style="color:white">Lebih Informasi</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 📚📚📚 card start 📚📚📚-->
                                    <div class="col-sm">
                                        <div class="card mt-1" style="width: 100%;">
                                            <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{{soonTitle}}</h5>
                                                <p class="card-text text-justify">
                                                    {{soonDesc}}
                                                </p>
                                                <a class="btn btn-danger persada-button" class="btn btn-primary"
                                                    data-toggle="modal" data-target="#tehPersadaModal!"
                                                    style="color:white">Lebih Informasi</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <!-- end product 1 -->
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <!-- button -->
                <ul class="nav nav-pills mb-1 float-right" id="pills-tab" role="tablist">

                    <li class="nav-item">
                        <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#page-1" role="tab"
                            aria-controls="pills-profile" aria-selected="false">1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#page-2" role="tab"
                            aria-controls="pills-contact" aria-selected="false">2</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

`