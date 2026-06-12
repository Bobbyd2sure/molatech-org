import { NextResponse } from "next/server";

// Auth (Clerk) removed for the MolaTech marketing site — no protected routes here.
export default function middleware() {
    return NextResponse.next();
}

export const config = {
    matcher: [],
};
