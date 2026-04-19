import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join('/tmp', 'live-rates.json');
    const data = await readFile(filePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    // Return default data if file doesn't exist yet
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      message: "No live data yet - run crawler first"
    });
  }
}