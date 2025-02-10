"use client";
import { motion } from "framer-motion";

export default function DarkModeTimeline() {
    const timelineData = [
        { year: "2024", title: "Pongal", color: "border-orange-400", icon: "🌾" }, // Harvest Festival
        { year: "2023", title: "Maha Shivaratri", color: "border-red-400", icon: "🕉️" }, // Lord Shiva
        { year: "2022", title: "Holi", color: "border-blue-400", icon: "🎨" }, // Festival of Colors
        { year: "2021", title: "Dusshera", color: "border-gray-400", icon: "🏹" }, // Victory of Good over Evil
        { year: "2020", title: "Diwali", color: "border-purple-400", icon: "🪔" }, // Festival of Lights
        { year: "2019", title: "Chhath Puja", color: "border-pink-400", icon: "🌞" }, // Sun God Worship
        { year: "2018", title: "Ganesh Chaturthi", color: "border-green-400", icon: "🐘" }, // Lord Ganesha
        { year: "2017", title: "Christmas", color: "border-yellow-400", icon: "🎄" }, // Jesus' Birth Celebration
      ];

  return (
    <div className="relative flex flex-col items-center w-full p-16 bg-gray-900 text-gray-200">
      {/* Extended Curvy Line with Icons Centered */}
      <svg className="absolute left-1/2 transform -translate-x-1/2 h-[3500px] w-56">
        <path
          d="M 50 0 
             C 100 175, 0 350, 50 525 
             C 100 700, 0 875, 50 1050 
             C 100 1225, 0 1400, 50 1575 
             C 100 1750, 0 1925, 50 2100 
             C 100 2275, 0 2450, 50 2625 
             C 100 2800, 0 2975, 50 3150 
             C 100 3325, 0 3500, 50 3675"
          stroke="gray"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex w-full max-w-3xl items-center my-40"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Icons EXACTLY on the Curvy Line */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full border-4 ${item.color} bg-gray-800 text-white text-2xl shadow-lg`}
            initial={{ y: -20, scale: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {item.icon}
          </motion.div>

          {/* Alternating Text Position */}
          {index % 2 === 0 ? (
            <>
              <motion.div
                className="w-1/2 text-right pr-40"
                initial={{ opacity: 0, rotateX: -20 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-100">{item.year}</h3>
                <h4 className="text-xl font-semibold text-orange-300">{item.title}</h4>
                <p className="text-gray-400">Lorem ipsum is simply dummy text of the printing industry.</p>
              </motion.div>
              <div className="w-1/2"></div>
            </>
          ) : (
            <>
              <div className="w-1/2"></div>
              <motion.div
                className="w-1/2 text-left pl-40"
                initial={{ opacity: 0, rotateX: 20 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-100">{item.year}</h3>
                <h4 className="text-xl font-semibold text-red-300">{item.title}</h4>
                <p className="text-gray-400">Lorem ipsum is simply dummy text of the printing industry.</p>
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}


