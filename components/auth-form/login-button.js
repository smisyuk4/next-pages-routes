'use client';
import { signInWithGoogle } from '@/lib/firebase/firestore/auth';

export function LoginButton() {
  const handleSignIn = async () => {
    const result = await signInWithGoogle();
    console.log('result ', result);
  };

  return <button onClick={handleSignIn}>Login</button>;
}
