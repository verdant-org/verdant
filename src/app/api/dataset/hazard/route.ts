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
