function About() {
  return (
    <div className="text-white space-y-4 px-4 xl:ml-4">
      <h2 className="text-2xl sm:text-3xl xl:text-5xl font-bold">Sobre mí</h2>
      <p className="text-lg sm:text-xl xl:text-2xl leading-relaxed">
        Soy graduado en Ingeniería en Sistemas Computacionales por la
        Universidad Valle del Grijalva, además de estudiante de inglés en Harmon
        Hall. También me formé como Full Stack Developer Jr. en el bootcamp de{" "}
        <a
          href="https://kodemia.mx"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Kodemia.mx
        </a>
        . Mi enfoque está en el desarrollo de aplicaciones web modernas,
        combinando habilidades tanto en el front-end como en el back-end.
      </p>
    </div>
  );
}

export default About;
