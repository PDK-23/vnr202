import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// ===== ICONS =====
import {
  FaQuoteLeft,
  FaScaleBalanced,
  FaChartLine,
  FaLightbulb,
  FaChevronDown,
  FaUpRightFromSquare,
  FaXmark,
  FaNewspaper,
  FaArrowUp,
  FaUsers,
  FaHeart,
  FaHandshake,
  FaGraduationCap,
  FaHandBackFist,
  FaShareNodes,
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
    id: "a1",
    title: "Hơn 2,2 triệu người ly hôn/ly thân: tỉnh thành nào cao nhất?",
    sourceName: "Người Lao Động",
    href: "https://nld.com.vn/hon-22-trieu-nguoi-ly-hon-ly-than-tinh-thanh-nao-cao-nhat-196250301165652065.htm",
    cover: "https://nld.mediacdn.vn/zoom/320_200/291774122806476800/2025/3/1/tay-nam-tay-cua-mot-ban-nam-va-ban-nu-dang-yeu-nhau-ho-dat-tay-nhau-di-nguoi-chau-a-17408226856441621386085-95-97-624-943-crop-17408226975121424645101.png",
    tags: ["Ly hôn", "Đô thị", "25–35"],
    summary: "Bài viết điểm hiện trạng ly hôn tăng ở nhóm dân cư trẻ tại các đô thị lớn; gợi mở các nguyên nhân & hệ quả xã hội.",
  },
  {
    id: "a2",
    title: "Các nhóm bạo lực gia đình & nguyên nhân",
    sourceName: "Hội Liên hiệp Phụ nữ Việt Nam",
    href: "https://vwu.vn/web/guest/tin-chi-tiet/-/chi-tiet/cac-nhom-bao-luc-gia-%C4%91inh-nguyen-nhan-49367-7.html",
    cover: "https://vwu.vn/documents/20182/4186676/15_Aug_2022_072514_GMTblgd_nguyennhan.jpg/77bd4a0a-9175-43f8-ac14-f89deadbd463",
    tags: ["Bạo lực", "Tinh thần", "Kinh tế"],
    summary: "Nhận diện dạng bạo lực tinh thần, kiểm soát trên mạng xã hội, và bạo lực kinh tế trong đời sống gia đình.",
  },
  {
    id: "a3",
    title: "Áp lực kinh tế & chi phí y tế của già hoá dân số",
    sourceName: "Báo Đầu tư",
    href: "https://baodautu.vn/ap-luc-kinh-te-va-chi-phi-y-te-cua-gia-hoa-dan-so-d202825.html",
    cover: "https://dansohcm.gov.vn/wp-content/uploads/2023/10/IMG_2892.jpeg",
    tags: ["Phúc lợi", "Người cao tuổi", "Chi phí"],
    summary: "Phân tích áp lực kinh tế – y tế trong bối cảnh già hoá dân số, liên hệ tới chất lượng thời gian gia đình.",
  },
  {
    id: "a3-1",
    title: "Thực trạng và giải pháp chăm sóc người cao tuổi ở Việt Nam hiện nay",
    sourceName: "VHU",
    href: "https://vhu.edu.vn/Resources/Docs/SubDomain/xhtt/2021/Th%E1%BB%B1c%20tr%E1%BA%A1ng%20v%C3%A0%20gi%E1%BA%A3i%20ph%C3%A1p%20ch%C4%83m%20s%C3%B3c%20ng%C6%B0%E1%BB%9Di%20cao%20tu%E1%BB%95i%20%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20hi%E1%BB%87n%20nay.pdf",
    cover: "https://javilink.com.vn/wp-content/uploads/2023/05/thuc-trang-hien-nay-cua-nguoi-cao-tuoi.jpg",
    tags: ["Chăm sóc", "Người cao tuổi"],
    summary: "Chương trình chăm sóc sức khỏe người cao tuổi đến năm 2030 đặt mục tiêu: 100% người cao tuổi được khám sức khỏe định kỳ, 50% xã phường có mô hình chăm sóc ban ngày.",
  },
  {
    id: "a4",
    title: "Thanh thiếu niên & mạng xã hội: rủi ro và định hướng",
    sourceName: "Tài liệu học thuật, báo chí",
    href: "https://scholar.dlu.edu.vn/thuvienso/bitstream/DLU123456789/209913/1/CVv39S212023087.pdf",
    cover: "https://tamly.com.vn/wp-content/uploads/2022/01/mang-xa-hoi-anh-huong-den-tam-ly-3.jpg",
    tags: ["Mạng xã hội", "Giá trị", "Thanh niên"],
    summary: "Tổng hợp góc nhìn về ảnh hưởng của mạng xã hội đến nhận thức, chuẩn mực và hành vi của giới trẻ.",
  },
  {
    id: "a4-1",
    title: "Làn sóng đen trên mạng xã hội: nguy cơ khó lường và giải pháp ngăn chặn",
    sourceName: "Báo Dân tộc",
    href: "https://baodantoc.vn/lan-song-den-tren-mang-xa-hoi-nguy-co-kho-luong-va-giai-phap-ngan-chan-1740716792922.htm",
    cover: "https://images.baodantoc.vn/uploads/2025/Thang-2/Ngay-28/Bang-Ngan/nhung-tac-hai-cua-mang-xa-hoi-khi-su-dung-sai-cach-ban-nen1.jpg",
    tags: ["Mạng xã hội", "Rủi ro"],
    summary: "Việt Nam có 76.95 triệu người dùng mạng xã hội (chiếm 78.1% dân số). Hơn 60% thanh thiếu niên từng tiếp xúc với nội dung không lành mạnh trên mạng xã hội.",
  },
  {
    id: "a4-2",
    title: "Thanh niên thế hệ Z trước sự phát triển của mạng xã hội ở Việt Nam hiện nay",
    sourceName: "Thanh niên Việt",
    href: "https://thanhnienviet.vn/thanh-nien-the-he-z-truoc-su-phat-trien-cua-mang-xa-hoi-o-viet-nam-hien-nay-209241001111330009.htm",
    cover: "https://thanhnienviet.mediacdn.vn/zoom/700_438/91575133199802368/2024/10/1/phat-huy-y-thuc-trach-nhiem-cua-1727755925951241130105-72-0-597-840-crop-1727755937310264382910.jpg",
    tags: ["Mạng xã hội", "Thanh niên"],
    summary: "Mạng xã hội ảnh hưởng đến nhận thức xã hội qua niềm tin, thái độ cộng đồng và kiến thức người dùng.",
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


const QuickNav: React.FC = () => {
  const items = [
    { href: "#coso", label: "Cơ sở lý luận" },
    { href: "#thuctien", label: "Thực tiễn VN" },
    { href: "#giaiphap", label: "Giải pháp" },
    { href: "#articles", label: "Thư viện" },
    { href: "#ketluan", label: "Kết luận" },
  ];
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-4 z-40 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-100 p-3 flex flex-wrap items-center gap-2 justify-center">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 transition-all hover:shadow-md"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl hover:shadow-indigo-500/50 hover:scale-110 transition-all"
          aria-label="Lên đầu trang"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </>
  );
};

type CiteLink = { href: string; label: string };

const toneStyles = {
  red: { ring: "ring-red-100", badge: "bg-red-600/10 text-red-700", icon: "text-red-700" },
  orange: { ring: "ring-orange-100", badge: "bg-orange-600/10 text-orange-700", icon: "text-orange-700" },
  blue: { ring: "ring-blue-100", badge: "bg-blue-600/10 text-blue-700", icon: "text-blue-700" },
  purple: { ring: "ring-purple-100", badge: "bg-purple-600/10 text-purple-700", icon: "text-purple-700" },
};

const LinkOut: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-indigo-300 hover:decoration-indigo-600 font-semibold text-indigo-600 hover:text-indigo-800 transition-all"
  >
    {children}
    <FaUpRightFromSquare className="text-xs" />
  </a>
);


const CiteBox: React.FC<{ tone: keyof typeof toneStyles; links: CiteLink[] }> = ({ tone, links }) => {
  const c = toneStyles[tone];
  return (
    <div className={`mt-3 rounded-xl bg-white p-4 md:p-5 ring-1 ring-inset ${c.ring} shadow-sm`}>
      <div className="flex items-center gap-2">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${c.badge} ring-1 ring-inset ${c.ring}`}>
          <FaNewspaper className="text-base" />
        </span>
        <p className="text-[14px] md:text-base font-semibold text-slate-800">Nguồn tham khảo</p>
      </div>

      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href} className="group flex items-start gap-3">
            <FaUpRightFromSquare className={`mt-1 shrink-0 ${c.icon}`} />
            <div>
              <LinkOut href={l.href}>{l.label}</LinkOut>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


// ====== MAIN PAGE COMPONENT ======
const IntroPage: React.FC = () => {
  const [articleModal, setArticleModal] = React.useState<ArticleItem | null>(null);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
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

      <div className="pt-4">
        <QuickNav />
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
            <FaUsers /> Nghiên cứu triết học Mác – Lênin
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6 pb-3"
          >
            Gia đình Việt Nam<br />trong thời kỳ quá độ
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Từ quan điểm duy vật lịch sử, khám phá vai trò then chốt của gia đình
            trong xây dựng con người mới và xã hội CNXH
          </motion.p>
        </motion.div>
      </header>

      {/* Key Principles Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: FaScaleBalanced, title: "Vật chất – Ý thức", desc: "Kết hợp điều kiện vật chất và giá trị văn hoá – đạo đức", delay: 0.4, colors: "from-blue-500 to-indigo-600", border: "border-indigo-100" },
            { icon: FaHeart, title: "Bình đẳng – Hạnh phúc", desc: "Bảo đảm quyền con người và bình đẳng giới trong gia đình", delay: 0.5, colors: "from-purple-500 to-pink-600", border: "border-purple-100" },
            { icon: FaHandshake, title: "Phối hợp – Liên kết", desc: "Gia đình – Xã hội – Nhà nước cùng trách nhiệm", delay: 0.6, colors: "from-pink-500 to-rose-600", border: "border-pink-100" },
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
              "Gia đình là tế bào của xã hội; là môi trường đầu tiên hình thành phẩm chất, đạo đức và năng lực công dân; là cầu nối giữa điều kiện vật chất và ý thức – văn hóa trong xã hội mới."
            </p>
            <p className="text-indigo-100 italic">
              — Dựa trên Giáo trình MLN131, mục 1.2; Ăngghen về vai trò sản xuất – tái sản xuất; tư tưởng Hồ Chí Minh về gia đình.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        <Collapsible
          idAnchor="coso"
          title="Cơ sở lý luận triết học"
          subtitle="Các nguyên lý nền tảng theo quan điểm Mác – Lênin"
          icon={<FaScaleBalanced />}
          defaultOpen
        >
          <div className="bg-green-600"></div>
          <div className="bg-pink-600"></div>
          <div className="space-y-6">
            {[
              { title: "Quan hệ vật chất – ý thức", items: ["<b>Nền tảng vật chất</b> (điều kiện lao động, thu nhập,...) quy định khả năng khách quan.", "<b>Ý thức xã hội</b> (giá trị, chuẩn mực,...) định hướng hành vi, tạo đồng thuận.", "<b>Tính thống nhất biện chứng:</b> vật chất là điều kiện cần; ý thức – đạo đức là điều kiện đủ."], color: "indigo" },
              { title: "Con người – xã hội: môi trường xã hội hóa", items: ["<b>Chức năng gia đình:</b> tái sản xuất, giáo dục, kinh tế, văn hoá, chăm sóc.", "<b>Con người</b> là chủ thể, mục tiêu & động lực; gia đình nuôi dưỡng năng lực chủ thể."], color: "green" },
              { title: "Sự phát triển biện chứng của gia đình", items: ["Cấu trúc & vai trò gia đình biến đổi theo trình độ lực lượng sản xuất.", "Gia đình Việt Nam tiếp thu giá trị hiện đại đồng thời kế thừa bản sắc dân tộc."], color: "pink" },
            ].map((section, index) => (
              <div key={section.title} className={`bg-gradient-to-r from-${section.color}-50 to-gray-50 rounded-2xl p-6 border-l-4 border-${section.color}-600`}>
                <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                  <span className={`w-8 h-8 rounded-lg bg-${section.color}-600 text-white flex items-center justify-center text-sm font-bold`}>{index + 1}</span>
                  {section.title}
                </h4>
                <ul className="space-y-3 text-gray-700">
                  {section.items.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className={`text-${section.color}-600 mt-1`}>•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="thuctien"
          title="Thực tiễn Việt Nam hiện nay"
          subtitle="Những vấn đề nổi bật và thách thức đương đại"
          icon={<FaChartLine />}>
          <div className="space-y-6">
            <div className="rounded-2xl bg-red-50 border border-red-100 shadow-sm p-6 md:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/10 text-red-700 ring-1 ring-inset ring-red-600/20">
                  <FaUsers className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-red-800">
                    Ly hôn gia tăng
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-red-700 ring-1 ring-red-200">
                      40–44 tuổi
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-red-700 ring-1 ring-red-200">
                      ~60% ly hôn trong 1 - 5 năm
                    </span>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-gray-800">
                    <li>Độ tuổi người Việt ly hôn cao nhất là 40-44.</li>
                    <li>Nghiên cứu Viện Nghiên cứu Gia đình & Giới: ~60% vụ ly hôn sau 1 - 5 năm chung sống.</li>
                    <li>Nguyên nhân chính: xung đột vai trò giữa công việc – thu nhập – chăm sóc con nhỏ.</li>
                  </ul>

                  <CiteBox
                    tone="red"
                    links={[
                      {
                        href: "https://nld.com.vn/hon-22-trieu-nguoi-ly-hon-ly-than-tinh-thanh-nao-cao-nhat-196250301165652065.htm",
                        label: "Hơn 2,2 triệu người ly hôn/ly thân: tỉnh thành nào cao nhất?",
                      },
                      {
                        href: "https://tuoitre.vn/ly-hon-xanh-ao-at-vi-dau-20240802231610047.htm?gidzl=3qY8HHMXGaSEK8z56BPAH0jQWqW6uHaPGmVTJGRXH1f0N8mOLB5471PUZH4Dk10H7mFU46CZt_mr7g5DGW",
                        label: "'Ly hôn xanh' ào ạt, vì đâu?",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50 border border-orange-100 shadow-sm p-6 md:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10 text-orange-700 ring-1 ring-inset ring-orange-600/20">
                  <FaHandBackFist className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-orange-800">
                    Bạo lực gia đình chuyển dạng
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-orange-700 ring-1 ring-orange-200">
                      30.000 vụ mỗi năm
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-orange-700 ring-1 ring-orange-200">
                      Nhận diện “bạo lực kinh tế”
                    </span>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-gray-800">
                    <li>Không chỉ thể chất mà còn tinh thần, kiểm soát trên mạng xã hội, bạo lực kinh tế.</li>
                    <li>Theo thống kê từ Bộ Văn hóa, Thể thao và Du lịch (VH,TT&DL), Việt Nam vẫn ghi nhận hơn 30.000 vụ bạo lực gia đình mỗi năm.</li>
                    <li>“Bạo lực kinh tế”: kiểm soát thu nhập, cấm đoán chi tiêu… (Hội LHPN Việt Nam).</li>
                  </ul>

                  <CiteBox
                    tone="orange"
                    links={[
                      {
                        href: "https://baophapluat.vn/bao-luc-gia-dinh-thoi-so-hoa-thach-thuc-moi-giai-phap-moi.html",
                        label: "Bạo lực gia đình thời số hóa: Thách thức mới - Giải pháp mới",
                      },
                      {
                        href: "https://vwu.vn/web/guest/tin-chi-tiet/-/chi-tiet/cac-nhom-bao-luc-gia-%C4%91inh-nguyen-nhan-49367-7.html",
                        label: "Các nhóm bạo lực gia đình & nguyên nhân (Hội LHPN Việt Nam)",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-100 shadow-sm p-6 md:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 ring-1 ring-inset ring-blue-600/20">
                  <FaGraduationCap className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-blue-800">
                    Áp lực kinh tế – nhà ở – dịch vụ chăm sóc
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                      Chi phí NCT 7–10×
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                      Tầng lớp “sandwich”
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                      Mục tiêu 2030: 100% khám định kỳ
                    </span>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-gray-800">
                    <li>Áp lực kinh tế, nhà ở, dịch vụ chăm sóc làm giảm chất lượng thời gian gia đình.</li>
                    <li>Chi phí y tế & chăm sóc người cao tuổi cao gấp 7–10 lần so với người trẻ (báo Đầu tư).</li>
                    <li>“Sandwich”: vừa nuôi con nhỏ, vừa chăm cha mẹ già → gánh nặng thời gian – tài chính.</li>
                    <li>Chương trình 2030: 100% NCT khám sức khỏe định kỳ; 50% xã/phường có mô hình chăm sóc ban ngày.</li>
                  </ul>

                  <CiteBox
                    tone="blue"
                    links={[
                      {
                        href: "https://baodautu.vn/ap-luc-kinh-te-va-chi-phi-y-te-cua-gia-hoa-dan-so-d202825.html",
                        label: "Áp lực kinh tế & chi phí y tế của già hoá dân số (Báo Đầu tư)",
                      },
                      {
                        href: "https://vhu.edu.vn/Resources/Docs/SubDomain/xhtt/2021/Th%E1%BB%B1c%20tr%E1%BA%A1ng%20v%C3%A0%20gi%E1%BA%A3i%20ph%C3%A1p%20ch%C4%83m%20s%C3%B3c%20ng%C6%B0%E1%BB%9Di%20cao%20tu%E1%BB%95i%20%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20hi%E1%BB%87n%20nay.pdf",
                        label: "Thực trạng & giải pháp chăm sóc người cao tuổi ở Việt Nam (PDF)",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-purple-50 border border-purple-100 shadow-sm p-6 md:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 text-purple-700 ring-1 ring-inset ring-purple-600/20">
                  <FaShareNodes className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-purple-800">
                    Ảnh hưởng mạng xã hội
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-purple-700 ring-1 ring-purple-200">
                      76,95 triệu người dùng (~78,1%)
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-2 md:px-3 py-0.5 text-xs md:text-sm font-medium text-purple-700 ring-1 ring-purple-200">
                      &gt;60% TTN gặp nội dung không lành mạnh
                    </span>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-gray-800">
                    <li>Lan truyền chuẩn mực tiêu dùng & hình ảnh “chuẩn hóa” → so sánh bất lợi, khủng hoảng giá trị ở một bộ phận thanh thiếu niên.</li>
                    <li>Tác động đến nhận thức xã hội qua 3 kênh: niềm tin – thái độ cộng đồng – kiến thức.</li>
                  </ul>

                  <CiteBox
                    tone="purple"
                    links={[
                      {
                        href: "https://scholar.dlu.edu.vn/thuvienso/bitstream/DLU123456789/209913/1/CVv39S212023087.pdf",
                        label: "Ảnh hưởng của mạng xã hội đến nhận thức xã hội (tài liệu học thuật)",
                      },
                      {
                        href: "https://baodantoc.vn/lan-song-den-tren-mang-xa-hoi-nguy-co-kho-luong-va-giai-phap-ngan-chan-1740716792922.htm",
                        label: "“Làn sóng đen” trên mạng xã hội: nguy cơ & giải pháp",
                      },
                      {
                        href: "https://thanhnienviet.vn/thanh-nien-the-he-z-truoc-su-phat-trien-cua-mang-xa-hoi-o-viet-nam-hien-nay-209241001111330009.htm",
                        label: "Thế hệ Z & mạng xã hội ở Việt Nam hiện nay",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="giaiphap"
          title="Giải pháp triết học"
          subtitle="Định hướng chính sách và hành vi từ tư duy biện chứng"
          icon={<FaLightbulb />}
        >
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-600">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                <FaGraduationCap className="text-green-600 text-xl" />
                Tư duy biện chứng về nguyên nhân – điều kiện – giải pháp
              </h4>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><b>Nguyên nhân gốc:</b>  Mâu thuẫn giữa kỳ vọng vai trò (giới, kinh tế, cảm xúc) với điều kiện vật chất – thể chế chưa tương thích; hiểu biết pháp luật – bình đẳng giới còn hạn chế.
                </li>
                <li><b>Điều kiện bảo đảm:</b> Hoàn thiện pháp luật và dịch vụ công (tư vấn, bảo vệ khẩn cấp); nâng cao dân trí số và đạo đức số; củng cố phong trào “gia đình văn hóa”.
                </li>
                <li><b>Giải pháp tổng hợp:</b> Kết hợp vật chất (an sinh, dịch vụ chăm sóc, nhà ở) với tinh thần (giá trị, pháp luật, văn hóa) để giải quyết đồng bộ.
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-600">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                <FaHeart className="text-pink-600 text-xl" />
                Bình đẳng giới – hạnh phúc gia đình
              </h4>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><b>Tái phân công</b> lao động gia đình theo nguyên tắc công bằng; ghi nhận công việc chăm sóc như một đóng góp kinh tế – xã hội.</li>
                <li><b>Giáo dục kỹ năng giao tiếp bất bạo lực</b>, quản trị cảm xúc, thỏa thuận tài chính minh bạch.</li>
                <li><b>Phát triển các lớp “làm cha tích cực”</b> , nhấn mạnh trách nhiệm, kỷ luật, nêu gương.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-600">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                <FaHandshake className="text-indigo-600 text-xl" />
                Gia đình – xã hội – Nhà nước: cơ chế phối hợp
              </h4>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><b>Nhà nước:</b>  Pháp luật phòng, chống bạo lực gia đình; chính sách thai sản, dịch vụ trông trẻ; tư vấn hôn nhân – gia đình; bảo vệ dữ liệu cá nhân.</li>
                <li><b>Xã hội:</b> Trường học, đoàn thể, tôn giáo, truyền thông kiến tạo môi trường văn hóa số lành mạnh.</li>
                <li><b>Gia đình:</b> Xây dựng quy ước “5 tôn trọng” (pháp luật, quyền riêng tư, thời gian chung, ngôn từ giao tiếp, thỏa thuận tài chính), thực hành “3 không” (không bạo lực, không định kiến giới, không im lặng).</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-600">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                <FaHandBackFist className="text-indigo-600 text-xl" />
                Liên hệ với ví dụ cụ thể (Kiểm soát công nghệ)
              </h4>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Thiết lập quy tắc gia đình về quyền riêng tư số và thời gian không thiết bị; dùng công cụ kiểm soát của chính mỗi người (giới hạn thời gian, không bắt buộc chia sẻ mật khẩu).</li>
                <li>Kênh trợ giúp: điểm tư vấn cộng đồng, tổ hòa giải; khi có nguy cơ bạo lực, áp dụng lệnh bảo vệ khẩn cấp.</li>
                <li>Chỉ số đánh giá: giảm tần suất yêu cầu mật khẩu/kiểm tra điện thoại; tăng số cặp đôi ký cam kết “an toàn số”.</li>
              </ul>
            </div>
          </div>
        </Collapsible>

        {/* Articles Library */}
        <section id="articles" className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl shadow-lg">
              <FaNewspaper />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Thư viện bài báo & Nguồn tham khảo
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Nhấn vào từng bài để xem tóm tắt và truy cập nguồn gốc
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map(article => (
              <motion.button
                key={article.id}
                onClick={() => setArticleModal(article)}
                className="text-left bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <img src={article.cover} alt={article.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 leading-tight mb-2">{article.title}</h4>
                  <p className="text-xs text-indigo-600 font-semibold">{article.sourceName}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section
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
        </section>


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