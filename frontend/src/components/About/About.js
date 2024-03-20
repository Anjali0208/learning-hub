import React from 'react'
import './About.css'
import institute from "../../images/institute.jpeg"
import hostels from "../../images/hostels.jpeg"
import classroom from "../../images/classroom.jpeg"
import library from "../../images/library.jpeg"
import audi from "../../images/audi.jpeg"


function About() {
    return (
        <>
            <header className='about'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${institute})`,
                    backgroundPosition: "center center",

                }}
            >
            </header>

            <div className='about_info'>
                <h3>THE INSTITUTE</h3>
                <p style={{ paddingTop: "30px" }}>
                    Banarsidas Chandiwala Institute of Information Technology (BCIIT) was established in 1999 to
                    run Master of Computer Application (MCA) programme. The Institute is affiliated with
                    Guru Gobind Singh Indraprastha University, Delhi for awarding the degree and is approved by
                    the All India Council of Technical Education (AICTE), Ministry of HRD, Government of India.
                    The Institute is established under the aegis of Sri Banarsidas Chandiwala Sewa Smarak Trust
                    Society, a charitable Society working in the field of health and education since 1952.
                </p>
            </div>

            <div className='about_info'>
                <h3 style={{ marginTop: "60px" }}>HOSTEL</h3>

                <div style={{ display: "flex" }}>
                    <img src={hostels} alt='hostel' style={{ margin: "20px", width: '20%' }} />
                    <p style={{ paddingTop: "30px" }}>
                        After studies students find comfortable place to rest and prepare for
                        challenges of the next day. On campus hostel with well furnished and
                        ventilated rooms along with amenities, is provided for boys and girls
                        separately.
                    </p>
                </div>
            </div>
            <div className='about_info'>
                <h3>CLASSROOM</h3>
                <div style={{ display: "flex" }}>
                    <img src={classroom} alt='hostel' style={{ margin: "20px", width: '20%' }} />
                    <p style={{ paddingTop: "30px" }}>
                        Banarsidas Chandiwala Institute of Information Technology (BCIIT) was established in 1999 to
                        run Master of Computer Application (MCA) programme. The Institute is affiliated with
                        Guru Gobind Singh Indraprastha University, Delhi for awarding the degree and is approved by
                        the All India Council of Technical Education (AICTE), Ministry of HRD, Government of India.
                        The Institute is established under the aegis of Sri Banarsidas Chandiwala Sewa Smarak Trust
                        Society, a charitable Society working in the field of health and education since 1952.
                    </p>
                </div>
            </div>
            <div className='about_info'>
                <h3>LIBRARY</h3>

                <div style={{ display: "flex" }}>
                    <img src={library} alt='hostel' style={{ margin: "20px", width: '20%' }} />
                    <p style={{ paddingTop: "30px" }}>
                        Banarsidas Chandiwala Institute of Information Technology (BCIIT) was established in 1999 to
                        run Master of Computer Application (MCA) programme. The Institute is affiliated with
                        Guru Gobind Singh Indraprastha University, Delhi for awarding the degree and is approved by
                        the All India Council of Technical Education (AICTE), Ministry of HRD, Government of India.
                        The Institute is established under the aegis of Sri Banarsidas Chandiwala Sewa Smarak Trust
                        Society, a charitable Society working in the field of health and education since 1952.
                    </p>
                </div>
            </div>
            <div className='about_info'>
                <h3>AUDITORIUM</h3>

                <div style={{ display: "flex" }}>
                    <img src={audi} alt='hostel' style={{ margin: "20px", width: '20%' }} />
                    <p style={{ paddingTop: "30px" }}>
                        BCIIT’s state-of-the-art auditorium with a seating capacity of 250 people is equipped
                        with the latest audio-visual equipment in a centrally air-conditioned environment.
                        The auditorium is used round the year for hosting intra and inter-college events like
                        seminars, conference and debates and cultural activities. It is a most happening place
                        where socio-technical interaction occurs between the students, faculty and experts from
                        industry and academia.
                    </p>
                </div>
            </div>

        </>
    )
}

export default About

