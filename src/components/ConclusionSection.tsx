// src/components/ConclusionSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const ConclusionSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-4 border-purple-200 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6"
        variants={itemVariants}
      >
        <FaLightbulb className="inline-block text-purple-600 mr-3" />
        Kết luận
      </motion.h2>
      <motion.ul
        className="space-y-4 text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto"
        variants={itemVariants}
        transition={{ staggerChildren: 0.3, delay: 0.2 }}
      >
        <motion.li variants={itemVariants}>
          Dân chủ là <span className="font-bold">mục tiêu</span>, Nhà nước pháp
          quyền là <span className="font-bold">phương tiện</span> để hiện thực
          hóa.
        </motion.li>
        <motion.li variants={itemVariants}>
          Đảng là nhân tố{" "}
          <span className="font-bold">bảo đảm định hướng đúng đắn</span> trên
          con đường phát triển.
        </motion.li>
        <motion.li variants={itemVariants}>
          Xây dựng xã hội công bằng, dân chủ, văn minh là{" "}
          <span className="font-bold">trách nhiệm chung</span> của toàn dân.
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default ConclusionSection;
