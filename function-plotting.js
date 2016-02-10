function drawXAxis(ctx) {
    ctx.beginPath();
    
    ctx.lineWidth = "2.0";
    
    /* Draw the x-axis as a straight line along the bottom edge of the
    plotting area. */
    ctx.moveTo(xStart - 5, yStart);
    ctx.lineTo(xEnd, yStart);
    
    /* Note here we only use stroke and not fill, as we are just drawing lines,
    not filling in shapes. */
    ctx.stroke();
    
    ctx.closePath();
}

function doSomeDrawing() {
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    
    /* Here we define some key values, specifying the ends of the area of the
    canva we wish to use for plotting the function.
    
    Note that here we do not use var in defining the variables, which means they
    can be used in all other functions. This is useful here, but you should
    do this sparingly in more complicated programs, as shared state makes
    it more difficult to reason about the behaviour of your program.
    */
    xStart = 25;
    yStart = canvas.height - 25;
    yEnd = 25;
    xEnd = canvas.width - 25;
    
    /* Draw the x-axis */
    drawXAxis(ctx);
}

$(function() {
    doSomeDrawing();
});