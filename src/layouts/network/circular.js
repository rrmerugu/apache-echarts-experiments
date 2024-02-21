
const createCircularLayoutOptions = (graph) => {
  graph.nodes.forEach(function (node) {
    node.x = null;
    node.y = null;
    node.label = {
      show: node.symbolSize > 30
    };
  });
 

  console.log("===graph", graph)

    return {
        title: {
          text: 'Les Miserables',
          subtext: 'Circular layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }
        ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'circular',
            circular: {
              rotateLabel: true
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      };
}

  
  export default createCircularLayoutOptions