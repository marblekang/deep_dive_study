const Circle = (radius) => {
  this.radius = radius;
  this.getArea = () => {
    return Math.PI * this.radius ** 2;
  };
};
