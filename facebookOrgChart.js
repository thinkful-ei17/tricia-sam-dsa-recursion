'use strict';

function displayOrgChart(list, boss) {
  let chart = {};
  list.filter(employee => employee.boss === boss).forEach(employee => {
    chart[employee.name] = displayOrgChart(list, employee.name);
	});
	return chart;
}

const facebookEmployees = [
  {
    name: 'Zuckerberg',
    boss: null
  },
  {
    name: 'Schroepfer',
    boss: 'Zuckerberg'
  },
  {
    name: 'Schrage',
    boss: 'Zuckerberg'
  },
  {
    name: 'Sandberg',
    boss: 'Zuckerberg'
  },
  {
    name: 'Goler',
    boss: 'Sandberg'
  },
  {
    name: 'Hernandez',
    boss: 'Sandberg'
  },
  {
    name: 'Moissinac',
    boss: 'Sandberg'
  },
  {
    name: 'Kelley',
    boss: 'Sandberg'
  },
  {
    name: 'Bosworth',
    boss: 'Schroepfer'
  },
  {
    name: 'Zhao',
    boss: 'Schroepfer'
  },
  {
    name: 'VanDyck',
    boss: 'Schrage'
  },
  {
    name: 'Swain',
    boss: 'Schrage'
  },
  {
    name: 'Blanch',
    boss: 'Swain'
  },
  {
    name: 'Tom',
    boss: 'Swain'
  },
  {
    name: 'Joe',
    boss: 'Swain'
  },
  {
    name: 'Sabrina',
    boss: 'VanDyck'
  },
  {
    name: 'Michelle',
    boss: 'VanDyck'
  },
  {
    name: 'Josh',
    boss: 'VanDyck'
  },
  {
    name: 'Richie',
    boss: 'Zhao'
  },
  {
    name: 'Sophia',
    boss: 'Zhao'
  },
  {
    name: 'Jen',
    boss: 'Zhao'
  },
  {
    name: 'Steve',
    boss: 'Bosworth'
  },
  {
    name: 'Kyle',
    boss: 'Bosworth'
  },
  {
    name: 'Andra',
    boss: 'Bosworth'
  },
  {
    name: 'Eddie',
    boss: 'Goler'
  },
  {
    name: 'Julie',
    boss: 'Goler'
  },
  {
    name: 'Annie',
    boss: 'Goler'
  },
  {
    name: 'Rowi',
    boss: 'Hernandez'
  },
  {
    name: 'Inga',
    boss: 'Hernandez'
  },
  {
    name: 'Morgan',
    boss: 'Hernandez'
  },
  {
    name: 'Amy',
    boss: 'Moissinac'
  },
  {
    name: 'Chuck',
    boss: 'Moissinac'
  },
  {
    name: 'Vinni',
    boss: 'Moissinac'
  },
  {
    name: 'Eric',
    boss: 'Kelley'
  },
  {
    name: 'Ana',
    boss: 'Kelley'
  },
  {
    name: 'Wes',
    boss: 'Kelley'
  }
];

console.log(displayOrgChart(facebookEmployees, null));