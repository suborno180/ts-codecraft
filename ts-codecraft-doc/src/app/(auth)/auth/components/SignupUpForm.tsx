"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { LuLoader } from 'react-icons/lu'; // Import the loader icon

const SignupUpForm = ({ hostUrl }: { hostUrl: string }) => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const router = useRouter();

  const HOST_URL = String(hostUrl);

  useEffect(() => {
    if (status === 'authenticated') {
      // Redirect authenticated users
      router.push('/');
    }
  }, [status, router]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the signup starts

    const res = await fetch(`${HOST_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    setLoading(false); // Set loading to false after the request completes

    if (res.ok) {
      // Optionally, sign in the user after successful signup
      await signIn('credentials', { email, password });
      router.push('/');
    } else {
      const data = await res.json();
      setError(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-primary/20 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-primary/20 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-primary/20 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className={`w-full flex justify-center items-center p-2 rounded-md transition duration-200 ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500'} text-white`}
          >
            {loading ? (
              <LuLoader className="animate-spin h-5 w-5 mr-2" /> // Spinning loader icon
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/auth/signin" className="text-green-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupUpForm;
