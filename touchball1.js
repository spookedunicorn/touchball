
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
                ball.attr('cx', '50').attr('cy', '50');
};

function changecolor() {
                        ball.attr('fill', 'blue');
};

function resize() {
                    ball.attr('r', '50');
};

function ballReact() {
                    move();
                    changecolor();
                    resize();
};

//Ball reactions
ball.on('click', ballReact);