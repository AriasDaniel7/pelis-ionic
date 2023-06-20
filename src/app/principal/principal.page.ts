import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public appPages = [
    { title: 'Principal', url: '/principal', icon: 'home' },
    { title: 'Terror', url: '/terror', icon: 'arrow-forward' },
    { title: 'Acción', url: '/accion', icon: 'arrow-forward' },
    { title: 'Drama', url: '/drama', icon: 'arrow-forward' },
    { title: 'Romance', url: '/romance', icon: 'arrow-forward' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {

  }

  peliculas = [
    { titulo: 'Misión de rescate 2 (2023)', subtitulo: 'Extraction 2', descripcion: 'Después de sobrevivir a todo lo que le sucede en la primera película, Rake regresa como mercenario australiano de operaciones encubiertas al que se encomienda otra misión suicida: rescatar a la maltrecha familia de un despiadado gángster georgiano de la prisión donde se encuentra recluida.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/jT0Eyfw0VXlnk8sMKfyFiKj8UsK-400x600.jpg' },
    { titulo: 'Culpa mía (2023)', subtitulo: 'Culpa mía', descripcion: 'Noah debe dejar su ciudad, novio y amigos para mudarse a la mansión del nuevo marido de su madre. Allí conoce a su nuevo hermanastro Nick y sus personalidades chocan desde el primer momento. Pero la atracción que sienten les llevará a vivir una relación prohibida, donde el carácter rebelde y atormentado de cada uno de ellos pondrá del revés sus mundos haciendo que acaben perdidamente enamorados. Adaptación del primer libro de la trilogía «Culpables» de Mercedes Ron.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/gp31EwMH5D2bftOjscwkgTmoLAB-400x600.jpg' },
    { titulo: 'Rápidos y furiosos X (2023)', subtitulo: 'Fast X', descripcion: 'A través de varias misiones y contra lo imposible, Dom Toretto y su familia han sido más astutos y más rápidos que todos los enemigos se le han cruzado en su camino. Ahora se enfrentan a su enemigo más letal: una amenaza aterradora que surge de las sombras del pasado que está alimentado de una venganza sangrienta, y está decidido a destruir a su familia y destruir todo, y a cualquier persona, a los que Dom ama.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/06/jmdi62j5uJV60EtYY8zsE1LRYEf-400x600.jpg' },
    { titulo: 'Papá al rescate (2023)', subtitulo: 'Papá al rescate', descripcion: 'A una semana de casarse y celebrar su matrimonio, Nico recibe una carta que lo obliga a enfrentar su secreto mejor guardado: es padre de Lulú, una niña de 7 años que apenas conoció al nacer. Tras la muerte de su madre, su hija reside en un hogar para infantes y el padre tiene 3 días para recuperarla antes de que pase al sistema de adopción. Nico duda qué hacer y con el apoyo de su novio, que está a miles de kilómetros, viaja junto a sus mejores amigos a rescatar a Lulú en una aventura que les cambiará la vida para siempre.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/05/5F5Hp1cvR9QfbynBmrVBV7lQeFK-400x571.jpg' },
    { titulo: 'Astérix & Obélix : L’Empire du Milieu (2023)', subtitulo: "Astérix & Obélix : L'Empire du Milieu", descripcion: 'Es el año 50 A.C., la Emperatriz de China acaba de ser encarcelada tras un golpe de Estado incitado por Dang Sin Kuing, un príncipe traidor. Ayudada por Granodemaíz, el comerciante fenicio, y su fiel guardaespaldas Wang Tah, la única hija de la Emperatriz, la Princesa Fo Yong, huye a la Galia para pedir ayuda a dos valientes guerreros, Astérix y Obélix, quienes están dotados de una fuerza sobrehumana gracias a su poción mágica. Nuestros dos inseparables galos aceptan por supuesto ayudar a la Princesa a salvar a su madre y liberar a su país. Y así comienza un gran viaje y aventura rumbo a China. Pero César y su poderoso ejército, sedientos de una nueva conquista, también se dirigen hacia el Reino Medio…', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/05/gQy5hTqiioNHe85RuPcMyaio9Sp-400x600.jpg' },
    { titulo: 'John Henry (2020)', subtitulo: 'John Henry', descripcion: 'El ex pandillero John Henry es un hombre tranquilo con un pasado violento. Cuando dos niños inmigrantes que huyen de su antiguo líder pandillero del sur de Los Ángeles se topan con su vida, John se ve obligado a reconciliarse con su pasado para tratar de darles un futuro.', img: 'https://www.cinecalidad.tf/wp-content/uploads/2023/05/a2vtq1f5bETx56vvqr4F2EenroY-400x600.jpg' }
  ];

}
