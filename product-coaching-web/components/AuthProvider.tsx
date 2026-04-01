"use client";

import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// Define a minimal Mock User type to replace Firebase User
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  providerData: any[];
  providerId: string;
  tenantId: string | null;
  metadata: any;
  refreshToken: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });


export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Authentication bypassed: Mock user always present
  const user = {
    uid: "mock-user-id",
    email: "demo@example.com",
    displayName: "Demo User",
    emailVerified: true,
    isAnonymous: false,
    phoneNumber: null,
    photoURL: null,
    providerData: [],
    providerId: "firebase",
    tenantId: null,
    metadata: {},
    refreshToken: "",
  } as unknown as User;
  
  const loading = false;

  /*
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  */

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
