import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.page.html',
  styleUrls: ['./drama.page.scss'],
})
export class DramaPage implements OnInit {

  peliculas = [
    { titulo: 'Misión de rescate 2 (2023)', subtitulo: 'Extraction 2', descripcion: 'Después de sobrevivir a todo lo que le sucede en la primera película, Rake regresa como mercenario australiano de operaciones encubiertas al que se encomienda otra misión suicida: rescatar a la maltrecha familia de un despiadado gángster georgiano de la prisión donde se encuentra recluida.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/jT0Eyfw0VXlnk8sMKfyFiKj8UsK-400x600.jpg', url: 'https://streamtape.com/e/4B6arByJaWSKlZM/', generos: ['Accion', 'Suspenso'] },
    { titulo: 'Culpa mía (2023)', subtitulo: 'Culpa mía', descripcion: 'Noah debe dejar su ciudad, novio y amigos para mudarse a la mansión del nuevo marido de su madre. Allí conoce a su nuevo hermanastro Nick y sus personalidades chocan desde el primer momento. Pero la atracción que sienten les llevará a vivir una relación prohibida, donde el carácter rebelde y atormentado de cada uno de ellos pondrá del revés sus mundos haciendo que acaben perdidamente enamorados. Adaptación del primer libro de la trilogía «Culpables» de Mercedes Ron.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/gp31EwMH5D2bftOjscwkgTmoLAB-400x600.jpg', url: 'https://streamtape.com/e/KzkaAKL9MdT00OZ/', generos: ['Drama', 'Romance'] },
    { titulo: 'Rápidos y furiosos X (2023)', subtitulo: 'Fast X', descripcion: 'A través de varias misiones y contra lo imposible, Dom Toretto y su familia han sido más astutos y más rápidos que todos los enemigos se le han cruzado en su camino. Ahora se enfrentan a su enemigo más letal: una amenaza aterradora que surge de las sombras del pasado que está alimentado de una venganza sangrienta, y está decidido a destruir a su familia y destruir todo, y a cualquier persona, a los que Dom ama.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/jmdi62j5uJV60EtYY8zsE1LRYEf-400x600.jpg', url: 'https://streamtape.com/e/pxKkepBJRAHr9bB/', generos: ['Accion', 'Crimen', 'Suspenso'] },
    { titulo: 'Papá al rescate (2023)', subtitulo: 'Papá al rescate', descripcion: 'A una semana de casarse y celebrar su matrimonio, Nico recibe una carta que lo obliga a enfrentar su secreto mejor guardado: es padre de Lulú, una niña de 7 años que apenas conoció al nacer. Tras la muerte de su madre, su hija reside en un hogar para infantes y el padre tiene 3 días para recuperarla antes de que pase al sistema de adopción. Nico duda qué hacer y con el apoyo de su novio, que está a miles de kilómetros, viaja junto a sus mejores amigos a rescatar a Lulú en una aventura que les cambiará la vida para siempre.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/05/5F5Hp1cvR9QfbynBmrVBV7lQeFK-400x571.jpg', url: 'https://streamtape.com/e/VrGzmyX9MjuK6kO/', generos: ['Comedia', 'Familia'] },
    { titulo: 'John Henry (2020)', subtitulo: 'John Henry', descripcion: 'El ex pandillero John Henry es un hombre tranquilo con un pasado violento. Cuando dos niños inmigrantes que huyen de su antiguo líder pandillero del sur de Los Ángeles se topan con su vida, John se ve obligado a reconciliarse con su pasado para tratar de darles un futuro.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/05/a2vtq1f5bETx56vvqr4F2EenroY-400x600.jpg', url: 'https://streamtape.com/e/jvY9LAwagyFzwyJ/', generos: ['Drama', 'Suspenso'] },
    { titulo: 'Infinity Pool (2023)', subtitulo: 'Infinity Pool', descripcion: 'James y Em Foster disfrutan de unas vacaciones en la playa con todo incluido en la isla ficticia de La Tolqa, cuando un accidente fatal expone la subcultura perversa del turismo hedonista, la violencia imprudente y los horrores surrealistas del resort.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/cTXkZfgE3qW7Js3a2uqLaTA8RYn-400x600.jpg', url: 'https://streamtape.com/e/oWPXqq86d8SJ4Jb/', generos: ['Suspenso', 'Terror'] }
  ];

  peliculasFiltradas = this.peliculas;

  constructor() { }

  ngOnInit() {
    this.peliculasFiltradas = this.peliculas.filter(pelicula =>
      pelicula.generos.includes('Drama')
    );
  }
}
