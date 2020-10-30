<template>
  <div id="page-top">
    <div id="wrapper">

      <div id="content-wrapper" class="d-flex flex-column">
        <main id="content">
          <TopNavBar :has-side-bar="true" />
          <div class="container-fluid">
            <div class="container rounded bg-white mt-5">
              <div class="row">
                  <div class="col-md-4 border-right">
                      <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" src="../../public/favicon.png" width="90">
                        <span class="font-weight-bold">{{profile.firstName}} {{profile.lastName}} </span>
                        <span class="text-black-50">{{profile.email}} </span>
                        <span class="text-black-30">{{profile.address.city}} {{profile.address.country}} </span>
                      </div>
                  </div>
                  <div class="col-md-8">
                      <div class="p-3 py-5">
                          <div class="d-flex justify-content-between align-items-center mb-3">
                              <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                                   <router-link :to="{ path: '/' }" >
                                    <h6>Back to home</h6>
                                   </router-link>
                              </div>
                              <h6 class="text-right">Edit Profile</h6>
                          </div>
                          <div class="row mt-2">
                              <div class="col-md-7">
                                <input type="text" class="form-control" placeholder="first name" :value="profile.firstName" />
                              </div>
                              <div class="col-md-5">
                                <input type="text" class="form-control" placeholder="last name" :value="profile.lastName" />
                              </div>
                          </div>
                          <div class="row mt-3">
                              <div class="col-md-7">
                                <input type="text" class="form-control" placeholder="Email" :value="profile.email">
                              </div>
                              <div class="col-md-5">
                                <input type="text" class="form-control" placeholder="Phone number" :value="profile.phone">
                              </div>
                          </div>
                          <div class="row mt-3">
                              <div class="col-md-9">
                                <input type="text" class="form-control" placeholder="address" :value="profile.address.place"></div>
                              <div class="col-md-3"><input type="text" class="form-control" :value="profile.address.number" placeholder="Numero"></div>
                          </div>
                          <div class="row mt-3">
                              <div class="col-md-7">
                                <input type="text" class="form-control" placeholder="Complemento" :value="profile.address.complement" >
                              </div>
                              <div class="col-md-5">
                                <input type="text" class="form-control" placeholder="Cidade" :value="profile.address.city">
                              </div>
                          </div>
                          <div class="row mt-3">
                              <div class="col-md-7">
                                <input type="text" class="form-control" placeholder="CEP" :value="profile.address.zipCode">
                              </div>
                              <div class="col-md-5">
                                <input type="text" class="form-control" placeholder="Pais" :value="profile.address.country">
                              </div>
                          </div>

                          <div class="row mt-3">
                              <div class="col-md-12">
                                <input type="text" class="form-control" placeholder="Descrição para o endereço" value="Casas do meu Pai">
                              </div>
                          </div>

                          <div class="mt-5 text-right"><button class="btn btn-success profile-button" type="button">Save Profile</button></div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>

    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <TopNavBarLogoutModal />
  </div>
</template>

<style lang="scss" scoped>
    .logo {
      margin-left: -50px !important;
    }

    .form-control:focus {
        box-shadow: none;
        border-color: #49007c;
    }

    .btn-success:active {
      background-color: #00ff80 !important;
      color: #49007c !important;
    }

    .profile-button {
        background: #49007c;
        box-shadow: none;
        border: none
    }

    .profile-button:hover {
        background: #832cc2;
    }

    .profile-button:focus {
        background: #5e1294;
        box-shadow: none
    }

    .profile-button:active {
        background: #4f0883;
        box-shadow: none
    }

    .back:hover {
        color: #5e1294;
        cursor: pointer
    }
</style>

<script>
// @ is an alias to /src
import TopNavBar from "@/components/TopNavBar.vue";
import TopNavBarLogoutModal from "@/components/TopNavBarLogoutModal.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Classroom",
  data() {
    return {
      profile: {
        firstName: "Fabiano",
        lastName: "Góes",
        email: "fabiano@eprogramar.com.br",
        phone: "11987654321",
        address: {
          place: "Avenida Guarulhos",
          number: 1234,
          complement: "Apartamento 123 Bloco 2",
          zipCode: "0705643",
          city: "Guarulhos",
          country: "USA",
          description: "Casa do meu Pai"
        } 
      },
    }
  },
  components: {
    TopNavBar,
    TopNavBarLogoutModal,
    Footer,
  },
  created() {
  },
  methods: {
    getProfile() {
      console.log("getProfile()...");
      Course.getProfile(storage.getCurrentUser()).then(response => {
        console.log(response.data);
        this.profile = response.data;
      });
    },
  }
};
</script>
