import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const secret = request.headers.get('x-calculatorhub-secret');

    if (secret !== process.env.LIVE_DATA_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    // Ensure directory exists
    const publicDir = path.join(process.cwd(), 'public', 'data');
    await mkdir(publicDir, { recursive: true });

    const filePath = path.join(publicDir, 'live-rates.json');
    
    await writeFile(filePath, JSON.stringify(data, null, 2));

    console.log(`✅ Live data saved successfully at ${data.timestamp}`);

    return NextResponse.json({ 
      success: true, 
      timestamp: data.timestamp,
      grocery_avg: data.grocery_basket?.average_basket 
    });

  } catch (error: any) {
    console.error('❌ Update Error:', error.message);
    return NextResponse.json({ 
      error: 'Failed to update data',
      details: error.message 
    }, { status: 500 });
  }
}