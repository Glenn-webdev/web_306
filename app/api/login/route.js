import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Read raw body
    const body = await req.text();
    console.log('Raw body:', body);

    // Check if body is empty
    if (!body) {
      return new Response(
        JSON.stringify({ error: 'Request body is empty' }),
        { status: 400 }
      );
    }

    // Parse JSON body
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (err) {
      console.error('Error parsing JSON:', err);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON payload' }),
        { status: 400 }
      );
    }

    console.log('Parsed body:', parsedBody);

    // Extract email and password
    const { email, password } = parsedBody;
    console.log('Parsed email:', email);
    console.log('Parsed password:', password);

    // Validate email and password
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Invalid email or password' }),
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return new Response(
        JSON.stringify({ error: 'Invalid email or password' }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Login successful' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(
      JSON.stringify({ error: `Internal server error: ${error.message}` }),
      { status: 500 }
    );
  }
}
