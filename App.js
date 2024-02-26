// const heading=React.createElement("h1",{id:"heading"},"Hello World From React!");// creating react element,headind is object
// //ReactDOM.render(heading, document.getElementById("root"));// taking and putting in that root,render uses to convert into h1


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// nested div and h1 tags in react
const parent=React.createElement("div",{id:"parent"},[
   React.createElement("div",{id:"child"},
      [React.createElement("h1",{},"im h1 tag"),
      React.createElement("h2",{},"im h2 tag")]
   ),

   React.createElement("div",{id:"child2"},
      [React.createElement("h1",{},"im h1 tag"),
      React.createElement("h2",{},"im h2 tag")]
   )
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);