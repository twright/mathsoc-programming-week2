function drawHouse(ctx) {
    /* We can draw many shapes on the canvas using paths. Each path needs to
    by calling ctx.beginPath(), do some commands to specify some points, and
    then  end with ctx.endPath() at which point the specified path will be
    drawn to the screen. */
    ctx.beginPath(); 
    
    /* We start by specifying the properties of the path. */
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "red";
    ctx.lineWidth = "3.0";
    
    /* The ctx.move command allows to specify where we start drawing. */
    ctx.moveTo(175, 200);
    /* After this, we can move around, drawing straight lines as we go,
    using ctx.lineTo */
    ctx.lineTo(100, 200);
    ctx.lineTo(100, 100);
    ctx.lineTo(60, 100);
    ctx.lineTo(175, 50);
    
    /* Calling fill colours in the space inside our path. */ 
    ctx.fill();
    /* Calling stroke draws the actual lines at the edge of our path. */
    ctx.stroke();
    /* You can choose to call either fill or stroke on their own, to get only
    the shape without the border, or only the path/outline respectively. */
    
    /* As mentioned, we need to end the path when we are done. */
    ctx.endPath();
}

/* This is our main function, which directs our other drawing activities. */
function doSomeDrawing() {
    /* This gets the canvas element from the page. */
    var canvas = $("#canvas")[0];
    /* From the canvas we get the 2d drawing context, ctx, which describes
    the drawing survace of the canvas. We will use ctx to direct all of our
    other drawing activities. */
    var ctx = canvas.getContext("2d");
    
    /* Call our function drawHouse, passing in ctx, to actually do some
    drawing. */
    drawHouse(ctx);
}

/* This code will be run when the page has finished loading. */
$(function() {
    doSomeDrawing();
});