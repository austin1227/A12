Vue.component("camelid-component", {
  props:[ 'rank', 'name',
        'distance', 'difficulty'],

  template:  `
    <tr>
          <td>{{rank}}</td>
          <td>{{name}}</td>
          <td>{{distance}}</td>
          <td>{{difficulty}}</td>

     </tr>`

})


var vm = new Vue ({

  el: "#myApp",
  data: {

    rankInput: "",
    nameInput: "",
    distanceInput: "",
    difficultyInput: "",

		trails: [

	{
	rank: 1,
	name: "Oberg Mountain",
	distance: 2,
	difficulty: "easy",
	},

	{
	rank: 2,
	name: "Levaux Mountain",
	distance: 4,
	difficulty: "easy"
	},

	{
	rank: 3,
	name: "Pincushion Mountain",
	distance: 3,
	difficulty: "moderate"
	},

	{
	rank: 4,
	name: "Middle Falls Trail",
	distance: 5,
	difficulty: "difficult"
	},

	{
	rank: 5,
	name: "Lookout Mountain",
	distance: 7,
	difficulty: "easy"
  },
]

},

  methods: {
    deleteLight: function (lightObject){
      this.trails = this.trails.filter(function(trails){
        if (trails.rank !== lightObject.rank) {
          return true;
        } else {
          return false;
        }
      })
    },

    addTrail: function () {
      let newTrail = {
        rank: this.rankInput,
        name: this.nameInput,
        distance: this.distanceInput,
        difficulty: this.difficultyInput,
      };
      this.trails.push(newTrail);

    }
  }


});
