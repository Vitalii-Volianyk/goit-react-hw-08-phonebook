const HomePage = () => {
  const css = {
    container: {
      height: '420px',
    },
  };
  return (
    <div style={css.container}>
      <h1>Home</h1>
      <iframe
        title="Dino"
        src="https://chromedino.com/"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default HomePage;
