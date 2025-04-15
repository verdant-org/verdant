import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db/drizzle"
import { hazard } from "@/db/schemas"
import { eq } from "drizzle-orm"


export async function POST(request: NextRequest) {
    const data = await request.json()

    const countyData = await db.query.hazard.findFirst({
        where: eq(hazard.stateCountyFipsCode, data.fip_code),
    })
    
    return NextResponse.json(countyData)
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const fips = searchParams.get("fips")

    if (!fips) {
        return NextResponse.json(
            { error: "Missing FIPS code" },
            { status: 400 }
        )
    }

    const countyData = await db.query.hazard.findFirst({
        where: eq(hazard.stateCountyFipsCode, fips),
    })

    if (!countyData) {
        return NextResponse.json(
            { error: "County not found" },
            { status: 404 }
        ) 
    }
    
    return NextResponse.json(countyData)
}
