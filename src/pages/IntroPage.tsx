import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// ===== ICONS =====
import {
  FaQuoteLeft,
  FaChartLine,
  FaLightbulb,
  FaChevronDown,
  FaUpRightFromSquare,
  FaXmark,
  FaNewspaper,
  FaArrowUp,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa6";

// ===== ASSETS =====
// TODO: Đảm bảo bạn có file ảnh và video này trong thư mục /src/assets

const videoUrl = "/assets/video/bg-family.mp4";

// ====== CONFIG & DATA ======
type ArticleItem = {
  id: string;
  title: string;
  sourceName: string;
  href: string;
  cover?: string;
  summary?: string;
  tags?: string[];
};

const ARTICLES: ArticleItem[] = [
  {
    id: "ref1",
    title: "19-5-1941: Thành lập Mặt trận Việt Minh",
    sourceName: "Bảo tàng Lịch sử Việt Nam",
    href: "https://baotanglichsu.vn/vi/Articles/3097/16382/19-5-1941-thanh-lap-mat-tran-viet-minh.html",
  },
  {
    id: "ref2",
    title: "Báo chí cách mạng Việt Nam thắp lửa soi đường cho thắng lợi của Cách mạng Tháng Tám",
    sourceName: "Vietnam.vn",
    href: "https://www.vietnam.vn/bao-chi-cach-mang-viet-nam-thap-lua-soi-duong-cho-thang-loi-cua-cach-mang-thang-tam",
  },
  {
    id: "ref3",
    title: "Cách mạng Tháng Tám năm 1945 – Bước ngoặt vĩ đại của cách mạng Việt Nam thế kỷ XX",
    sourceName: "Tạp chí Cộng sản",
    href: "https://tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/959002/cach-mang-thang-tam-nam-1945---buoc-ngoat-vi-dai-cua-cach-mang-viet-nam-the-ky-xx.aspx",
  },
  {
    id: "ref4",
    title: "Giáo trình Lịch sử Đảng cộng sản Việt Nam",
    sourceName: "Sách giáo trình",
    href: "/assets/giao-trinh-lich-su-dang-cong-san-viet-nam.pdf",
  },
  {
    id: "ref5",
    title: "Nhật đảo chính Pháp tại Đông Dương (Wikipedia)",
    sourceName: "Wikipedia",
    href: "https://vi.wikipedia.org/wiki/Nh%E1%BA%ADt_%C4%91%E1%BA%A3o_ch%C3%ADnh_Ph%C3%A1p_t%E1%BA%A1i_%C4%90%C3%B4ng_D%C6%B0%C6%A1ng",
  },
  {
    id: "ref6",
    title: "Sự chủ động sáng tạo của các Đảng bộ địa phương trong Cách mạng Tháng Tám năm 1945",
    sourceName: "Tạp chí Lịch sử Đảng",
    href: "https://tapchilichsudang.vn/su-chu-dong-sang-tao-cua-cac-dang-bo-dia-phuong-trong-cach-mang-thang-tam-nam-1945.html",
  },
  {
    id: "ref7",
    title: "Việt Nam trong Chiến tranh thế giới thứ hai (Wikipedia)",
    sourceName: "Wikipedia",
    href: "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam_trong_Chi%E1%BA%BFn_tranh_th%E1%BA%BF_gi%E1%BB%9Bi_th%E1%BB%A9_hai",
  },
];


// ====== ANIMATION VARIANTS ======
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ====== HELPER COMPONENTS ======

type CollapsibleProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  idAnchor?: string;
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  subtitle,
  icon,
  defaultOpen = false,
  idAnchor,
  children,
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <motion.div
      id={idAnchor}
      className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 text-left px-6 md:px-8 py-6 md:py-7 hover:bg-indigo-50/50 transition-colors"
      >
        <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl shadow-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <FaChevronDown
          className={`text-gray-600 text-xl transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-8 text-gray-800 leading-relaxed space-y-4 border-t border-indigo-100 pt-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArticleModal: React.FC<{
  article: ArticleItem;
  onClose: () => void;
}> = ({ article, onClose }) => (
  <div
    className="fixed inset-0 bg-black/75 z-[1000] flex items-center justify-center p-4"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {article.cover ? (
        <img
          src={article.cover}
          alt={article.title}
          className="w-full h-56 md:h-64 object-cover"
        />
      ) : (
        <div className="w-full h-56 md:h-64 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500" />
      )}

      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <FaNewspaper className="text-indigo-600" />
          {article.sourceName}
        </p>
        {article.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {article.summary && (
          <p className="text-gray-700 mt-5 leading-relaxed">{article.summary}</p>
        )}

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
          >
            Đóng
          </button>
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium inline-flex items-center gap-2 shadow-lg transition"
          >
            Đọc bài gốc <FaUpRightFromSquare />
          </a>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-xl bg-black/50 text-white hover:bg-black/70 transition backdrop-blur"
        aria-label="Đóng"
      >
        <FaXmark className="text-xl" />
      </button>
    </motion.div>
  </div>
);

// (Helper components for external citations were removed as they are unused in the IntroPage)


// ====== MAIN PAGE COMPONENT ======
const IntroPage: React.FC = () => {
  const [articleModal, setArticleModal] = React.useState<ArticleItem | null>(null);

  return (
    <div className="relative w-full py-4 min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover opacity-20 blur-sm"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30" />
      </div>
      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-16 pb-20 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold text-sm mb-6 shadow-md"
          >
            <FaUsers /> Bài thuyết trình lịch sử
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6 pb-3"
          >
            Bản lĩnh và sự sáng tạo của Đảng
            <br />trong chuyển hướng chỉ đạo cách mạng (1939–1945)
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tóm tắt các quyết định chiến lược, bản lĩnh chính trị và những sáng tạo
            của Đảng Cộng sản Việt Nam dẫn tới thắng lợi Cách mạng Tháng Tám 1945.
          </motion.p>
        </motion.div>
      </header>

      {/* Key Principles Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: FaUsers, title: "Lời mở đầu", desc: "Giai đoạn 1939–1945: thử thách và bước ngoặt quyết định dẫn tới Cách mạng Tháng Tám.", delay: 0.3, colors: "from-blue-500 to-indigo-600", border: "border-indigo-100" },
            { icon: FaChartLine, title: "Sự chuyển hướng chiến lược", desc: "Hội nghị 11/1939, thay đổi nhiệm vụ tập trung giải phóng dân tộc, thành lập Mặt trận thống nhất.", delay: 0.4, colors: "from-purple-500 to-pink-600", border: "border-purple-100" },
            { icon: FaLightbulb, title: "Bản lĩnh & Sáng tạo", desc: "Từ Hội nghị 5/1941 đến chớp thời cơ Tổng khởi nghĩa Tháng Tám 1945.", delay: 0.5, colors: "from-pink-500 to-rose-600", border: "border-pink-100" },
          ].map(card => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: card.delay }}
              className={`bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl ${card.border} hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.colors} flex items-center justify-center mb-4 shadow-lg`}>
                <card.icon className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="relative max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 md:p-10 text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <FaQuoteLeft className="text-5xl mb-4 opacity-50" />
            <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
              "Thắng lợi của Cách mạng Tháng Tám 1945 là minh chứng cho bản lĩnh chính trị độc lập, tự chủ và sự sáng tạo của Đảng Cộng sản Việt Nam."
            </p>
            <p className="text-indigo-100 italic">
              — Trích: Bài thuyết trình "Bản lĩnh và sự sáng tạo của Đảng" (1939–1945)
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        <Collapsible
          idAnchor="loimo"
          title="LỜI MỞ ĐẦU"
          subtitle="Giai đoạn 1939–1945: thử thách và bước ngoặt lịch sử"
          icon={<FaUsers />}
          defaultOpen
        >
          <div className="space-y-4">
            <p>
              Giai đoạn 1939–1945 là một trong những giai đoạn thử thách khốc liệt
              nhưng cũng là thời kỳ rực rỡ nhất, đánh dấu bước ngoặt lịch sử vĩ đại của
              cách mạng Việt Nam. Thành công của Cách mạng Tháng Tám 1945 khẳng định
              Đảng Cộng sản Việt Nam là tổ chức duy nhất có khả năng lãnh đạo sự nghiệp
              giải phóng dân tộc tại một nước thuộc địa nửa phong kiến.
            </p>
            <p>
              Sự thắng lợi đó là minh chứng cho bản lĩnh chính trị độc lập, tự chủ
              và trí tuệ sáng tạo của Đảng trong việc chuyển hướng chỉ đạo chiến
              lược cách mạng.
            </p>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="chuyenhuong"
          title="I. SỰ CHUYỂN HƯỚNG CHIẾN LƯỢC"
          subtitle="Yêu cầu của lịch sử (1939–1945)"
          icon={<FaChartLine />}
        >
          <div className="space-y-4">
            <h4 className="font-bold">1. Bối cảnh quốc tế và trong nước</h4>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Quốc tế: Chiến tranh thế giới thứ hai bùng nổ (9/1939), làm thay đổi cán cân lực lượng toàn cầu.</li>
              <li>Trong nước: Thực dân Pháp đàn áp phong trào, Nhật Bản xâm nhập Đông Dương (9/1940) tạo ra tình trạng "một cổ hai tròng"; mâu thuẫn chủ yếu trở thành mâu thuẫn giữa toàn thể dân tộc Việt Nam và các lực lượng xâm lược.</li>
            </ul>

            <h4 className="font-bold">2. Hội nghị Trung ương 11/1939</h4>
            <p>
              Hội nghị Ban Chấp hành Trung ương tháng 11/1939 (Bà Điểm) khẳng
              định nhiệm vụ hàng đầu là giải phóng dân tộc, chủ trương thành lập
              Mặt trận dân tộc thống nhất phản đế Đông Dương và tạm gác một số
              khẩu hiệu để tập trung lực lượng chống đế quốc.
            </p>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="banlinh"
          title="II. BẢN LĨNH CHÍNH TRỊ"
          subtitle="Bản lĩnh độc lập, tự chủ và quyết đoán"
          icon={<FaLightbulb />}
        >
          <div className="space-y-4">
            <h4 className="font-bold">Những điểm chính</h4>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Hội nghị Trung ương lần thứ 8 (5/1941) do Nguyễn Ái Quốc chủ trì khẳng định nhiệm vụ giải phóng dân tộc là ưu tiên hàng đầu.</li>
              <li>Nguyên tắc: Quyền lợi của bộ phận, của giai cấp phải phục tùng quyền lợi của toàn thể dân tộc.</li>
              <li>Ra quyết định kịp thời sau Nhật đảo chính Pháp (3/1945) với Chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta" — thể hiện bản lĩnh dự đoán và hành động nhanh nhạy.</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="sangtao"
          title="III. SỰ SÁNG TẠO"
          subtitle="Sáng tạo về đường lối, sách lược và phương pháp"
          icon={<FaLightbulb />}
        >
          <div className="space-y-4">
            <h4 className="font-bold">Các sáng tạo nổi bật</h4>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) để tập hợp rộng rãi mọi lực lượng yêu nước.</li>
              <li>Điều chỉnh chính sách ruộng đất (giảm tô, giảm tức; tịch thu tài sản địch và chia cho dân cày nghèo) để mở rộng liên minh dân tộc.</li>
              <li>Chuẩn bị lực lượng vũ trang và xây dựng căn cứ địa; thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944).</li>
              <li>Chớp thời cơ Tổng khởi nghĩa Tháng Tám 1945: quyết định kịp thời tại Hội nghị Tân Trào (14–15/8/1945) để giành chính quyền trước khi quân Đồng minh vào Đông Dương.</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="cq"
          title="TRẢ LỜI CÂU HỎI CHUYÊN ĐỀ (CQ)"
          subtitle="Bản lĩnh và sự sáng tạo của Đảng trong chuyển hướng chỉ đạo cách mạng 1939–1945"
          icon={<FaGraduationCap />}
        >
          <div className="space-y-4">
            <p className="font-semibold">Câu hỏi chuyên đề (CQ): Bản lĩnh và sự sáng tạo của Đảng Cộng sản Việt Nam được thể hiện như thế nào trong việc chuyển hướng chỉ đạo cách mạng giai đoạn 1939–1945?</p>

            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>
                <strong>Bản lĩnh chính trị (Tính độc lập, tự chủ và quyết đoán):</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Đảng kiên định giương cao ngọn cờ giải phóng dân tộc (Hội nghị Trung ương 8, 5/1941), khắc phục hạn chế khuynh hướng giai cấp trước đó.</li>
                  <li>Đặt lợi ích dân tộc lên trên hết và quyết đoán trong thay đổi sách lược (Chỉ thị Nhật–Pháp bắn nhau, 3/1945) để xác định đúng kẻ thù và chuẩn bị lực lượng cho Tổng khởi nghĩa.</li>
                </ul>
              </li>

              <li>
                <strong>Sự sáng tạo trong chiến lược và phương pháp (Tính linh hoạt):</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Sáng tạo trong xây dựng lực lượng: thành lập Mặt trận Việt Minh để thực hiện đại đoàn kết toàn dân tộc và mở rộng liên minh.</li>
                  <li>Sáng tạo trong phương pháp: kết hợp đấu tranh chính trị với đấu tranh vũ trang, khởi nghĩa từng phần tiến tới Tổng khởi nghĩa toàn quốc.</li>
                  <li>Sáng tạo trong chớp thời cơ: nhận định chính xác thời cơ (tháng 8/1945) và tiến hành Tổng khởi nghĩa kịp thời.</li>
                </ul>
              </li>

              <li>
                <strong>Kết luận:</strong> Thắng lợi của Cách mạng Tháng Tám 1945 là minh chứng rõ rệt cho khả năng lãnh đạo, bản lĩnh và sự sáng tạo của Đảng trong việc chuyển hướng chiến lược, phù hợp với điều kiện lịch sử ở Việt Nam.
              </li>
            </ol>
          </div>
        </Collapsible>

        {/* Nguồn tham khảo */}
        <section id="articles" className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl shadow-lg">
              <FaNewspaper />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Nguồn tham khảo
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Danh sách các tài liệu, bài báo và nguồn sử dụng trong chuyên đề:
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-indigo-800 pl-4">
            {ARTICLES.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-600"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="font-semibold">{item.title}</span>
                )}
                {item.sourceName && (
                  <span className="ml-2 text-sm text-gray-500">({item.sourceName})</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Conclusion */}
        {/* <section
          id="ketluan"
          className="relative text-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl font-bold mb-6">Kết luận</h2>

            <p className="max-w-4xl mx-auto text-lg leading-loose tracking-wide">
              Để xây dựng gia đình Việt Nam trong thời kỳ quá độ, cần kết hợp đồng bộ <b>điều kiện vật chất</b> với xây dựng <b>ý thức – đạo đức</b>,
              bảo đảm <b>bình đẳng giới</b>, và thiết kế cơ chế phối hợp
              <b> <span className="whitespace-nowrap">gia đình – xã hội – Nhà nước</span></b>.
              Vận dụng vào các vấn đề thực tiễn như kiểm soát công nghệ, bộ giải pháp
              “<span className="whitespace-nowrap">pháp luật – giáo dục – văn hoá số</span>”
              giúp chuyển hoá lý luận thành thay đổi hành vi cụ thể.
            </p>
          </div>
        </section> */}


      </main>

      <AnimatePresence>
        {articleModal && (
          <ArticleModal article={articleModal} onClose={() => setArticleModal(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroPage;