/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt"],
      },
      colors: {
        midnight: "#D1AE93",
        // สีเฮดและฟุตเตอ
        bb: "#4C241D",
        // สีหัวข้อและตัวหนังสือ
        card: "#E8DBC9",
        // หน้าล้อคอินและรีจิสเตอร์
        background: "#F6F3EE",
        //ปุ่ม
        button: "#E69735",
        //สีปุ่มเขียวเข้าสู่ระบบ
        regis: "#2D740C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
