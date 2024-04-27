// import './App.css';

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Course1 from "./components/Course/Course1";
import Course2 from "./components/Course/Course2";
// import Exam from "./components/Exam/Exam";
import DS from "./components/Course/First_Sem/DS/DS";
import NotesDS from "./components/Course/First_Sem/DS/NotesDS";
import QPDS from "./components/Course/First_Sem/DS/QPDS";
import DBMS from "./components/Course/First_Sem/DBMS/DBMS";
import DBMSNotes from "./components/Course/First_Sem/DBMS/DBMSNotes";
import DBMSQP from "./components/Course/First_Sem/DBMS/DBMSQP";
import DBMSLab from "./components/Course/First_Sem/DBMS/DBMSLab";
import JAVA from "./components/Course/First_Sem/JAVA/JAVA";
import JAVANotes from "./components/Course/First_Sem/JAVA/JAVANotes";
import JAVAQP from "./components/Course/First_Sem/JAVA/JAVAQP";
import JLab from "./components/Course/First_Sem/JAVA/JLab";
import CN from "./components/Course/First_Sem/CN/CN";
import CNNotes from "./components/Course/First_Sem/CN/CNNotes";
import CNLab from "./components/Course/First_Sem/CN/CNLab";
import CNQP from "./components/Course/First_Sem/CN/CNQP";
import OS from "./components/Course/First_Sem/OS/OS";
import OSLab from "./components/Course/First_Sem/OS/OSLab";
import OSNotes from "./components/Course/First_Sem/OS/OSNotes";
import OSQP from "./components/Course/First_Sem/OS/OSQP";
import Design from "./components/Course/Third_Sem/Design/Design";
import NotesDesign from "./components/Course/Third_Sem/Design/NotesDesign";
import QPDesign from "./components/Course/Third_Sem/Design/QPDesign";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Chatting from "./components/Chatting/Chatting";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/course_mca_first" element={<Course1 />} />
        <Route path="/course_mca_second" element={<Course2 />} />
        {/* <Route path='/exam' element={<Exam />} /> */}

        {/* First Year */}
        <Route path="/ds" element={<DS />} />
        <Route path="/notes_ds" element={<NotesDS />} />
        <Route path="/ds_qp" element={<QPDS />} />

        <Route path="/dbms" element={<DBMS />} />
        <Route path="/notes_dbms" element={<DBMSNotes />} />
        <Route path="/dbms_qp" element={<DBMSQP />} />
        <Route path="/dbms_lab" element={<DBMSLab />} />

        <Route path="/java" element={<JAVA />} />
        <Route path="/notes_java" element={<JAVANotes />} />
        <Route path="/java_qp" element={<JAVAQP />} />
        <Route path="/java_lab" element={<JLab />} />

        <Route path="/cn" element={<CN />} />
        <Route path="/notes_cn" element={<CNNotes />} />
        <Route path="/cn_qp" element={<CNQP />} />
        <Route path="/cn_lab" element={<CNLab />} />

        <Route path="/os" element={<OS />} />
        <Route path="/notes_os" element={<OSNotes />} />
        <Route path="/oscn_qp" element={<OSQP />} />
        <Route path="/os_lab" element={<OSLab />} />

        {/* Second Year */}
        <Route path="/design" element={<Design />} />
        <Route path="/notes_design" element={<NotesDesign />} />
        <Route path="/design_qp" element={<QPDesign />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
