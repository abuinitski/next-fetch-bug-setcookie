import {NextRequest, NextResponse} from "next/server";

export const config = {
    matcher: ['/'],
};

export async function middleware(request: NextRequest) {
    console.log(`--- middleware: enter`)
    const response = await fetch('http://localhost:3000/api', {method: 'POST'})
    const cookies = response.headers.getSetCookie()
    console.log(`--- middleware: setcookie (${cookies.length}): ${JSON.stringify(cookies, null, 2)}`)
    console.log(`--- middleware: exit`)
    return NextResponse.next()
}