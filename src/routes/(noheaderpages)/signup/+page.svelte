<script>
  export let form;
  import Logo from "$lib/components/Logo.svelte";
  import { enhance } from "$app/forms";
</script>

<svelte:head>
  <title>Sign Up | Surge Properties</title>
</svelte:head>

<main>
  <section class="img-background">
    <div class="container">
      <div class="signup-header">
        <Logo />
      </div>
      <div>
        <div class="signup">
          <div class="details">
            <h2 class="fs-secondary-heading fw-semi-bold">
              Take control of the service experience during your property search
              & ownership journey
            </h2>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <ul class="details__list" role="list">
              <li>
                <i>i</i>
                <p>Provide more information about your property needs</p>
              </li>
              <li>
                <i>i</i>
                <p>Shortlist more properties for site visits & evaluation</p>
              </li>
              <li>
                <i>i</i>
                <p>Rate your experience with us and give feedback</p>
              </li>
              <li>
                <i>i</i>
                <p>
                  View assigned sales expert's profile & request for change if
                  required
                </p>
              </li>
              <li>
                <i>i</i>
                <p>Manage your meetings/site visits schedule</p>
              </li>
            </ul>
          </div>
          <form
            class="form bg-blur"
            action="?/signup"
            method="POST"
            autocomplete="off"
            use:enhance
          >
            <h1 class="fs-secondary-heading fw-bold form-heading">Sign Up</h1>
            <div class="form-field">
              <label for="email">Email</label>
              <input
                type="email"
                title="Email"
                name="email"
                id="email"
                placeholder=""
              />
            </div>
            <div class="form-field margin-block-400">
              <label for="phone">Phone</label>
              <input
                type="tel"
                pattern={`[7-9]{1}[0-9]{9}`}
                title="10 digit mobile number"
                name="phone"
                id="phone"
                placeholder=""
                required
              />
            </div>
            <div class="form-field margin-block-400">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                pattern={`(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`}
                title="Enter your password(Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters)"
                placeholder=""
                required
              />
            </div>
            <div class="form-field margin-block-400">
              <label for="confPassword">Confirm Password</label>
              <input
                type="password"
                id="confPassword"
                name="confPassword"
                title="Re-enter your password"
                placeholder=""
                required
              />
            </div>
            {#if form?.error}
              <p class="form-error">{form?.error}</p>
            {/if}
            <div class="form-field margin-block-400">
              <button class="button" type="submit">Register</button>
            </div>
            <p class="form-subtext">
              Already registered? <a href="/signin">Sign in</a> now!
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .img-background {
    background-image: url("$lib/assets/imgs/auth-page-bg.webp");
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 0;
    min-height: 100vh;
  }
  .signup-header {
    margin-bottom: 30px;
  }
  .signup {
    display: flex;
    gap: 80px;
  }
  .details {
    flex-grow: 3;
    max-width: 680px;
    color: var(--clr-neutral-200);
  }
  .details__list {
    margin-top: 1.6rem;
  }
  .details__list li {
    display: flex;
    gap: 1rem;
    font-size: 1.1rem;
  }
  .form {
    flex-grow: 1;
    padding: 30px 40px;
    min-width: 380px;
    border-radius: var(--br-primary);
    background-color: rgba(255, 255, 255, 0.56);
  }
  .form-heading {
    margin-bottom: 20px;
  }
  @media (max-width: 50rem) {
    .signup {
      flex-direction: column-reverse;
      gap: 40px;
    }
    .form {
      min-width: auto;
    }
  }
</style>
