import { useState } from "react";
import { GeminiClient } from "../services/GeminiClient";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const gemini = new GeminiClient("AIzaSyBOyExUS1i0kvI7jhV7MuYl1na1nLI4wNg");

const VoiceChatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [speaking, setSpeaking] = useState(false);
  const [tab, setTab] = useState<"text" | "voice">("text");
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState<string | null>(null);
  const [copyText, setCopyText] = useState<string>("Copy");

  const handleTabChange = (newTab: "text" | "voice") => {
    if (loading) return;
    setTab(newTab);
    setInput("");
    setMessages([]);
    setSpeaking(false);
    setLoading(false);
  };

  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeaking(true);
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = "vi-VN";
      utter.rate = 1;
      utter.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utter);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      let prompt =
        "Bạn hãy dựa vào giáo trình Chủ Nghĩa Xã Hội Khoa Học 2021. " +
        "Nếu không tìm thấy thông tin hợp lệ hoặc liên quan trong giáo trình, hãy trả lời rõ: " +
        "'Hiện tại tôi không thể tìm thấy các thông tin liên quan trong giáo trình.'\n";

      if (tab === "text") {
        prompt += `Trả lời câu hỏi này một cách đầy đủ, rõ ràng, có thể chỉ rõ các chương trong giáo trình mà bạn tham khảo: 
${input}`;
      } else {
        prompt += `Trả lời câu hỏi này theo phong cách gần gũi, dễ hiểu, có thể thêm ví dụ minh họa đời thường hoặc so sánh vui vẻ 
            để người đọc cảm thấy hứng thú hơn. Tuy nhiên vẫn đảm bảo tính chính xác và đầy đủ nội dung, 
            không được bỏ sót ý chính trong giáo trình. Không được sử dụng từ viết tắt, 
            hãy viết đầy đủ tất cả các khái niệm và cụm từ (ví dụ: thay vì CNXH thì phải viết là "Chủ nghĩa xã hội"). 
            Nếu có thể, hãy chỉ rõ chương trong giáo trình bạn đã tham khảo: 
            ${input}`;
      }

      const response = await gemini.ask(prompt);

      setMessages((prev) => [...prev, { role: "bot", text: response }]);

      if (tab === "voice") {
        speak(response);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Lỗi khi gọi API: " + err.message },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
      <motion.div
        className="w-full max-w-2xl min-h-[400px] flex flex-col bg-white/80 rounded-2xl shadow-2xl p-8 backdrop-blur border border-white/30 resize-y overflow-auto transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Chatbot AI Gemini
        </h2>
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "text"
                ? "bg-blue-500 text-white shadow"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("text")}
            disabled={loading}
          >
            Trả lời văn bản
          </button>
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "voice"
                ? "bg-blue-500 text-white shadow"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("voice")}
            disabled={loading}
          >
            Trả lời giọng nói
          </button>
        </div>

        <div className="flex-1 min-h-[180px] max-h-[500px] overflow-y-auto flex flex-col gap-3 mb-6 transition-all duration-300">
          {tab === "text" ? (
            <>
              {messages.length === 0 && (
                <div className="text-gray-500 text-center mt-12 text-base select-none">
                  Hãy hỏi bất kỳ điều gì bạn muốn!
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                      🤖
                    </span>
                  )}
                  <motion.div
                    className={`max-w-[85%] px-5 py-3 rounded-2xl text-base leading-relaxed shadow-sm cursor-pointer ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white self-end rounded-br-none"
                        : "bg-white text-gray-900 self-start border border-gray-200 rounded-bl-none"
                    }`}
                    initial={{ opacity: 0, x: msg.role === "user" ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => msg.role === "bot" && setModalText(msg.text)}
                  >
                    {msg.role === "user" ? (
                      msg.text
                    ) : (
                      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none line-clamp-4">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </motion.div>
                  {msg.role === "user" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                      👤
                    </span>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[180px]">
              {speaking ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <span className="text-6xl mb-2 animate-pulse text-blue-500">
                    🔊
                  </span>
                  <span className="text-lg text-blue-600 font-semibold mb-4">
                    Đang phát giọng nói...
                  </span>
                  <button
                    className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
                    onClick={() => {
                      if (
                        typeof window !== "undefined" &&
                        "speechSynthesis" in window
                      ) {
                        window.speechSynthesis.cancel();
                        setSpeaking(false);
                      }
                    }}
                  >
                    Dừng nói
                  </button>
                </div>
              ) : (
                <span className="text-gray-400 text-base select-none">
                  Nhập câu hỏi để nghe trả lời bằng giọng nói!
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-base"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
          <button
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white shadow disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSend}
            aria-label="Send"
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <span className="w-5 h-5 animate-spin border-2 border-white border-t-transparent rounded-full inline-block"></span>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L15 22l-4-9-9-4 20-7z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalText && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalText(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setModalText(null)}
              >
                ✖
              </button>
              <div className="prose prose-base lg:prose-lg max-w-none">
                <ReactMarkdown>{modalText}</ReactMarkdown>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => {
                    navigator.clipboard.writeText(modalText);
                    setCopyText("Copied!");
                    setTimeout(() => setCopyText("Copy"), 2000);
                  }}
                >
                  {copyText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceChatbot;
