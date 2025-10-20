// src/components/GovernanceSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGavel, FaUsers } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";

const GovernanceSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-4 border-blue-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6 text-center"
        variants={itemVariants}
      >
        <FaGavel className="inline-block text-[#6e7fdc] mr-3" />
        Nhà nước pháp quyền xã hội chủ nghĩa
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-8 text-center max-w-3xl mx-auto"
        variants={itemVariants}
        transition={{ delay: 0.2 }}
      >
        Nhà nước của nhân dân, do nhân dân, vì nhân dân, quản lý xã hội bằng
        pháp luật.
      </motion.p>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={itemVariants}
        transition={{ staggerChildren: 0.3, delay: 0.4 }}
      >
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaScaleBalanced className="mr-3 text-2xl" /> Hiến pháp Tối thượng
          </div>
          <p className="text-gray-600 text-base">
            Mọi tổ chức và cá nhân đều phải tuân thủ Hiến pháp và pháp luật.
          </p>
        </motion.li>
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" /> Phân công & Phối hợp
          </div>
          <p className="text-gray-600 text-base">
            Quyền lực nhà nước thống nhất nhưng có sự phân công, phối hợp và
            kiểm soát giữa lập pháp, hành pháp và tư pháp.
          </p>
        </motion.li>
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" /> Bảo đảm Quyền Công dân
          </div>
          <p className="text-gray-600 text-base">
            Nhà nước có trách nhiệm bảo đảm và bảo vệ quyền con người, quyền
            công dân.
          </p>
        </motion.li>
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaScaleBalanced className="mr-3 text-2xl" /> Gắn dân chủ với kỷ
            cương
          </div>
          <p className="text-gray-600 text-base">
            Thực hiện dân chủ phải đi đôi với tuân thủ kỷ cương, pháp luật, tạo
            môi trường xã hội ổn định và phát triển.
          </p>
        </motion.li>
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" /> Phục vụ Phát triển
          </div>
          <p className="text-gray-600 text-base">
            Nhà nước phục vụ sự phát triển xã hội công bằng, dân chủ, văn minh.
          </p>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default GovernanceSection;
