import React from "react";
import useInView from "../hooks/useInView";
import { FaDownload, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const ChapterCard = ({ chapter, openPdf, togglePdf, downloadPdf }) => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`mb-10 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col gap-4 p-8 border border-slate-300 rounded-lg shadow-xl bg-white hover:bg-gray-50 transition-all">
        <h2 className="text-lg font-bold uppercase text-slate-600">
          Capítulo {chapter.id}: <span className="font-semibold text-slate-900">{chapter.title}</span>
        </h2>

        <div className="flex flex-wrap gap-4 mt-2 w-full">
          {/* PROFESSOR */}
          <button
            onClick={() => togglePdf(chapter.id, "teacher")}
            className={`flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 rounded-lg justify-center border font-medium transition-all ${
              openPdf.id === chapter.id && openPdf.type === "teacher"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            <FaChalkboardTeacher />
            Material do Professor
          </button>

          <button
            onClick={() => downloadPdf(chapter.teacherPdf)}
            className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 rounded-lg border justify-center border-green-600 text-green-700 bg-white hover:bg-green-50 font-medium transition-all"
          >
            <FaDownload />
            Baixar PDF
          </button>

          {/* ESTUDANTE */}
          <button
            onClick={() => togglePdf(chapter.id, "student")}
            className={`flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 justify-center rounded-lg border font-medium transition-all ${
              openPdf.id === chapter.id && openPdf.type === "student"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            <FaUserGraduate />
            Material do Estudante
          </button>

          <button
            onClick={() => downloadPdf(chapter.studentPdf)}
            className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 justify-center rounded-lg border border-blue-600 text-blue-700 bg-white hover:bg-blue-50 font-medium transition-all"
          >
            <FaDownload />
            Baixar PDF
          </button>
        </div>
      </div>

      {openPdf.id === chapter.id && (
        <div className="mt-4 border p-4 rounded-lg bg-green-50 h-[80vh] flex justify-center">
          <embed
            src={
              openPdf.type === "teacher"
                ? chapter.teacherPdf
                : chapter.studentPdf
            }
            type="application/pdf"
            width="100%"
            height="100%"
            className="border rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ChapterCard;
