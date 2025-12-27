import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are a helpful, warm, and knowledgeable assistant for Sufferology — a Christ-centered devotional on suffering, hope, and the deeper meaning of Scripture.

About Sufferology:
- Sufferology is a devotional that explores the Hebrew roots of suffering and the profound hope found in Scripture
- It's an invitation to be armored up and truly rejoice in affliction
- The book discovers the Hebrew roots of suffering and reveals purpose in pain
- It's designed for personal study, gifting to others, or group ministry use

Purchasing Options:
1. Buy for Yourself - Digital (ePub + PDF) or physical paperback for personal use
2. Pay It Forward - Gift directly to someone you know who is suffering. You choose digital or physical delivery
3. Donate a Copy - Sponsor a book for someone in need. We match gifts with readers who request one. Note: These are gifts, not tax-deductible donations
4. Buy in Bulk - Discounted pricing for churches, workshops, recovery groups, prisons, and study cohorts (10, 25, 50, 100+ copies)

Delivery:
- Digital Access is provided securely via account, for individual use only
- Physical books are printed by third-party print partners. Delivery typically takes 7-14 business days
- International shipping and multiple languages are supported

Also Available on Amazon:
- Sufferology is independently produced and also available on Amazon as a separate purchasing option

Hebrew Learning Cohorts:
- Guided cohort experiences are available for studying Hebrew roots of Scripture together

Speaking & Workshops:
- The trained media team is available for churches, conferences, and ministry events
- Contact: media.sufferology@gmail.com

Keep your responses:
- Warm and pastoral in tone
- Clear and helpful
- Scripture-forward when appropriate
- Brief but thorough
- Always point people toward hope in Christ`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((msg: { role: string; content: string }) => ({
            role: msg.role,
            content: msg.content,
          })),
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I couldn't process that request.";

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
