// app/api/proxy/route.ts
import { NextResponse } from "next/server";

const NODE_API_URL = ""

export async function GET() {
    const response = await fetch(NODE_API_URL, {
        method: "GET",
    });

    const data = await response.json();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const body = await request.json();
    const response = await fetch(NODE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
}

export async function PUT(request: Request) {
    const body = await request.json();
    const response = await fetch(NODE_API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
}

export async function PATCH(request: Request) {
    const body = await request.json();
    const response = await fetch(NODE_API_URL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
}

export async function DELETE() {
    const response = await fetch(NODE_API_URL, {
        method: "DELETE",
    });

    if (response.ok) {
        return NextResponse.json({ message: "Resource deleted successfully" });
    } else {
        return NextResponse.error();
    }
}
