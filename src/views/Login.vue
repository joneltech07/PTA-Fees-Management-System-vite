<template>
  <div id="app">
    <div class="login"></div>
    <div class="container">
      <div style="grid-column: 1 / 2;">
        <div class="baguiocityhighschool">Baguio City Highschool</div>
      </div>
      <div style="grid-column: 2 / 3; display: grid; place-items: center;">
        <div class="ellipse2"></div>

        <form class="login-form">
          <div class="login3"><b>Log in</b></div>
          <label for="username">Username:</label>
          <div class="input-group">
            <input type="text" id="username" class="username" />
          </div>
          <label for="password">Password:</label>
          <div class="input-group">
            <input type="password" id="password" class="password2" />
          </div>
        </form>
        <div class="button-container">
          <button type="button" class="signup-button">Sign Up</button>
          <button type="submit" class="login-button">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lexend', sans-serif;
  }

  .ellipse2 {
    height: 190px;
    width: 190px;
    border-radius: 50%;
    z-index: 1;
    background-color: #000;
    background-image: url("../assets/img/logo.png");
    background-size: cover;
    position: relative;
  }

  .login {
    position: absolute;
    background: url("../assets/img/login.png") no-repeat center center fixed;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    padding: 0;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    height: 100vh;
  }

  .baguiocityhighschool {
    color: #ffffff;
    font-size: 96px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    margin: auto;
  }

  .input-group {
    position: relative;
    margin-bottom: 15px;
  }

  label {
    color: #ffffff;
    font-size: 16px;
  }

  input[type="text"],
  input[type="password"] {
    color: #000000;
    font-size: 16px;
    padding: 8px;
    border: 0.1px solid #000000;
    border-radius: 8px;
    width: 497px;
    opacity: 0.5;
  }

  .login-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .login-button {
    background-color: #ff0000;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 75px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
  }

  .login-button:hover {
    background-color: #ff2435;
  }

  .login3 {
    color: #ffffff;
    font-size: 40px;
    line-height: 2;
    margin-bottom: 10px;
  }

  .container > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  .container > div:not(:last-child) {
    margin-bottom: 20px;
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .signup-button {
    background-color: #ffffff;
    color: #800000;
    font-size: 16px;
    padding: 10px 75px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.2s ease;
  }

  .signup-button:hover {
    background-color: #f9e5e5;
  }
</style>
