export function GET() {
  return new Response(
    [
      "ShiftBy website architecture placeholder",
      "Status: Phase 1 scaffold only",
      "Detailed LLM discoverability content is deferred to Phase 4."
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
