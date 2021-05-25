var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})

var canvas1 = document.getElementById("lienzo1");
		if (canvas1 && canvas1.getContext) {
		var ctx = canvas1.getContext("2d");
			if (ctx) {
					ctx.fillStyle ="#FFFFFF";
					ctx.lineWidth = 0;
					var X = 0;
					var Y = 0;
					var R = 100;
					
					var L = 5;
					var paso = 2;
					
					var estrella= L / paso;
					var rad = (2*Math.PI) / estrella;
															
					// traslada el contexto en el centro del canvas  
					ctx.translate(canvas1.width / 2, canvas1.height / 2);
					//gira el contexto unos 270º
					ctx.rotate(3*Math.PI/2);
					// dibuja el trazado 
					ctx.beginPath();
							for( var i = 0; i < L; i++ ){
							x = X + R * Math.cos( rad*i );
							y = Y + R * Math.sin( rad*i );
							ctx.lineTo(x, y);
							}
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
			}
		}