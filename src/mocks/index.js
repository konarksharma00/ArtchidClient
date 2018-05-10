// import { Server, Faker, uid } from 'react-mock'
// const endPoint = '/api/v1/todos'
 
// const todoSchema = {
//   author: Faker.internet.email(),
//   content: () => Faker.lorem.sentence(),
//   createdAt: () => Faker.date.past()
// }
 
// const requestHandler = (request, generator) => {
//   const todoList = generator.next(10, todoSchema);
//   return [200, { 'Content-Type': 'application/json' }, JSON.stringify(todoList)];
// }
 
// Server.mockGet(endPoint, requestHandler)
// Server.on()