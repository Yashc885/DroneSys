import type { NextApiRequest, NextApiResponse } from 'next';

interface Marker {
  id: number;
  x: number;
  y: number;
  title: string;
}

// Handle GET request
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Example coordinates
  const data: Marker[] = [
    { id: 1, x: 28.6139, y: 77.2090, title: 'Delhi' },
    { id: 2, x: 19.0760, y: 72.8777, title: 'Mumbai' },
    { id: 3, x: 13.0827, y: 80.2707, title: 'Chennai' },
    { id: 4, x: 12.9716, y: 77.5946, title: 'Bengaluru' },
    { id: 5, x: 22.5726, y: 88.3639, title: 'Kolkata' },
    { id: 6, x: 25.5941, y: 85.1376, title: 'Patna' },
    { id: 7, x: 17.3850, y: 78.4867, title: 'Hyderabad' },
    { id: 8, x: 30.7333, y: 76.7794, title: 'Chandigarh' },
    { id: 9, x: 21.1702, y: 72.8311, title: 'Gandhinagar' },
    { id: 10, x: 26.8467, y: 80.9462, title: 'Lucknow' }
  ];

  res.status(200).json(data);
}
