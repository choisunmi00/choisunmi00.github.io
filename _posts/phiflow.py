from phi.flow import *

v = StaggeredGrid(
    values = lambda pos: vec(
        x=math.cos(pos).vector["x"] * math.sin(pos).vector["y"],
        y=-math.sin(pos).vector["x"] * math.cos(pos).vector["y"],
    ),
    extrapolation=extrapolation.PERIODIC,
    x=25,
    y=25,
    bounds=Box(x=2 * PI, y= 2 * PI)
)

import mathplotlib.pyplot as plt
plt.style.use("dark_background")

plot(v)