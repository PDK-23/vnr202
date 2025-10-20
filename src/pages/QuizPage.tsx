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
        rationale:
          "Đây là mâu thuẫn giai cấp, không phải mâu thuẫn cơ bản chi phối toàn xã hội thời kỳ này.",
        isCorrect: false,
      },
      {
        text: "Giữa toàn thể dân tộc Việt Nam với giai cấp địa chủ phong kiến.",
        rationale:
          "Mâu thuẫn này tồn tại nhưng không phải là mâu thuẫn chủ yếu trong bối cảnh bị xâm lược.",
        isCorrect: false,
      },
      {
        text: "Giữa giai cấp nông dân và địa chủ.",
        rationale:
          "Đây là mâu thuẫn về lợi ích giai cấp trong nông thôn, không phải mâu thuẫn quyết định chiến lược cách mạng giai đoạn 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Giữa toàn thể dân tộc Việt Nam với đế quốc Pháp và phát xít Nhật.",
        rationale:
          "Đúng. Đây là mâu thuẫn dân tộc cơ bản, quyết định nhiệm vụ trung tâm là giải phóng dân tộc.",
        isCorrect: true,
      },
    ],
    hint: "Hãy nhớ bối cảnh nước ta bị Pháp thống trị và Nhật xâm lược.",
  },
  {
    questionNumber: 2,
    question:
      "Hội nghị nào của Ban Chấp hành Trung ương Đảng được coi là đỉnh cao của bản lĩnh chính trị, khẳng định dứt khoát giải phóng dân tộc là nhiệm vụ cấp thiết nhất?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Hội nghị Trung ương tháng 11/1939 (Bà Điểm).",
        rationale:
          "Hội nghị này mở đầu sự chuyển hướng, nhưng chưa xác định triệt để nhiệm vụ dân tộc giải phóng.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương tháng 7/1936.",
        rationale:
          "Hội nghị này tập trung vào phong trào dân chủ, chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương lần thứ 8 (tháng 5/1941) ở Cao Bằng.",
        rationale:
          "Đúng. Hội nghị Trung ương 8 là đỉnh cao chuyển hướng, xác định giải phóng dân tộc là nhiệm vụ trung tâm.",
        isCorrect: true,
      },
      {
        text: "Hội nghị toàn quốc của Đảng (8/1945).",
        rationale:
          "Hội nghị này chuẩn bị cho Tổng khởi nghĩa, không phải nơi khẳng định bước chuyển chiến lược.",
        isCorrect: false,
      },
    ],
    hint: "Hội nghị này do Nguyễn Ái Quốc chủ trì tại Pác Bó.",
  },
  {
    questionNumber: 3,
    question:
      "Sự sáng tạo lớn nhất của Đảng trong việc xây dựng khối đại đoàn kết toàn dân tộc giai đoạn này là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khôi phục lại phong trào Xô viết Nghệ Tĩnh.",
        rationale:
          "Đây là phong trào cách mạng trước đó, không phải hình thức tập hợp mới.",
        isCorrect: false,
      },
      {
        text: "Thành lập Mặt trận Dân chủ Đông Dương.",
        rationale:
          "Mặt trận này ra đời giai đoạn 1936–1939, không phải sáng tạo lớn nhất trong thời kỳ 1939–1945.",
        isCorrect: false,
      },
      {
        text: "Thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh).",
        rationale:
          "Đúng. Việt Minh là hình thức tập hợp sáng tạo, gắn với mục tiêu giải phóng dân tộc.",
        isCorrect: true,
      },
      {
        text: "Tổ chức các đội du kích Bắc Sơn.",
        rationale:
          "Đây là hoạt động quân sự, không phải tổ chức chính trị đại đoàn kết toàn dân.",
        isCorrect: false,
      },
    ],
    hint: "Tổ chức này do Nguyễn Ái Quốc sáng lập năm 1941.",
  },
  {
    questionNumber: 4,
    question:
      "Để mở rộng Mặt trận dân tộc thống nhất, Đảng đã có sự chuyển hướng chiến lược nào về cách mạng ruộng đất tại Hội nghị Trung ương (5/1941)?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quyết định hoàn thành cách mạng ruộng đất ngay trong thời gian kháng chiến.",
        rationale: "Điều này chưa phù hợp với mục tiêu cấp bách lúc bấy giờ.",
        isCorrect: false,
      },
      {
        text: "Tạm thời xóa bỏ hoàn toàn vấn đề ruộng đất để tập trung vào mục tiêu dân tộc.",
        rationale:
          "Sai, Đảng không xóa bỏ mà chỉ tạm gác khẩu hiệu để tập trung giải phóng dân tộc.",
        isCorrect: false,
      },
      {
        text: "Tạm gác khẩu hiệu 'cách mạng ruộng đất', thay bằng khẩu hiệu giảm tô, giảm tức và tịch thu ruộng đất của đế quốc, Việt gian chia cho dân cày nghèo.",
        rationale:
          "Đúng. Đây là chủ trương mềm dẻo, phù hợp yêu cầu đoàn kết dân tộc.",
        isCorrect: true,
      },
      {
        text: "Vẫn giữ nguyên khẩu hiệu 'Người cày có ruộng'.",
        rationale:
          "Không phù hợp với giai đoạn trước mắt là giải phóng dân tộc.",
        isCorrect: false,
      },
    ],
    hint: "Đảng ưu tiên nhiệm vụ dân tộc hơn giai cấp lúc bấy giờ.",
  },
  {
    questionNumber: 5,
    question:
      "Bản lĩnh và sự nhạy bén của Đảng sau sự kiện Nhật đảo chính Pháp (9/3/1945) thể hiện qua văn kiện nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chương trình hành động của Mặt trận Việt Minh.",
        rationale: "Văn kiện này không trực tiếp đối phó sự kiện Nhật đảo chính Pháp.",
        isCorrect: false,
      },
      {
        text: "Tuyên ngôn Độc lập.",
        rationale:
          "Đây là văn kiện sau Cách mạng Tháng Tám, không phải phản ứng trực tiếp.",
        isCorrect: false,
      },
      {
        text: "Chỉ thị 'Nhật – Pháp bắn nhau và hành động của chúng ta'.",
        rationale:
          "Đúng. Chỉ thị này thể hiện sự chủ động và nhạy bén chiến lược của Đảng.",
        isCorrect: true,
      },
      {
        text: "Lời kêu gọi toàn quốc kháng chiến.",
        rationale:
          "Được ban hành năm 1946, không thuộc giai đoạn 1939–1945.",
        isCorrect: false,
      },
    ],
    hint: "Đây là văn kiện của Trung ương Đảng ra ngay sau khi Nhật đảo chính Pháp.",
  },
  {
    questionNumber: 6,
    question:
      "Trong Hội nghị Trung ương 8 (5/1941), nguyên tắc tối cao thể hiện bản lĩnh chính trị độc lập, tự chủ là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ liên kết với giai cấp vô sản thế giới.",
        rationale: "Sai, Đảng chủ trương đoàn kết dân tộc trước hết.",
        isCorrect: false,
      },
      {
        text: "Phải duy trì đấu tranh vũ trang cục bộ liên tục.",
        rationale: "Sai, chủ trương là khởi nghĩa từng phần, không vũ trang liên tục.",
        isCorrect: false,
      },
      {
        text: "Quyền lợi của bộ phận, của giai cấp phải phục tùng quyền lợi của toàn thể dân tộc.",
        rationale:
          "Đúng. Đây là nguyên tắc tối cao của Hội nghị Trung ương 8.",
        isCorrect: true,
      },
      {
        text: "Phải chờ đợi sự hỗ trợ của Liên Xô.",
        rationale: "Sai, Đảng đề cao tính tự lực, tự cường.",
        isCorrect: false,
      },
    ],
    hint: "Nguyên tắc này thể hiện tinh thần đặt lợi ích dân tộc lên hàng đầu.",
  },
  {
    questionNumber: 7,
    question:
      "Tổ chức vũ trang chính thức đầu tiên, đặt nền móng cho lực lượng vũ trang cách mạng là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Cứu quốc quân.",
        rationale: "Thành lập sau, dựa trên sự hợp nhất lực lượng vũ trang.",
        isCorrect: false,
      },
      {
        text: "Đội du kích Bắc Sơn.",
        rationale: "Là tiền thân, nhưng chưa phải tổ chức vũ trang chính thức toàn quốc.",
        isCorrect: false,
      },
      {
        text: "Đội Việt Nam Tuyên truyền Giải phóng quân (tháng 12/1944).",
        rationale:
          "Đúng. Đây là tổ chức vũ trang cách mạng đầu tiên do Hồ Chí Minh sáng lập.",
        isCorrect: true,
      },
      {
        text: "Việt Nam Giải phóng quân (tên gọi sau Cách mạng Tháng Tám).",
        rationale:
          "Được hình thành sau khi hợp nhất các lực lượng vũ trang địa phương.",
        isCorrect: false,
      },
    ],
    hint: "Đội này do Võ Nguyên Giáp trực tiếp chỉ huy.",
  },
  {
    questionNumber: 8,
    question:
      "Theo quyết định của Hội nghị toàn quốc của Đảng tại Tân Trào (8/1945), phương hướng hành động trong Tổng khởi nghĩa là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ đánh chiếm thành phố trước để giành chính quyền trung ương.",
        rationale: "Sai, phải khởi nghĩa đồng loạt, không riêng thành phố.",
        isCorrect: false,
      },
      {
        text: "Chỉ phát động khởi nghĩa ở nông thôn rồi bao vây thành thị.",
        rationale: "Sai, tổng khởi nghĩa phải diễn ra trên phạm vi cả nước.",
        isCorrect: false,
      },
      {
        text: "Tập trung, thống nhất và kịp thời; đánh chiếm ngay những nơi chắc thắng.",
        rationale:
          "Đúng. Đây là phương châm hành động của Tổng khởi nghĩa tháng 8/1945.",
        isCorrect: true,
      },
      {
        text: "Chờ quân Đồng minh vào tước khí giới của Nhật rồi mới hành động.",
        rationale: "Sai, nếu chờ sẽ bỏ lỡ thời cơ lịch sử.",
        isCorrect: false,
      },
    ],
    hint: "Phương châm hành động là 'toàn dân khởi nghĩa, toàn diện và kịp thời'.",
  },
  {
    questionNumber: 9,
    question:
      "Thời cơ giành chính quyền trong Cách mạng Tháng Tám 1945 được Đảng xác định tồn tại trong thời gian nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khi Nhật mới vào Đông Dương.",
        rationale: "Lúc này lực lượng ta chưa đủ mạnh.",
        isCorrect: false,
      },
      {
        text: "Khi Pháp tuyên bố đầu hàng Đức.",
        rationale: "Xảy ra trước đó, chưa tạo thời cơ chín muồi.",
        isCorrect: false,
      },
      {
        text: "Khi Nhật Bản tuyên bố đầu hàng Đồng minh (15/8/1945) và trước khi quân Đồng minh vào Đông Dương.",
        rationale:
          "Đúng. Đây là 'thời cơ ngàn năm có một' mà Đảng đã kịp thời nắm bắt.",
        isCorrect: true,
      },
      {
        text: "Khi quân Đồng minh đổ bộ vào Việt Nam.",
        rationale:
          "Sai, khi đó tình hình phức tạp hơn, thời cơ đã qua.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nhớ thời điểm ngay sau khi Nhật đầu hàng Đồng minh.",
  },
  {
    questionNumber: 10,
    question:
      "Thắng lợi của Cách mạng Tháng Tám 1945 là minh chứng rõ rệt nhất cho khả năng nào của Đảng Cộng sản Việt Nam?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khả năng lãnh đạo chống Pháp mà không cần đến đấu tranh vũ trang.",
        rationale:
          "Sai, thắng lợi này gắn liền với phong trào đấu tranh vũ trang và chính trị kết hợp.",
        isCorrect: false,
      },
      {
        text: "Khả năng giải quyết đồng thời cả hai nhiệm vụ dân tộc và dân chủ trong cùng một lúc.",
        rationale:
          "Sai, nhiệm vụ dân tộc được đặt lên hàng đầu, dân chủ thực hiện sau khi độc lập.",
        isCorrect: false,
      },
      {
        text: "Khả năng xây dựng thành công chủ nghĩa xã hội ngay sau giải phóng dân tộc.",
        rationale: "Sai, đó là nhiệm vụ của giai đoạn sau.",
        isCorrect: false,
      },
      {
        text: "Khả năng lãnh đạo hoàn toàn thắng lợi sự nghiệp giải phóng dân tộc ở một nước thuộc địa nửa phong kiến.",
        rationale:
          "Đúng. Đây là minh chứng rõ rệt nhất cho vai trò lãnh đạo của Đảng.",
        isCorrect: true,
      },
    ],
    hint: "Đây là thắng lợi khẳng định vai trò lãnh đạo đúng đắn của Đảng.",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
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
                className={`text-center text-lg font-semibold mb-4 ${isCorrectAnswer ? "text-green-600" : "text-red-600"
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