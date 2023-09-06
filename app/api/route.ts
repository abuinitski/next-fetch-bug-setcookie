import {NextResponse} from "next/server";
import cookie from 'cookie'

export const POST = async () => {
    const headers = new Headers()
    headers.append('set-cookie', cookie.serialize('Pen', 'Value 1', {
        expires: new Date(2025, 10, 10),
        path: '/',
        sameSite: true,
        secure: false,
        httpOnly: true,
    }))
    headers.append('set-cookie', cookie.serialize('PineApple', 'Value 2', {
        expires: new Date(2025, 10, 10),
        path: '/',
        sameSite: true,
        secure: false,
        httpOnly: true,
    }))

    headers.append('set-cookie', cookie.serialize('ApplePen', 'Value 3', {
        expires: new Date(2025, 10, 10),
        path: '/',
        sameSite: true,
        secure: false,
        httpOnly: true,
    }))

    return NextResponse.json({}, {status: 200, headers})
}