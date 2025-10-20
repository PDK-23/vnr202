import React from "react";
import { motion } from "framer-motion";
import { Scale, Users, Gavel, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: <Scale className="w-10 h-10 text-blue-600 mb-2" />,
    title: "Thượng tôn pháp luật",
    desc: "Mọi tổ chức, cá nhân đều bình đẳng trước pháp luật. Pháp luật là tối thượng trong quản lý xã hội.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-600 mb-2" />,
    title: "Quyền lực thuộc về nhân dân",
    desc: "Nhân dân là chủ thể tối cao của quyền lực nhà nước, thực hiện quyền lực thông qua các cơ quan dân cử và hình thức dân chủ trực tiếp.",
  },
  {
    icon: <Gavel className="w-10 h-10 text-yellow-600 mb-2" />,
    title: "Phân công, kiểm soát quyền lực",
    desc: "Quyền lực nhà nước được phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-2" />,
    title: "Bảo đảm quyền con người, quyền công dân",
    desc: "Nhà nước pháp quyền XHCN bảo vệ và thúc đẩy quyền con người, quyền công dân, tạo điều kiện phát triển toàn diện cho mọi người.",
  },
];

const PrincipleSection: React.FC = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center py-16 px-4 bg-white/80 backdrop-blur-md">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Nguyên lý cơ bản của Nhà nước pháp quyền XHCN và Dân chủ XHCN
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {p.icon}
            <div className="text-xl font-semibold text-blue-700 mb-2 text-center">
              {p.title}
            </div>
            <div className="text-base text-gray-700 text-center leading-relaxed">
              {p.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrincipleSection;
