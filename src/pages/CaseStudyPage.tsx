import React from "react";

import {
  FaRobot,
  FaUsers,
  FaCircleCheck, 
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa6"; 

// Import AI images (assume these are in assets folder)
import grokImage from "../assets/musicheroai.png"; 
import chatgptImage from "../assets/chatgptImage.webp";


const CaseStudyPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="w-full max-w-3xl bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur-md overflow-hidden">
        
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-indigo-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl shadow-lg mb-4">
              <FaRobot />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Báo cáo Sử dụng AI
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              (Minh bạch – Trách nhiệm – Liêm chính học thuật)
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 space-y-10">
          
          {/* Section 1: Mục đích & Sáng tạo (Creativity) */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <FaLightbulb className="text-indigo-600" />
              Mục đích & Vai trò Sáng tạo của AI
            </h2>
            <p className="text-gray-700 leading-relaxed pl-8 border-l-4 border-indigo-200 p-2 ml-4">
              AI chỉ đóng vai trò hỗ trợ (support), không thay thế toàn bộ.
              Mục tiêu là tăng cường giá trị sáng tạo và tương tác
            </p>
            <ul className="list-disc space-y-2 pl-12 text-gray-700 mt-3">
              <li>
                Cấu trúc & Thuật ngữ: Hỗ trợ dàn ý nội dung (Chương 7), chuẩn hóa thuật ngữ học thuật.
              </li>
              <li>
                Tương tác : Gợi ý bộ câu hỏi Quiz.
              </li>           
            </ul>
          </div>

          <hr/>

          {/* Section 2: Liêm chính học thuật (Academic Integrity) */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
              <FaHandshake className="text-purple-600" />
              Liêm chính học thuật và Minh bạch
            </h2>
            <p className="text-gray-700 mb-4 pl-8">
              Bản báo cáo cam kết tuân thủ 3 dấu hiệu liêm chính học thuật:
            </p>
            <ul className="space-y-4 pl-8">
              <li className="flex items-start gap-3">
                <FaCircleCheck className="flex-shrink-0 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Cam kết bằng văn bản</h3>
                  <p className="text-gray-700 text-sm">
                    Có "AI Usage" liệt kê công cụ, mục đích, kết quả và khẳng định không để AI làm thay hoàn toàn.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaCircleCheck className="flex-shrink-0 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phân định rõ ràng</h3>
                  <p className="text-gray-700 text-sm">
                    Có phân định rõ ràng giữa AI output và phần sinh viên chỉnh sửa và biên soạn .
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaCircleCheck className="flex-shrink-0 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Đối chiếu nguồn chính thống</h3>
                  <p className="text-gray-700 text-sm">
                    Mọi thông tin do AI sinh ra (đặc biệt là số liệu) đều được sinh viên tìm kiếm và đối chiếu nguồn chính thống.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <hr/>

          {/* Section 3: Trách nhiệm & Quy trình kiểm chứng (Responsibility) */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
              <FaUsers className="text-orange-600" />
              Trách nhiệm và Kiểm chứng Thông tin
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-400 text-gray-800 p-4 rounded-r-lg pl-8 space-y-2">
              <h3 className="font-semibold text-orange-800">
                Quy trình Kiểm chứng
              </h3>
              <p className="leading-relaxed">
                Nhóm chịu trách nhiệm hoàn toàn về nội dung cuối cùng.
                Thông tin do AI sinh ra phải được kiểm chứng bằng:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  Cơ sở Lý luận: Giáo trình Lý luận Chính trị (LLCT).
                </li>
                <li>
                  Cơ sở Pháp lý/Thực tiễn: Nghị quyết, văn bản pháp luật, và
                  số liệu từ cơ quan Nhà nước có thẩm quyền.
                </li>
              </ul>
            </div>
          </div>

          <hr/>
          
          {/* New Section: AI Tools Used - Keeping for practical list */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
              <FaRobot className="text-indigo-600" />
              Các AI đã sử dụng 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <div className="h-full text-center p-6 rounded-xl bg-indigo-50 border border-indigo-200 hover:shadow-lg transition-all flex flex-col">
                <img
                  src={chatgptImage}
                  alt="ChatGPT"
                  className="w-16 h-16 mx-auto mb-3 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="font-semibold text-gray-800 mb-1">ChatGPT</h3>
                <p className="text-sm text-gray-600 mt-auto">
                  Tạo dàn ý nội dung, chuẩn hóa thuật ngữ, gợi ý cấu trúc báo cáo.
                </p>
              </div>

              <div className="h-full text-center p-6 rounded-xl bg-purple-50 border border-purple-200 hover:shadow-lg transition-all flex flex-col">
                <img
                  src={grokImage}
                  alt="Diagram/Video AI"
                  className="w-16 h-16 mx-auto mb-3 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  MUCSICHERO AI
                </h3>
                <p className="text-sm text-gray-600 mt-auto">
                  Hỗ trợ tạo giai điệu bài hát.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;