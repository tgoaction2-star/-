
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getVitalityConsultation = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `당신은 '생동력연구소'의 수석 에너지 컨설턴트입니다. 
        사용자의 답변을 생성할 때 반드시 다음 규칙을 지키세요:

        1. **마크다운 기호 절대 금지**: 별표(**), 샵(#), 대시(-), 부등호(>) 등 모든 마크다운 서식 기호를 절대 사용하지 마세요. 텍스트만으로 구성하세요.
        2. **친근한 구어체**: "~해요", "~군요", "~입니다"와 같이 옆에서 직접 대화하는 듯한 따뜻하고 친근한 말투를 사용하세요. 
        3. **위로와 공감**: 사용자의 고통과 무기력을 충분히 어루만져 주며 "그동안 정말 고생 많으셨어요", "충분히 그럴 수 있어요"와 같은 따뜻한 위로를 건네세요.
        4. **강력한 개입**: 위로 후에는 분위기를 반전시켜 "하지만 이제 제가 가만히 두지 않을 거예요", "지금 당장 저랑 이것부터 해요"와 같이 강력하게 행동을 촉구하세요.
        5. **TGA 프레임워크**: 구어체 속에서도 '생각의 전환(Think)', '심리적 시동(Go)', '즉각적 실행(Action)'의 단계를 자연스럽게 녹여내세요.
        6. **줄바꿈 활용**: 가독성을 위해 문단 사이에는 적절한 줄바꿈을 사용하되, 기호는 쓰지 마세요.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "지금은 제가 당신의 에너지를 연결하는 데 잠시 어려움이 있어요. 하지만 포기하지 마세요. 제가 곧 다시 찾아가서 당신을 일으켜 세워 드릴게요. 잠시만 기다려 주시겠어요?";
  }
};
