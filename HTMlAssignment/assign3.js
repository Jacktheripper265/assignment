function drag(ev)
          {
             ev.dataTransfer.setData("ex",ev.target.id);
          }
          function Drop(ev)
          {
             ev.preventDefault();
             var we=ev.dataTransfer.getData("ex");
             ev.target.appendChild(document.getElementById(we));
          }
          function DragOver(ev)
          {
            ev.preventDefault();

          }