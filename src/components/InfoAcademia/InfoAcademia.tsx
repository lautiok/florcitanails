import style from "./infoacademia.module.css";
export default function InfoAcademia() {
  return (
    <section className={style.infoacademia}>
      <article>
        <h2>Nuestra Academia</h2>
        <p>
          En FlorcitaNails Academia, nos apasiona la estética de las uñas, y
          nuestro objetivo es compartir esa pasión con quienes desean convertir
          su talento en una profesión. Ubicados en Buenos Aires.
        </p>
      </article>
      <article>
        <h2>¿Porque estudiar con nosotros?</h2>
        <p>
          Ofrecemos un ambiente cálido y cercano donde cada alumno se siente
          parte de una comunidad. Nuestros cursos están diseñados no solo para
          enseñar las técnicas más avanzadas de manicura, esculpido y diseño de
          uñas, sino también para ayudar a nuestros estudiantes a desarrollar su
          propio estilo y confianza.
        </p>
      </article>
      <article>
        <h2>Nuestra Plataforma</h2>
        <p>
          hemos desarrollado una plataforma diseñada para facilitar el
          aprendizaje y la profesionalización en el mundo de la estética de
          uñas. Nuestra plataforma es intuitiva y accesible, brindando a
          nuestros estudiantes la posibilidad de inscribirse en cursos
          especializados y acceder a contenido exclusivo desde cualquier lugar.
          Además, ofrecemos la opción de generar diplomas personalizados con
          nombre, DNI y fecha de finalización, junto con un URL verificable a
          través de un código QR, que garantiza la autenticidad de tu formación.
        </p>
      </article>
    </section>
  );
}
