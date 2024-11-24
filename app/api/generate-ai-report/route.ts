import { NextResponse } from "next/server";
import { generateAiReport } from "../../(home)/_actions/genarate-ai-report";

export async function POST(request: Request) {
  try {
    const { month } = await request.json();
    const report = await generateAiReport({ month });
    return NextResponse.json({ report });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Erro ao gerar relatório" },
      { status: 500 },
    );
  }
}
