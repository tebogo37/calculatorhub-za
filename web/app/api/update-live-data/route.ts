import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const secret = request.headers.get('x-calculatorhub-secret');
    
    // ← Change this to match what you'll put in the Python script
    if (secret !== process.env.LIVE_DATA_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    // Save to public folder so your calculators can read it easily
    const filePath = path.join(process.cwd(), 'public', 'data', 'live-rates.json');
    
    await writeFile(filePath, JSON.stringify(data, null, 2));

    console.log(`✅ Live data updated at ${data.timestamp}`);

    return NextResponse.json({ 
      success: true, 
      timestamp: data.timestamp,
      grocery_avg: data.grocery_basket?.average_basket 
    });

  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}