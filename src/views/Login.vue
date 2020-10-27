<template>
  <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
        
        <div class="d-flex justify-content-center">
					<div class="brand_logo_container">
            <Loading v-show="showLoading" />
						<img src="../assets/logo-eprogramar.png" 
                 class="brand_logo" 
                 v-show="!showLoading"
                 alt="Logo e-Programar">
					</div>
				</div>
        
				<div class="d-flex justify-content-center form_container">
					<form v-on:submit.prevent="onSubmit">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="email"
                     name="loginEmail" 
                     class="form-control input_user" 
                     value="" 
                     placeholder="your e-mail"
                     v-model="login.email"
                     required
                     autofocus>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" 
                     name="loginPassword" 
                     class="form-control input_pass" 
                     value="" 
                     v-model="login.password"
                     required
                     placeholder="your password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Lembre me</label>
							</div>
						</div>

            <div class="d-flex justify-content-center mt-3 login_container">
              <button type="submit" name="button" class="btn login_btn">Entrar</button>
            </div>
            
            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                <a href="" class="ml-2">Criar uma conta</a> 
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#">Esqueci minha senha</a>
              </div>
            </div>

					</form>
				</div>        

      </div>
		</div>
  </div>
</template>

<script>
import Loading from '../components/Loading';
import Auth from '../services/auth';
import router from '../router/index';
import storage from '../services/storage';

export default {
  components: {
    Loading
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      showLoading: false,
    }
  },
  methods: {
    onSubmit() {
      console.log(`email: ${this.login.email}, password: ${this.login.password}`);
      this.showLoading = true;
      Auth.signin(this.login.email, this.login.password)
        .then(response => {
          console.log(response.data.token);
          storage.saveToken(response.data.token);      
          storage.saveCurrentUser(this.login.email);    
					this.showLoading = false;
					router.push('/');
          // TODO send courses to Home Page or Load Courses into Home Page
          // Course.getAllCourses().then(response => {
          //   console.log(response.data);
          // }).then( () => {
          //   this.showLoading = false;
          //   router.push('/');
          // });
        }).catch(error => {
          this.showLoading = false;
          console.error('Error at Authorization Auth API');
          alert(error);
        })
    }
  }
}
</script>

<style lang="scss">
	/* Coded with love by Mutiullah Samim */
		body,
		html {
			margin: 0;
			padding: 0;
			height: 100%;
			background: linear-gradient(180deg, #49007C 30%, #1f0135 100%);
    }
    a {
      color: #00FF80;
    }

    a:hover {
      color: #fff;
    }

		.user_card {
			height: 500px;
      width: 450px;
      color: #fff;
			margin-top: auto;
			margin-bottom: auto;
			background: #49007C;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 #00FF80, 0 6px 20px 0 #00FF80;
			-moz-box-shadow: 0 4px 8px 0 rgba(243, 235, 235, 0.2), 0 6px 20px 0 rgba(240, 233, 233, 0.19);
			border-radius: 10px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			border-radius: 50%;
			background: #00FF80;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid #00FF80;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #00FF80 !important;
			color: #49007C !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #00FF80 !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #00FF80 !important;
		}
</style>

