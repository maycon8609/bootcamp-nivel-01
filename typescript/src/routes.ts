import { Request, Response } from 'express';

import createUser from './services/createUser';

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    email: 'maycon@api.com',
    password: '1234',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ]
  });

  console.log(user);

  return response.json({ message: 'hello word'});
}