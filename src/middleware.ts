import { auth } from './auth';
import {NextRequest, NextResponse} from 'next/server';

export async function middleware(request: NextRequest) {
    const session = await auth();
    const accessToken = request.cookies.get('accessToken');
    const refreshToken = request.cookies.get('refreshToken');
    if (!session || !accessToken || !refreshToken) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
    }
}

export const config = {
    matcher: [
        '/idea/:path*',
        '/tags/:path*',
        '/insight/:path*',
    ],
};
