//Create an SVG container
var svgContainer = d3.select('body').append('svg')
                                    .attr('width', 400)
                                    .attr('height', 400);

//Draw the ball
let ballData = {
                cx : 100,
                cy : 100,
                 r : 30,
              fill : 'red',
};

var ball = svgContainer.append('circle')
                        .attr('cx', ballData.cx)
                        .attr('cy', ballData.cy)
                        .attr('r', ballData.r)
                        .attr('fill', ballData.fill);

//Colour options
var colours = ['red',
                'blue',
                'green',
                'purple',
                'yellow',
                'cyan',
                'brown',
                'orange',
                'magenta',
];

//Functions
function RandNum(min, max) {
                          min = Math.ceil(min);
                          max = Math.floor(max);
                          return Math.floor(Math.random() * (max - min + 1)) + min;
};

function pickPos(n) {
  if (n < 200)
    return ( + RandNum(10, 100));
  else
    return ( - RandNum(10, 100));
};

function pickSize(n) {
  if (n < 50)
    return ( + RandNum(10, 40));
  else
    return ( - RandNum(10, 40));
};

function ballReact() { ballData.cx = ballData.cx + pickPos(ballData.cx);
                     
                      ballData.cy = ballData.cy + pickPos(ballData.cy);
                  
                      ballData.r = ballData.r + pickSize(ballData.r);
                      
                      ballData.fill = colours[Math.floor(Math.random()*colours.length)];
                      
                      ball.transition().duration(1000)
                      .attr('cx', ballData.cx)
                      .attr('cy', ballData.cy)
                      .attr('r', ballData.r)
                      .attr('fill', ballData.fill);
};

//Ball reactions
ball.on('click', ballReact);