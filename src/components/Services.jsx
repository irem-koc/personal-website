import React, { useContext } from "react";
import "./../styles/Services.css";
import { MouseContext } from "../context/mouse-context";
import Service from "./Service";
const Services = () => {
    const { setCursor } = useContext(MouseContext);
    const toggleCursor = () => {
        setCursor(({ active }) => ({ active: !active }));
    };
    return (
        <div className="services" id="services">
            <div className="services_inner">
                <div className="services-author-message">
                    <div className="services-wrapper">
                        <div className="let">- EXPERIENCES</div>
                        <div>
                            <h1 className="get-in">My Experiences</h1>
                        </div>
                    </div>
                    <div className="mail-section">
                        <a
                            onMouseEnter={toggleCursor}
                            onMouseLeave={toggleCursor}
                            className="services-mail"
                            href="mailto:kociremx@gmail.com"
                        >
                            kociremx@gmail.com
                        </a>
                    </div>
                </div>
                <div className="services-box">
                    <Service
                        header="Arçelik"
                        title="Associate Inventory Planner"
                        date="2023'May - ..."
                        description="Stok planlama ekibinde yer alıyorum. Burada data yönetişimi başlığı altında çeşitli raporların otomatikleştirilmesi ve optimizasyon projelerinde yer aldım. Python ve SQL ağırlıklı çalışmalarım oldu."
                    />
                    <Service
                        header="Borusan CAT"
                        title="Intern Process Mining"
                        date="2023'Apr - 2023'May"
                        description={
                            "Process mining departmanında Celonis üzerinde çalıştım. "
                        }
                    />
                    <Service
                        description={
                            "Fixing bug in websites, taking part in frontend side by using HTML, CSS, Javascript, C#, .NET, jQuery, Angular, SQL."
                        }
                        header="Ibtech"
                        title="Intern Frontend Developer"
                        date="2022'Oct - 2023'Apr"
                    />
                    <Service
                        header="Kromaş"
                        title="Intern"
                        date="2022'Jul"
                        description="I worked in the Integrated Management System & Quality Control departments. These were my responsibilities:
-Creating and rearranging checklists.
-Entering data into the DSM software system.
-Data visualization from the excel data.
-Learning and controlling production processes."
                    />
                    <Service
                        description={
                            "Çamaşır makinesi fabrikasında, geliştirme planlama departmanında, SAP kullanarak ürün ağaçlarının ve malzeme kodlarının oluşturulmasında görev aldım."
                        }
                        header="BSH Ev Aletleri"
                        title="Project Student"
                        date="2021'Nov - 2022'Feb"
                    />
                    <Service
                        description={
                            "Finansal anlamda fikir yürütmemi teşvik etti. Staj süresi, boyunca çeşitli makalelerle, videolarla bankacılık terminolojisi hakkında edindiğim bilgileri staj süresi sonunda yapılan online testte gösterdim ve sertifika kazandım."
                        }
                        header="QNB Finansbank"
                        title="Online Intern"
                        date="2021'Mar"
                    />
                    <Service
                        description={"Online training about finance sector"}
                        header="Denizbank"
                        title="Online Intern"
                        date="2020'Nov"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
