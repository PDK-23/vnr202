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
    question: "Quan điểm nào phản ánh đúng lập trường duy vật lịch sử về gia đình?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Gia đình là thiết chế bất biến, không chịu tác động của phương thức sản xuất.",
        rationale: "Gia đình biến đổi theo phương thức sản xuất và quan hệ sở hữu; không bất biến.",
        isCorrect: false,
      },
      {
        text: "Cấu trúc và chức năng gia đình biến đổi theo lực lượng sản xuất và quan hệ sở hữu.",
        rationale: "Gia đình biến đổi theo phương thức sản xuất và quan hệ sở hữu; không bất biến.",
        isCorrect: true,
      },
      {
        text: "Gia đình chỉ do ý thức, truyền thống quyết định.",
        rationale: "Gia đình biến đổi theo phương thức sản xuất và quan hệ sở hữu; không bất biến.",
        isCorrect: false,
      },
      {
        text: "Gia đình không liên quan đến các thiết chế xã hội khác.",
        rationale: "Gia đình biến đổi theo phương thức sản xuất và quan hệ sở hữu; không bất biến.",
        isCorrect: false,
      },
    ],
    hint: "Nghĩ về sự biến đổi của gia đình theo điều kiện kinh tế - xã hội.",
  },
  {
    questionNumber: 2,
    question: "Chức năng không thuộc về gia đình trong xã hội mới theo tinh thần CNXHKH là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Tái sản xuất con người.",
        rationale: "Trấn áp bằng cưỡng chế là chức năng của Nhà nước, không phải chức năng gia đình.",
        isCorrect: false,
      },
      {
        text: "Giáo dục – xã hội hóa thế hệ trẻ.",
        rationale: "Trấn áp bằng cưỡng chế là chức năng của Nhà nước, không phải chức năng gia đình.",
        isCorrect: false,
      },
      {
        text: "Trấn áp bằng quyền lực cưỡng chế nhà nước.",
        rationale: "Trấn áp bằng cưỡng chế là chức năng của Nhà nước, không phải chức năng gia đình.",
        isCorrect: true,
      },
      {
        text: "Chăm sóc – phúc lợi, văn hóa – tinh thần.",
        rationale: "Trấn áp bằng cưỡng chế là chức năng của Nhà nước, không phải chức năng gia đình.",
        isCorrect: false,
      },
    ],
    hint: "Chức năng gia đình tập trung vào tái sản xuất và giáo dục, không phải cưỡng chế.",
  },
  {
    questionNumber: 3,
    question: "Tiêu chí cốt lõi của “hạnh phúc gia đình” theo định hướng XHCN là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Tích lũy tư bản cá nhân tối đa.",
        rationale: "Bình đẳng giới, tôn trọng, trách nhiệm theo pháp luật là tiêu chí cốt lõi của hạnh phúc gia đình XHCN.",
        isCorrect: false,
      },
      {
        text: "Bình đẳng giới, tôn trọng và trách nhiệm theo pháp luật.",
        rationale: "Bình đẳng giới, tôn trọng, trách nhiệm theo pháp luật là tiêu chí cốt lõi của hạnh phúc gia đình XHCN.",
        isCorrect: true,
      },
      {
        text: "Tách gia đình khỏi các ràng buộc xã hội.",
        rationale: "Bình đẳng giới, tôn trọng, trách nhiệm theo pháp luật là tiêu chí cốt lõi của hạnh phúc gia đình XHCN.",
        isCorrect: false,
      },
      {
        text: "Cấm sử dụng công nghệ và mạng xã hội.",
        rationale: "Bình đẳng giới, tôn trọng, trách nhiệm theo pháp luật là tiêu chí cốt lõi của hạnh phúc gia đình XHCN.",
        isCorrect: false,
      },
    ],
    hint: "Hạnh phúc gia đình gắn với bình đẳng và trách nhiệm xã hội chủ nghĩa.",
  },
  {
    questionNumber: 4,
    question: "Một hộ gia đình tăng thu nhập đáng kể, nhưng xung đột vẫn gia tăng. Cách lý giải đúng theo quan hệ vật chất – ý thức là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Vật chất quyết định tuyệt đối nên mâu thuẫn sẽ tự hết.",
        rationale: "Vật chất là điều kiện cần; ý thức/giá trị/kỹ năng và pháp luật là điều kiện đủ để bền vững.",
        isCorrect: false,
      },
      {
        text: "Ý thức quyết định tuyệt đối nên chỉ cần tuyên truyền là đủ.",
        rationale: "Vật chất là điều kiện cần; ý thức/giá trị/kỹ năng và pháp luật là điều kiện đủ để bền vững.",
        isCorrect: false,
      },
      {
        text: "Vật chất là điều kiện cần; cần đồng thời giáo dục giá trị, kỹ năng giao tiếp, kỷ luật pháp luật để tạo ổn định bền vững.",
        rationale: "Vật chất là điều kiện cần; ý thức/giá trị/kỹ năng và pháp luật là điều kiện đủ để bền vững.",
        isCorrect: true,
      },
      {
        text: "Không thể lý giải bằng lý luận biện chứng.",
        rationale: "Vật chất là điều kiện cần; ý thức/giá trị/kỹ năng và pháp luật là điều kiện đủ để bền vững.",
        isCorrect: false,
      },
    ],
    hint: "Quan hệ biện chứng giữa vật chất và ý thức cần cả hai yếu tố.",
  },
  {
    questionNumber: 5,
    question: "Đối với hành vi kiểm soát qua công nghệ (ép chia sẻ mật khẩu, theo dõi vị trí), phương án nào thể hiện đúng phối hợp gia đình – xã hội – Nhà nước?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Gia đình tự giải quyết, không cần tổ chức xã hội hay pháp luật.",
        rationale: "Phối hợp đúng tinh thần gia đình – xã hội – Nhà nước: quy ước, tư vấn, pháp luật bảo vệ.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần lên án đạo đức, không cần dịch vụ tư vấn hay cơ chế bảo vệ.",
        rationale: "Phối hợp đúng tinh thần gia đình – xã hội – Nhà nước: quy ước, tư vấn, pháp luật bảo vệ.",
        isCorrect: false,
      },
      {
        text: "Kết hợp quy ước gia đình về quyền riêng tư số + tư vấn cộng đồng + áp dụng pháp luật bảo vệ khi cần.",
        rationale: "Phối hợp đúng tinh thần gia đình – xã hội – Nhà nước: quy ước, tư vấn, pháp luật bảo vệ.",
        isCorrect: true,
      },
      {
        text: "Đưa toàn bộ vào xử phạt hành chính, không cần giáo dục.",
        rationale: "Phối hợp đúng tinh thần gia đình – xã hội – Nhà nước: quy ước, tư vấn, pháp luật bảo vệ.",
        isCorrect: false,
      },
    ],
    hint: "Giải pháp cần phối hợp đa cấp từ gia đình đến nhà nước.",
  },
  {
    questionNumber: 6,
    question: "Một cặp đôi thỏa thuận “vợ làm toàn bộ việc nhà, chồng chỉ kiếm tiền, không thay đổi”. Đánh giá nào đúng theo bình đẳng giới trong CNXH?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Hợp lý vì phù hợp “thiên chức”.",
        rationale: "Bình đẳng giới đòi hỏi tái phân công công việc gia đình theo nguyên tắc công bằng và trách nhiệm chung.",
        isCorrect: false,
      },
      {
        text: "Vi phạm nguyên tắc công bằng; cần tái phân công dựa trên thời gian, năng lực, thu nhập và trách nhiệm chung.",
        rationale: "Bình đẳng giới đòi hỏi tái phân công công việc gia đình theo nguyên tắc công bằng và trách nhiệm chung.",
        isCorrect: true,
      },
      {
        text: "Chỉ cần tăng thu nhập là cân bằng.",
        rationale: "Bình đẳng giới đòi hỏi tái phân công công việc gia đình theo nguyên tắc công bằng và trách nhiệm chung.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần tổ chức một buổi du lịch để hàn gắn.",
        rationale: "Bình đẳng giới đòi hỏi tái phân công công việc gia đình theo nguyên tắc công bằng và trách nhiệm chung.",
        isCorrect: false,
      },
    ],
    hint: "Bình đẳng giới nhấn mạnh công bằng và trách nhiệm chung.",
  },
  {
    questionNumber: 7,
    question: "Tiêu chí nào phản ánh “gia đình văn hóa” trong bối cảnh kinh tế thị trường định hướng XHCN?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Mức tiêu dùng cao hơn hàng xóm.",
        rationale: "“Gia đình văn hóa” gắn tuân thủ pháp luật, bình đẳng – tôn trọng, nhân ái, trách nhiệm cộng đồng.",
        isCorrect: false,
      },
      {
        text: "Tuân thủ pháp luật, bình đẳng – tôn trọng, môi trường sống nhân ái, trách nhiệm cộng đồng.",
        rationale: "“Gia đình văn hóa” gắn tuân thủ pháp luật, bình đẳng – tôn trọng, nhân ái, trách nhiệm cộng đồng.",
        isCorrect: true,
      },
      {
        text: "Không tham gia bất kỳ hoạt động xã hội nào.",
        rationale: "“Gia đình văn hóa” gắn tuân thủ pháp luật, bình đẳng – tôn trọng, nhân ái, trách nhiệm cộng đồng.",
        isCorrect: false,
      },
      {
        text: "Mua sắm công nghệ đắt tiền cho mọi thành viên.",
        rationale: "“Gia đình văn hóa” gắn tuân thủ pháp luật, bình đẳng – tôn trọng, nhân ái, trách nhiệm cộng đồng.",
        isCorrect: false,
      },
    ],
    hint: "Gia đình văn hóa gắn với pháp luật và trách nhiệm xã hội.",
  },
  {
    questionNumber: 8,
    question: "Chỉ số theo dõi – đánh giá (M&E) phù hợp nhất để đo hiệu quả can thiệp “an toàn số trong gia đình” là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Số lượt “thích” trên mạng xã hội của phường.",
        rationale: "Chỉ số gắn trực tiếp thay đổi hành vi và thỏa thuận quyền riêng tư số.",
        isCorrect: false,
      },
      {
        text: "Tỷ lệ cặp đôi ký thỏa thuận quyền riêng tư số và giảm yêu cầu kiểm tra điện thoại.",
        rationale: "Chỉ số gắn trực tiếp thay đổi hành vi và thỏa thuận quyền riêng tư số.",
        isCorrect: true,
      },
      {
        text: "Tốc độ tăng dân số tự nhiên của quận.",
        rationale: "Chỉ số gắn trực tiếp thay đổi hành vi và thỏa thuận quyền riêng tư số.",
        isCorrect: false,
      },
      {
        text: "Số poster treo tại trường học.",
        rationale: "Chỉ số gắn trực tiếp thay đổi hành vi và thỏa thuận quyền riêng tư số.",
        isCorrect: false,
      },
    ],
    hint: "Chỉ số cần đo lường thay đổi hành vi cụ thể.",
  },
  {
    questionNumber: 9,
    question: "Tại khu công nghiệp, cha/mẹ tăng ca, trẻ thiếu giám sát. Giải pháp ưu tiên theo tư duy biện chứng vật chất – tinh thần là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Kêu gọi “tự ý thức” của trẻ, không cần dịch vụ.",
        rationale: "Kết hợp điều kiện vật chất (dịch vụ, giờ làm) với giáo dục – phối hợp thiết chế.",
        isCorrect: false,
      },
      {
        text: "Phát triển dịch vụ trông trẻ ca tối, điều chỉnh giờ làm linh hoạt, kèm chương trình giáo dục gia đình – nhà trường – cộng đồng.",
        rationale: "Kết hợp điều kiện vật chất (dịch vụ, giờ làm) với giáo dục – phối hợp thiết chế.",
        isCorrect: true,
      },
      {
        text: "Cấm làm thêm giờ triệt để.",
        rationale: "Kết hợp điều kiện vật chất (dịch vụ, giờ làm) với giáo dục – phối hợp thiết chế.",
        isCorrect: false,
      },
      {
        text: "Phó mặc cho mạng xã hội giáo dục trẻ.",
        rationale: "Kết hợp điều kiện vật chất (dịch vụ, giờ làm) với giáo dục – phối hợp thiết chế.",
        isCorrect: false,
      },
    ],
    hint: "Giải pháp cần kết hợp vật chất và tinh thần biện chứng.",
  },
  {
    questionNumber: 10,
    question: "Khẳng định nào phù hợp với tư tưởng Hồ Chí Minh vận dụng CNXHKH về gia đình trong thời kỳ quá độ?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Gia đình trước hết là không gian riêng tư, tách khỏi lợi ích xã hội.",
        rationale: "Phản ánh đúng tinh thần “no ấm, bình đẳng, tiến bộ, hạnh phúc”, gắn kỷ cương pháp luật và mục tiêu dân chủ – văn minh.",
        isCorrect: false,
      },
      {
        text: "Xây dựng gia đình “no ấm, bình đẳng, tiến bộ, hạnh phúc”, nêu gương, giữ kỷ cương pháp luật, gắn với mục tiêu dân chủ – văn minh.",
        rationale: "Phản ánh đúng tinh thần “no ấm, bình đẳng, tiến bộ, hạnh phúc”, gắn kỷ cương pháp luật và mục tiêu dân chủ – văn minh.",
        isCorrect: true,
      },
      {
        text: "Lấy truyền thống thay cho pháp luật.",
        rationale: "Phản ánh đúng tinh thần “no ấm, bình đẳng, tiến bộ, hạnh phúc”, gắn kỷ cương pháp luật và mục tiêu dân chủ – văn minh.",
        isCorrect: false,
      },
      {
        text: "Đề cao nam quyền để bảo vệ trật tự.",
        rationale: "Phản ánh đúng tinh thần “no ấm, bình đẳng, tiến bộ, hạnh phúc”, gắn kỷ cương pháp luật và mục tiêu dân chủ – văn minh.",
        isCorrect: false,
      },
    ],
    hint: "Tư tưởng Hồ Chí Minh nhấn mạnh bình đẳng và tiến bộ gắn với xã hội.",
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