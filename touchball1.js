
//Make an SVG container
var svgContainer = d3.select('body').append('svg')
                                    .attr('width', 200)
                                    .attr('height', 200);

//Draw the ball
var ball = svgContainer.append('circle')
                        .attr('cx', 30)
                        .attr('cy', 30)
                        .attr('r', 20)
                        .attr('fill', 'red');
//Functions
function move() {
                ball.transition().attr('cx', '100').duration(1000);
                ball.transition().attr('cy', '100').duration(1000);
};

function changecolor() {
                        ball.attr('fill', 'blue');
};

function resize() {
                    ball.transition().attr('r', '50').duration(1000);
};

function ballReact() {
                    move();
                    changecolor();
                    resize();
};

//Ball reactions
ball.on('click', ballReact);