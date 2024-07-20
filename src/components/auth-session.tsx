'use client';
import { SessionProvider } from 'next-auth/react';

type Props = {
    children: React.ReactNode;
};

export const AuthSession = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
}
