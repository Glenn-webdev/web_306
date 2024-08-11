
import { PrismaClient } from '@prisma/client';
import LoginForm from './loginForm';
import Nav from './components/nav';

import LoginPage from './login/page';



export default async function page() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany();

  return (
      <div>
        <Nav />

        <LoginPage />
        <h1>User Data</h1>
        <ul>
          {data.map(item => (
            <div key={item.id}>
              <li>{item.f_name}</li>
              <li>{item.l_name}</li>
              <li>{item.password}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  
};
