import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase configuration missing')
    return null
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ featureId: string }> }
) {
  try {
    const supabase = getSupabaseClient()
    
    if (!supabase) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }
    const resolvedParams = await params;
    const { featureId } = resolvedParams;
    const body = await request.json();
    const { voterIdentifier } = body;

    // Validate required fields
    if (!featureId || !voterIdentifier) {
      return NextResponse.json(
        { message: 'Feature ID and voter identifier are required' },
        { status: 400 }
      );
    }

    // Check if user has voted for this feature
    const { data: existingVote } = await supabase
      .from('feature_votes')
      .select('id')
      .eq('feature_request_id', featureId)
      .eq('voter_identifier', voterIdentifier)
      .single();

    return NextResponse.json({
      hasVoted: !!existingVote
    });

  } catch (error) {
    console.error('Failed to check vote status:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}