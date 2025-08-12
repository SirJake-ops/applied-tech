import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendContactNotification } from '@/lib/emailService'

const prisma = new PrismaClient()

export async function GET() {
  try {

    const submissions = await prisma.contactSubmission.findMany({
      where: { emailSent: false },
    })


    for (const submission of submissions) {
      await sendContactNotification(submission)
      await prisma.contactSubmission.update({
        where: { id: submission.id },
        data: { emailSent: true },
      })
    }

    return NextResponse.json({ success: true, processed: submissions.length })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process emails' }, { status: 500 })
  }
}
