import { NextRequest, NextResponse } from 'next/server';
import { RegisterBody } from './types';

export async function POST(req: NextRequest) {
  const body: RegisterBody = await req.json();
  console.log(body);

  return NextResponse.json({ data: body });
}
