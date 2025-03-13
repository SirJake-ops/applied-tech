import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const submission = await prisma.contactSubmission.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        preferredContact: body.preferredContact,
      },
    })
    
    return NextResponse.json({ success: true, data: submission })
  } catch (Error) {
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 })
  }
}