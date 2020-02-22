window.addEventListener("load", function() {

  var highlightButton = document.getElementById("highlight");

  highlightButton.addEventListener('click', function(node) {

     //for (let node of document.body.childNodes) {
       //console.log(node);
       traverse(document.body);
     function traverse(node){
       if (node.childNodes.length) {
               // Loop over every child node
             node.childNodes.forEach(child => {
               console.log(child);
               traverse(child);
               // If it's a type 1, call the function recursively
               if (child.nodeType == 1) {
                     var spa = document.createElement("span");
                     spa.className = "hoverNode";
                     child.appendChild(spa);
                     spa.innerHTML = spa.parentNode.tagName;
                 //console.log(child.tagName, child.nodeType)
               }
             });
             }
           }
         //}
 });
});











//   for (let node of document.body.childNodes) {
//     if (node.nodeType === 1) {
//       node = node.firstChild
//       var spa = document.createElement("span");
//       spa.className = "hoverNode";
//       node.appendChild(spa);
//       spa.innerHTML = spa.parentNode.tagName;
//     }
//   }
// });

// function traverse(node){
//    for (let node of document.body.childNodes) {
//
//   function traverseChild (node){
//
//       if (node.nodeType === 1) {
//         //node = node.firstChild
//         var spa = document.createElement("span");
//         spa.className = "hoverNode";
//         node.appendChild(spa);
//         spa.innerHTML = spa.parentNode.tagName;
//       }
//       if (node.childNode) {
//         traverse(childNode);
//       }
//     }
//   }
// }
//   function search(node) {
//     function traverse(node) {
//       if (node.childNodes.length) {
//         // Loop over every child node
//       node.childNodes.forEach(child => {
//
//         // If it's a type 1, call the function recursively
//         if (child.nodeType == 1) {
//               var spa = document.createElement("span");
//               spa.className = "hoverNode";
//               node.appendChild(spa);
//               spa.innerHTML = spa.parentNode.tagName;
//           //console.log(child.tagName, child.nodeType)
//           traverse(child);
//         }
//       });
//       }
//     }
//     // Get the body element
//   let body = node.querySelector('body');
//
//   // If a body element was found, traverse its children
//   if (body) {
//     traverse(body);
//   }
// }
//window.onload = search(document);
