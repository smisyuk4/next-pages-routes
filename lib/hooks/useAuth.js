'use client';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase/clientApp';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return user;
}
