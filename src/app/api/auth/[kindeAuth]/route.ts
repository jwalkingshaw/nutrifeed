import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = (() => {
  try {
    // Check if Kinde environment variables are available
    if (!process.env.KINDE_ISSUER_URL || !process.env.KINDE_CLIENT_ID) {
      console.warn('Kinde configuration missing');
      return () => NextResponse.json(
        { error: 'Authentication service temporarily unavailable' },
        { status: 503 }
      );
    }
    
    return handleAuth();
  } catch (error) {
    console.warn('Kinde auth initialization failed:', error);
    return () => NextResponse.json(
      { error: 'Authentication service temporarily unavailable' },
      { status: 503 }
    );
  }
})();