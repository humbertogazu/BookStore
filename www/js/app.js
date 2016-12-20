(function(){

	var app = angular.module('bookApp',['ui.router']);

	app.controller('bookController',function(){
		this.products=books;
	});
	app.config(function($stateProvider) {

				$stateProvider
					.state('dashboard',{
						url:'/dashboard',
						templateUrl: 'templates/dashboard.html',
						controller: 'bookController'
					})
					.state('dashboard.datos',{
						url:'/data',
						templateUrl: 'templates/data.html',
						controller: 'bookController'
					})
					.state('dashboard.pedidos',{
						url:'/pedidos',
						templateUrl: 'templates/pedidos.html',
						controller: 'bookController'
					})
					.state('dashboard.favoritos',{
						url:'/favorios',
						templateUrl: 'templates/favoritos.html',
						controller: 'bookController'
					})
					.state('libros',{
						url:'/libros',
						templateUrl: 'templates/libros.html',
						controller: 'bookController'
					})
				});
	var books=[{
			"id":"1",
			"titulo":"Cien años de soledad",
			"autor": "Gabriel García Márquez",
	 		"editorial": "Sudamericana",
	 		"descripcion": "es la magistral descripción que hace el autor acerca de una serie de trastornos mentales presentes dentro y fuera de la familia Buendía. Las principales de estas enfermedades mentales son los trastornos del estado de ánimo. Sin embargo, también se describen otras situaciones psicopatológicas.",
	 		imagenes: [{id:0,url:'img/1.jpeg'}]				
		},
		{
			"id": "2",
	 		"titulo": "El amor en los tiempos del cólera",
	 		"autor": "Gabriel García Márquez",
	 		"editorial": "Sudamericana",
	 		"descripcion": "La novela inicia con la muerte de Jeremiah de Saint-Amour, un refugiado antillano inválido de guerra, y la del doctor Juvenal Urbino. Está ambientada entre finales del siglo XIX y principios del siglo XX en una ciudad colombiana del litoral del Caribe, que por su cercanía a la desembocadura del río Magdalena podría ser Cartagena.",
	 		imagenes: [{id:0,url:'img/2.jpeg'}]			
		},
		{
			"id": "3",
	 		"titulo": "Crónica de una muerte anunciada",
	 		"autor": "Gabriel García Márquez",
	 		"editorial": "Sudamericana",
			"descripcion": "En un pequeño y aislado pueblo en la costa del Caribe, se casan Bayardo San Román, un hombre rico y recién llegado, y Ángela Vicario. Al celebrar su boda, los recién casados se van a su nueva casa, y allí Bayardo descubre que su esposa no es virgen. Cuando lo descubre, devuelve a Ángela Vicario a la casa de sus padres, donde su madre la muele a golpes, Ángela culpa a Santiago Nasar, un vecino del pueblo.",
	 		imagenes: [{id:0,url:'img/3.jpeg'}]			
		},
		{
			"id": "4",
	 		"titulo": "El otoño del patriarca",
	 		"autor": "Gabriel García Márquez",
	 		"editorial": "Sudamericana",
	 		"descripcion": "La novela, que está considerada como una fábula sobre la soledad del poder, se desarrolla en un país ficticio a orillas del Mar Caribe. Este país es gobernado por un anciano dictador que recrea el prototipo de las dictaduras latinoamericanas del siglo XX.",
	 		imagenes: [{id:0,url:'img/4.jpeg'}]			
		}
		];


})();