export default async function () {
  const request = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await request.json();
  return data;  
}
