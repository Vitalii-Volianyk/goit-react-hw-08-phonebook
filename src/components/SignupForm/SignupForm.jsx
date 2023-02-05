import css from './SignupForm.module.css';

const SignupForm = () => {
  return (
    <div className={css.form_container}>
      <header className={css.header}>Signup</header>
      <form className={css.form} action="#">
        <input type="text" placeholder="Full name" required />
        <input type="text" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
      <div className={css.figure}></div>
    </div>
  );
};

export default SignupForm;
