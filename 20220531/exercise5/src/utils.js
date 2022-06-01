export function randomColor() {
  return (
    'rgb(' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ')'
  );
}

export function randomNumber(){
  return Math.floor(Math.random() *100);
}