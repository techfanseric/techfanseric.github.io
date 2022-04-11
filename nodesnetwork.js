var color = "gray";
var len = undefined;

  // create some nodes
  var nodes = [
    { id: 0, value: 5, label: "商业", group: 2 },
    { id: 1, value: 1, label: "租赁", group: 5 },
    { id: 2, value: 4, label: "运维管理", group: 4 },
    { id: 3, value: 3, label: "建筑设计", group: 5 },
    { id: 4, value: 6, label: "产城", group: 3 },
    { id: 5, value: 1, label: "工程概算", group: 1 },
    { id: 6, value: 2, label: "工程建设", group: 6 },
    { id: 7, value: 3, label: "装配式工厂", group: 5 },
    { id: 8, value: 1, label: "工程物流", group: 2 },
    { id: 9, value: 8, label: "科技金融", group: 1 },
    { id: 10, value: 8, label: "综合交通", group: 4 },
    { id: 11, value: 1, label: "规划调整", group: 6 },
    { id: 12, value: 7, label: "城市规划", group: 2 },
    { id: 13, value: 5, label: "轨道交通", group: 6 },
    { id: 14, value: 5, label: "土地整理", group: 5 },
    { id: 15, value: 7, label: "国土空间", group: 1 },
    { id: 16, value: 1, label: "生态工程", group: 3 },
    { id: 17, value: 1, label: "人文环境", group: 2 },
    { id: 18, value: 4, label: "TOD&TID", group: 5 },
    { id: 19, value: 5, label: "房地产", group: 5 },
    { id: 20, value: 5, label: "人防与应急", group: 6 },
    { id: 21, value: 2, label: "海洋战略规划", group: 2 },
  ];

  // create some edges
  var edges = [
    { from: 0, to: 3 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 9 },
    { from: 2, to: 6 },
    { from: 3, to: 4 },
    { from: 3, to: 9 },
    { from: 3, to: 12 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 4, to: 10 },
    { from: 4, to: 9 },
    { from: 5, to: 6 },
    { from: 6, to: 8 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 8, to: 10 },
    { from: 9, to: 10 },
    { from: 9, to: 12 },
    { from: 9, to: 13 },
    { from: 9, to: 18 },
    { from: 10, to: 13 },
    { from: 10, to: 15 },
    { from: 10, to: 18 },
    { from: 10, to: 12 },
    { from: 11, to: 12 },
    { from: 11, to: 14 },
    { from: 12, to: 13 },
    { from: 12, to: 14 },
    { from: 12, to: 15 },
    { from: 12, to: 18 },
    { from: 13, to: 15 },
    { from: 13, to: 19 },
    { from: 14, to: 15 },
    { from: 14, to: 16 },
    { from: 15, to: 16 },
    { from: 15, to: 17 },
    { from: 15, to: 18 },
    { from: 15, to: 21 },
    { from: 16, to: 21 },
    { from: 17, to: 18 },
    { from: 18, to: 19 },
    { from: 18, to: 20 },
  ];



// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  interaction: {
    multiselect: true,
  },
  width: '100%',
  // height: '100%',
  nodes: {
    shape: "dot",
    mass: 2,
    physics: true,
    shadow: {
      enabled: true,
      size: 2,
      x: 1,
      y: 3,
      color: 'rgba(0,0,0,0.2)',
    },
    size: 300,
    font: {
      size: 16,
      color: "#ffffff",
      strokeWidth: 1,
      strokeColor: '#333',
    },
    borderWidth: 0,
    borderWidthSelected: 3,
    chosen: {
      node:function(values, id, selected, hovering) {
            values.borderWidth = 3;
            values.borderColor = 'red';
          },
    },
    
  },
  edges: {
    width: 2,
    color: {
      color: '#848484',
      opacity: 0.4,
      highlight: 'red',
    },
    smooth:{
      enabled: false,
    },
    length:200,
  },
};
network = new vis.Network(container, data, options);


network.on('click',function(e){
  console.log(network.getConnectedNodes(), e);
});
