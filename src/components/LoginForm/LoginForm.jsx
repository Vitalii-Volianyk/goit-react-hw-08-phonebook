import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={css.form_container}>
      <header className={css.header}>Login</header>
      <form className={css.form} action="#">
        <input type="text" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className={css.figure}></div>
    </div>
  );
};

export default LoginForm;
