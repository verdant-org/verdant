// This is your GET request

export async function GET() {
    return Response.json({action: "This is a GET request", message: "Hello, World!"})
}

// This is your POST request

export async function POST(req: Request) {
    const data = await req.json()
    const result = {...data, action: "This is a POST request", message: "Hello, World"}
    return Response.json(result)
}

// This is your DELETE request

export async function DELETE(req: Request) {
    const data = await req.json()
    const email = data.email

    // Delete functionality for example

    return Response.json({action: "This is a DELETE request", message: "Hello, World!"}).status

}

// This is your PATCH request

export async function PATCH(req: Request) {
    const data = await req.json()

    // Patch functionality for example

    return Response.json({action: "This is a PATCH request", message: "Hello, "})
}

// This is your PUT request

export async function PUT(req: Request) {
    const data = await req.json()

    // Put functionality for example

    return Response.json({action: "This is a PATCH request", message: "Hello, "})
}
