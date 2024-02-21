const createForceLayoutOptions = (graph) => {
  graph.nodes.forEach(function (node) {
    node.x = null;
    node.y = null;

  });

  return {
    legend: {
       data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
     },
    series: [
      {
        name: "WebDeps",

        type: 'graph',
        layout: 'force',
        animation: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}'
        },
        labelLayout: {
          hideOverlap: true
        },
        scaleLimit: { // for zooming
          min: 0.4,
          max: 2
        },
        lineStyle: { // edge styling
          color: 'source',
          curveness: 0.3
        },
        draggable: true,
        smooth: true,
        //  data: graph.nodes,
        data: graph.nodes.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        edges: graph.links,
        categories: graph.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2
        },
      }
    ]
  };
}

export default createForceLayoutOptions