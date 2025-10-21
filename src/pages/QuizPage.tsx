import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  questionNumber: number;
  question: string;
  imageUrl?: string | null;
  answerOptions: {
    text: string;
    rationale: string;
    isCorrect: boolean;
  }[];
  hint: string;
}

const questions: QuizQuestion[] = [
  {
    questionNumber: 1,
    question:
      "Mâu thuẫn chủ yếu và gay gắt nhất trong xã hội Việt Nam đòi hỏi Đảng phải thay đổi chiến lược trong giai đoạn 1939–1945 là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Giữa giai cấp công nhân và giai cấp tư sản.",
        rationale: "Mâu thuẫn này tồn tại nhưng không phải mâu thuẫn chủ yếu trong thời kỳ 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Giữa toàn thể dân tộc Việt Nam với giai cấp địa chủ phong kiến.",
        rationale: "Mâu thuẫn này chưa thể hiện tính cấp bách bằng mâu thuẫn dân tộc – đế quốc.",
        isCorrect: false,
      },
      {
        text: "Giữa giai cấp nông dân và địa chủ.",
        rationale: "Mâu thuẫn giai cấp không phải trung tâm chiến lược trong giai đoạn này.",
        isCorrect: false,
      },
      {
        text: "Giữa toàn thể dân tộc Việt Nam với đế quốc Pháp và phát xít Nhật.",
        rationale: "Đây là mâu thuẫn chủ yếu, quyết định nhiệm vụ giải phóng dân tộc là trung tâm chiến lược của Đảng.",
        isCorrect: true,
      },
    ],
    hint: "Tập trung vào mâu thuẫn dân tộc – đế quốc trong thời kỳ chiến tranh thế giới thứ hai.",
  },
  {
    questionNumber: 2,
    question:
      "Hội nghị nào của Ban Chấp hành Trung ương Đảng được coi là đỉnh cao của bản lĩnh chính trị, đã khẳng định dứt khoát vấn đề giải phóng dân tộc là nhiệm vụ cấp thiết nhất, chỉ giải quyết một vấn đề căn kíp là 'dân tộc giải phóng'?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Hội nghị Trung ương tháng 11/1939 (Bà Điểm).",
        rationale: "Hội nghị này mở đầu sự chuyển hướng, nhưng chưa khẳng định dứt khoát nhiệm vụ dân tộc.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương lần thứ 8 (tháng 5/1941) ở Cao Bằng.",
        rationale: "Hội nghị 8 khẳng định nhiệm vụ giải phóng dân tộc là cấp thiết nhất – đỉnh cao bản lĩnh chính trị của Đảng.",
        isCorrect: true,
      },
      {
        text: "Hội nghị Trung ương tháng 7/1936.",
        rationale: "Hội nghị này thuộc thời kỳ Mặt trận Dân chủ, không phải giai đoạn 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Hội nghị toàn quốc của Đảng (8/1945).",
        rationale: "Hội nghị toàn quốc cụ thể hóa tổng khởi nghĩa, không phải là nơi đề ra chủ trương giải phóng dân tộc đầu tiên.",
        isCorrect: false,
      },
    ],
    hint: "Diễn ra ở Cao Bằng năm 1941, gắn liền với sự trở về của Nguyễn Ái Quốc.",
  },
  {
    questionNumber: 3,
    question:
      "Sự sáng tạo lớn nhất của Đảng trong việc xây dựng khối đại đoàn kết toàn dân tộc, tập hợp rộng rãi mọi lực lượng yêu nước trong giai đoạn này là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh).",
        rationale: "Mặt trận Việt Minh là sáng tạo lớn nhất, tập hợp mọi tầng lớp yêu nước vì độc lập dân tộc.",
        isCorrect: true,
      },
      {
        text: "Thành lập Mặt trận Dân chủ Đông Dương.",
        rationale: "Mặt trận này thuộc thời kỳ 1936–1939, không phải 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Khôi phục lại phong trào Xô viết Nghệ Tĩnh.",
        rationale: "Đây là phong trào trước đó (1930–1931), không phải sáng tạo giai đoạn 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Tổ chức các đội du kích Bắc Sơn.",
        rationale: "Các đội du kích là hình thức vũ trang, không phải sáng tạo về mặt trận đoàn kết.",
        isCorrect: false,
      },
    ],
    hint: "Tổ chức này ra đời năm 1941, biểu tượng của đại đoàn kết toàn dân.",
  },
  {
    questionNumber: 4,
    question:
      "Để mở rộng Mặt trận dân tộc thống nhất, Đảng đã có sự chuyển hướng chiến lược sáng tạo nào liên quan đến nhiệm vụ cách mạng ruộng đất tại Hội nghị Trung ương (5/1941)?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quyết định hoàn thành cách mạng ruộng đất ngay trong thời gian kháng chiến.",
        rationale: "Chủ trương này không phù hợp với nhiệm vụ dân tộc lúc bấy giờ.",
        isCorrect: false,
      },
      {
        text: "Tạm thời xóa bỏ hoàn toàn vấn đề ruộng đất để tập trung vào mục tiêu dân tộc.",
        rationale: "Không xóa bỏ hoàn toàn, mà chỉ tạm gác và điều chỉnh khẩu hiệu cho phù hợp.",
        isCorrect: false,
      },
      {
        text: "Vẫn giữ nguyên khẩu hiệu 'Người cày có ruộng'.",
        rationale: "Khẩu hiệu này được điều chỉnh để mở rộng đoàn kết dân tộc.",
        isCorrect: false,
      },
      {
        text: "Tạm gác khẩu hiệu 'cách mạng ruộng đất', thay bằng khẩu hiệu giảm tô, giảm tức và tịch thu ruộng đất của đế quốc, Việt gian chia cho dân cày nghèo.",
        rationale: "Chủ trương này thể hiện sự linh hoạt, sáng tạo để mở rộng mặt trận dân tộc.",
        isCorrect: true,
      },
    ],
    hint: "Liên quan đến sự điều chỉnh khẩu hiệu ruộng đất để đoàn kết dân tộc.",
  },
  {
    questionNumber: 5,
    question:
      "Bản lĩnh và sự nhạy bén của Đảng sau sự kiện Nhật đảo chính Pháp (9/3/1945) được thể hiện qua văn kiện lịch sử nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ thị Nhật – Pháp bắn nhau và hành động của chúng ta.",
        rationale: "Văn kiện này thể hiện rõ bản lĩnh và sự chủ động nắm bắt thời cơ của Đảng.",
        isCorrect: true,
      },
      {
        text: "Tuyên ngôn Độc lập.",
        rationale: "Đây là văn kiện sau Cách mạng Tháng Tám, không phải phản ứng trực tiếp với đảo chính Nhật – Pháp.",
        isCorrect: false,
      },
      {
        text: "Chương trình hành động của Mặt trận Việt Minh.",
        rationale: "Đây là văn kiện hướng dẫn lâu dài, không phản ánh trực tiếp tình huống 9/3/1945.",
        isCorrect: false,
      },
      {
        text: "Lời kêu gọi toàn quốc kháng chiến.",
        rationale: "Ra đời năm 1946, không thuộc giai đoạn Nhật đảo chính Pháp.",
        isCorrect: false,
      },
    ],
    hint: "Văn kiện này ra đời ngay sau khi Nhật đảo chính Pháp.",
  },
  {
    questionNumber: 6,
    question:
      "Trong Hội nghị Trung ương 8 (5/1941), nguyên tắc tối cao nào đã được Đảng đề ra, thể hiện rõ bản lĩnh chính trị độc lập, tự chủ?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ liên kết với giai cấp vô sản thế giới.",
        rationale: "Không chỉ dựa vào quốc tế, mà đặt lợi ích dân tộc lên trên hết.",
        isCorrect: false,
      },
      {
        text: "Phải duy trì đấu tranh vũ trang cục bộ liên tục.",
        rationale: "Đây không phải là nguyên tắc tối cao mà là một hình thức đấu tranh.",
        isCorrect: false,
      },
      {
        text: "Quyền lợi của bộ phận, của giai cấp phải phục tùng quyền lợi của toàn thể dân tộc.",
        rationale: "Nguyên tắc này thể hiện bản lĩnh độc lập, tự chủ, đặt lợi ích dân tộc lên trên hết.",
        isCorrect: true,
      },
      {
        text: "Phải chờ đợi sự hỗ trợ của Liên Xô.",
        rationale: "Trái với tinh thần tự lực, tự cường mà Hội nghị 8 đề ra.",
        isCorrect: false,
      },
    ],
    hint: "Nguyên tắc này thể hiện sự đặt lợi ích dân tộc lên hàng đầu.",
  },
  {
    questionNumber: 7,
    question:
      "Tổ chức vũ trang chính thức đầu tiên, đặt nền móng cho việc xây dựng lực lượng vũ trang cách mạng trong giai đoạn này là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Cứu quốc quân.",
        rationale: "Ra đời sau, trên cơ sở các đội du kích và Việt Nam Tuyên truyền Giải phóng quân.",
        isCorrect: false,
      },
      {
        text: "Đội du kích Bắc Sơn.",
        rationale: "Là lực lượng tiền thân, chưa phải tổ chức chính thức thống nhất toàn quốc.",
        isCorrect: false,
      },
      {
        text: "Đội Việt Nam Tuyên truyền Giải phóng quân (tháng 12/1944).",
        rationale: "Lực lượng vũ trang chính thức đầu tiên, do Hồ Chí Minh sáng lập và chỉ đạo.",
        isCorrect: true,
      },
      {
        text: "Việt Nam Giải phóng quân (tên gọi sau Cách mạng Tháng Tám).",
        rationale: "Tên gọi này xuất hiện sau khi hợp nhất lực lượng, không phải đầu tiên.",
        isCorrect: false,
      },
    ],
    hint: "Tổ chức do Võ Nguyên Giáp chỉ huy, thành lập năm 1944.",
  },
  {
    questionNumber: 8,
    question:
      "Theo quyết định của Hội nghị toàn quốc của Đảng tại Tân Trào (8/1945), phương hướng hành động trong Tổng khởi nghĩa là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ đánh chiếm thành phố trước để giành chính quyền trung ương.",
        rationale: "Không đúng, khởi nghĩa diễn ra đồng loạt và linh hoạt.",
        isCorrect: false,
      },
      {
        text: "Chỉ phát động khởi nghĩa ở nông thôn rồi bao vây thành thị.",
        rationale: "Không đúng, chủ trương là khởi nghĩa đồng thời và tập trung.",
        isCorrect: false,
      },
      {
        text: "Chờ quân Đồng minh vào tước khí giới của Nhật rồi mới hành động.",
        rationale: "Đi ngược với tinh thần chủ động giành chính quyền kịp thời.",
        isCorrect: false,
      },
      {
        text: "Tập trung, thống nhất và kịp thời; đánh chiếm ngay những nơi chắc thắng.",
        rationale: "Chủ trương đúng đắn, thể hiện tính chủ động, linh hoạt trong Tổng khởi nghĩa.",
        isCorrect: true,
      },
    ],
    hint: "Nhấn mạnh ba yếu tố: tập trung – thống nhất – kịp thời.",
  },
  {
    questionNumber: 9,
    question:
      "Thời cơ giành chính quyền trong Cách mạng Tháng Tám 1945 được Đảng nhận định chỉ tồn tại trong thời gian ngắn ngủi nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khi Nhật mới vào Đông Dương.",
        rationale: "Chưa phải thời cơ chín muồi để khởi nghĩa.",
        isCorrect: false,
      },
      {
        text: "Khi Pháp tuyên bố đầu hàng Đức.",
        rationale: "Diễn ra sớm hơn, không liên quan trực tiếp đến Đông Dương.",
        isCorrect: false,
      },
      {
        text: "Khi Nhật Bản tuyên bố đầu hàng Đồng minh (15/8/1945) và trước khi quân Đồng minh vào Đông Dương.",
        rationale: "Đây là thời điểm ngắn ngủi, thuận lợi nhất để giành chính quyền.",
        isCorrect: true,
      },
      {
        text: "Khi quân Đồng minh đổ bộ vào miền Bắc và miền Nam Việt Nam.",
        rationale: "Khi đó đã muộn, mất yếu tố bất ngờ.",
        isCorrect: false,
      },
    ],
    hint: "Liên quan đến việc Nhật đầu hàng và khoảng trống quyền lực ở Đông Dương.",
  },
  {
    questionNumber: 10,
    question:
      "Thắng lợi của Cách mạng Tháng Tám 1945 là minh chứng rõ rệt nhất cho khả năng nào của Đảng Cộng sản Việt Nam?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khả năng lãnh đạo chống Pháp mà không cần đến đấu tranh vũ trang.",
        rationale: "Không chính xác, thắng lợi này nhờ kết hợp chính trị và vũ trang.",
        isCorrect: false,
      },
      {
        text: "Khả năng giải quyết đồng thời cả hai nhiệm vụ dân tộc và dân chủ trong cùng một lúc.",
        rationale: "Cách mạng Tháng Tám chủ yếu hoàn thành nhiệm vụ dân tộc, dân chủ chỉ ở mức khởi đầu.",
        isCorrect: false,
      },
      {
        text: "Khả năng xây dựng thành công chủ nghĩa xã hội ngay sau giải phóng dân tộc.",
        rationale: "Xây dựng CNXH diễn ra sau đó, không thuộc thắng lợi trực tiếp của Cách mạng Tháng Tám.",
        isCorrect: false,
      },
      {
        text: "Khả năng lãnh đạo hoàn toàn thắng lợi sự nghiệp giải phóng dân tộc ở một nước thuộc địa nửa phong kiến.",
        rationale: "Đây là minh chứng rõ nhất về bản lĩnh, trí tuệ, năng lực lãnh đạo cách mạng của Đảng.",
        isCorrect: true,
      },
    ],
    hint: "Nhấn mạnh vai trò lãnh đạo và bản lĩnh cách mạng của Đảng.",
  },
];


const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answers[current] !== null) return;
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (questions[current].answerOptions[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.min(c + 1, questions.length));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const isAnswered = answers[current] !== null;
  const isCorrectAnswer =
    answers[current] !== null &&
    questions[current]?.answerOptions[answers[current] as number]?.isCorrect;

  const findCorrectAnswerIndex = (q: QuizQuestion) =>
    q.answerOptions.findIndex((opt) => opt.isCorrect);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2" style={{marginTop: '80px'}}>
      <motion.div
        className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] mb-8 text-center drop-shadow">
          Quiz ôn tập lý thuyết
        </h2>
        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-gray-800 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">
                {questions[current].question}
              </span>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {questions[current].answerOptions.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = opt.isCorrect;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-100 border-green-400 text-green-700";
                  else btnClass = "bg-blue-100 border-blue-300 text-blue-700";
                } else {
                  btnClass = isSelected
                    ? "bg-blue-200 border-blue-400 text-blue-900"
                    : "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt.text}
                  </motion.button>
                );
              })}
            </div>
            {(showFeedback || isAnswered) && (
              <motion.div
                className={`text-center text-lg font-semibold mb-4 ${
                  isCorrectAnswer ? "text-green-600" : "text-red-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {isCorrectAnswer ? "Chính xác!" : "Chưa đúng!"}
                <div className="text-gray-700 text-base mt-2 font-normal">
                  <span className="font-medium">Giải thích: </span>
                  {isCorrectAnswer
                    ? questions[current].answerOptions[
                        answers[current] as number
                      ].rationale
                    : questions[current].answerOptions[
                        findCorrectAnswerIndex(questions[current])
                      ].rationale}
                </div>
              </motion.div>
            )}
            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
                onClick={() => setShowHint(!showHint)}
              >
                Gợi ý
              </button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Câu tiếp
              </button>
            </div>
            <motion.div
              className="mt-4 p-4 text-center bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showHint ? 1 : 0,
                height: showHint ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold mb-2">Gợi ý:</div>
              <div className="text-sm italic">{questions[current].hint}</div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">
              Hoàn thành!
            </div>
            <div className="text-lg mb-4">
              Bạn đúng <span className="text-green-600 font-bold">{score}</span>
              /{questions.length} câu.
            </div>
            {answers.some(
              (ans, idx) =>
                idx < questions.length &&
                ans !== null &&
                !questions[idx]?.answerOptions[ans]?.isCorrect
            ) && (
              <div className="mt-6 text-left max-w-xl mx-auto">
                <div className="font-semibold text-red-600 mb-2">
                  Các câu bạn trả lời sai, hãy lưu ý:
                </div>
                <ul className="space-y-4">
                  {questions.map((q, idx) =>
                    answers[idx] !== null &&
                    !q.answerOptions[answers[idx] as number].isCorrect ? (
                      <li
                        key={idx}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded"
                      >
                        <div className="font-medium text-gray-800 mb-1">
                          Câu {idx + 1}: {q.question}
                        </div>
                        <div className="text-gray-700 mb-1">
                          <span className="font-semibold">Đáp án đúng:</span>{" "}
                          {String.fromCharCode(65 + findCorrectAnswerIndex(q))}.{" "}
                          {q.answerOptions[findCorrectAnswerIndex(q)].text}
                        </div>
                        <div className="text-gray-600 text-sm italic">
                          {q.answerOptions[findCorrectAnswerIndex(q)].rationale}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}
            <button
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={resetQuiz}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;