<template>
  <header class="comeback">
    <button class="ps-3" @click="this.$router.push('/')">
      <i class="bx bx-arrow-back"></i>
      <span class="comeback__text">Volver</span>
    </button>
    <h1 class="h4">FastFood</h1>
  </header>
  <div class="containerLogin formulario">
    <div class="login-in">
      <div class="login-in-info">
        <i class="bi bi-check-circle-fill"></i
        ><span>El Inicio de la Sesion ha sido un exito</span>
        <button type="button" class="button-close">
          <i class="bi bi-x-circle-fill"></i>
        </button>
      </div>
    </div>
    <div class="check-person">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-person-fill-check"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"
        />
      </svg>
    </div>
    <div class="login">
      <div class="login__contai-formulario">
        <div class="login-forms">
          <form class="login__formulario" action="#" method="post">
            <h1>Inicia Sesion</h1>
            <div class="login__redes-sociales-icons">
              <i class="bx bxl-facebook-circle"></i>
              <i class="bx bxl-github"></i>
              <i class="bx bxl-google"></i>
            </div>
            <span>O utiliza tu cuenta de email</span>
            <div class="login__inputs">
              <div class="login__email">
                <span>Email</span>
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                />
              </div>
              <div class="login__password">
                <span>contraseña</span>
                <input id="password" type="password" name="password" />
              </div>
            </div>
            <div class="login__check-forgot">
              <div class="login__check-remember">
                <input class="login__checkBox-remember" type="checkbox" />
                <span>Recordarme</span>
              </div>
              <a href="#">¿Olvidaste tu Contraseña?</a>
            </div>
            <div class="login__button-entrar">
              <button type="submit">Entrar</button>
            </div>
          </form>
          <div class="conditions">
            <span>Politica Privada</span>
            <span class="login__terms">Terminos y Condiciones</span>
          </div>
        </div>
        <aside class="sign-up">
          <div class="sign-up__food_background">
            <img
              id="sign-up__img1"
              src="../img/food-black/spaguetti.png"
              alt=""
            />
            <img
              id="sign-up__img2"
              src="../img/food-black/burger (1).png"
              alt=""
            />
            <img id="sign-up__img3" src="../img/food-black/burger.png" alt="" />
            <img
              id="sign-up__img4"
              src="../img/food-black/caprese (1).png"
              alt=""
            />
            <img
              id="sign-up__img5"
              src="../img/food-black/caprese.png"
              alt=""
            />
            <!-- <img id="sign-up__img6" src="../img/food-black/fast-delivery.png" alt="" /> -->
            <img id="sign-up__img7" src="../img/food-black/salad.png" alt="" />
            <img id="sign-up__img8" src="../img/food-black/pizza.png" alt="" />
            <img id="sign-up__img9" src="../img/food-black/hot.png" alt="" />
            <img id="sign-up__img10" src="../img/food-black/taco.png" alt="" />
            <img id="sign-up__img11" src="../img/food-black/menu.png" alt="" />
            <img
              id="sign-up__img12"
              src="../img/food-black/salad (1).png"
              alt=""
            />
            <div class="sign-up__slogan">
              <h3>Hola , Amigo</h3>
              <p>Llena tu informacion Personal y</p>
              <span>empieza a disfrutar la vida Con FastFood</span>
              <div class="cont-btn-social">
                <a  
                 href="http://localhost:3000/auth/google"
                  class="social-button google-button d-flex justify-content-around"
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      alt="Google Logo"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div>Google</div>
                </a>
                <button
                  class="social-button facebook-button d-flex justify-content-around"
                  @click="autenticate"
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                      alt="Facebook Logo"
                      width="20"
                      height="20"
                    />
                  </div>

                  <div>Facebook</div>
                </button>
                <button
                  class="social-button github-button d-flex justify-content-around"
                  @click="autenticate"
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                      alt="Facebook Logo"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div>GitHub</div>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <div class="create-account">
      <p>Elige una forma de registrarte</p>
      <a href="./profile.html">Llenar formulario</a>
      <button type="button" id="google">Sign in google</button>
      <a href="http://localhost:3006/api/auth/google" rel="noopener noreferrer"
        >goole</a
      >
    </div>
    <div class="registrated-account">
      <i class="bx bxs-check-circle"></i>
      <span>Empieza a disfruta de la vida con</span>
      <span class="registrated-account__logo"> FastFood </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
// href="http://localhost:3000/auth/google" 
export default {
  methods: {
    async authen(){
      const res =await axios.get("")
      console.log("res " + JSON.stringify(res))
    },
    async autenticate() {
      const res =await axios.post('http://localhost:3000/payment/checkout/express/course/1',null,{withCredentials : true})
      console.log("res " + JSON.stringify(res))
      if(res){
        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      }
    
    },
  },
};
</script>
<style>
@import "../assets/login.css";
</style>
