import { useEffect, useMemo, useState } from "react";
import "./App.css";
import headerImage from "./assets/header.jpg";
import logo from "./assets/logo.svg";
import arrow from "./assets/arrow.svg";
import infoIcon from "./assets/info.svg";
import saudiLogo from "./assets/sudia_logo_small.svg";
import riyalIcon from "./assets/reyal.svg";
import downLogoFooter from "./assets/downlogofooter.svg";

function DatePair({ hijriDate, gregDate, dir = "rtl" }) {
  return (
    <span className={`dates-row ${dir === "ltr" ? "dates-row-ltr" : ""}`}>
      <span className="date-chip">
        {/* الحرف أولاً */}
        <span className="date-chip-era">هـ</span>
        <span className="date-chip-value">{hijriDate}</span>
      </span>
      <span className="date-chip">
        {/* الحرف أولاً */}
        <span className="date-chip-era">م</span>
        <span className="date-chip-value">{gregDate}</span>
      </span>
    </span>
  );
}

function ZoomButtonLabel({ zoomed }) {
  return (
    <span className="zoom-btn-text" aria-label={zoomed ? "A-" : "A+"}>
      <span className="zoom-btn-letter">A</span>
      <span className={zoomed ? "zoom-sign zoom-minus" : "zoom-sign zoom-plus"}>
        {zoomed ? "-" : "+"}
      </span>
    </span>
  );
}

function App() {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const businessLink = isEnglish
    ? "https://business.sa/?culture=en"
    : "https://business.sa/?culture=ar";

  const t = useMemo(() => {
    if (isEnglish) {
      return {
        dir: "ltr",
        pageTitle: "Commercial Registration Data",
        browserTitle: "Saudi Competitiveness & Business Center",
        businessPlatform: "Business Platform",
        languageBtn: "ع",
        zoomBtn: isZoomed ? "A-" : "A+",
        menuTitle: "Menu",
        notice:
          "The Saudi Competitiveness & Business Center is not responsible for any missing or inconsistent data. Information is retrieved through full integration with the relevant entities.",
        companyName: <>Milad Al Ebdaa Contracting Company</>,
        active: "Active",
        entityType: "Entity Type",
        entityTypeValue: "Company",
        companyType: "Company Type",
        companyTypeValue: "Limited Liability Company",
        registrationType: "Registration Type",
        registrationTypeValue: "Main CR",
        unifiedNumber: "Unified National Number",
        crNumber: "Commercial Registration No.",
        crIssueDate: "CR Registration Date",
        annualConfirmation: "Annual Confirmation Date",
        businessAddress: "Approved Business Address",
        crCopyNumber: "CR Copy Number",
        capital: "Total Capital",
        contactTitle: "Contact Information",
        mobile: "Mobile Number",
        email: "Email",
        website: "Website",
        activitiesTitle: "Commercial Registration Activities",
        moreActivities: "+ 24 more activities",
        managersTitle: "Managers List",
        footerText:
          "Developed by the Saudi Data & Artificial Intelligence Authority",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        faq: "FAQ",
        rights:
          "All rights reserved to the Saudi Competitiveness & Business Center 2026",
        version: "Version 1.1.9",
        address:
          "Riyadh, Al Malaz District, Prince Mansour bin Abdulaziz Street",
        visibleActivities: [
          "General construction of residential buildings 410010",
          "General construction of government buildings 410023",
          "Construction of prefabricated buildings on sites 410030",
          "Restoration of residential and non-residential buildings 410040",
        ],
        allActivities: [
          "General construction of residential buildings 410010",
          "General construction of government buildings 410023",
          "Construction of prefabricated buildings on sites 410030",
          "Restoration of residential and non-residential buildings 410040",
          "Site preparation, excavation, and leveling 431210",
          "Casting of bases and foundations 431220",
          "Installation, maintenance, and repair of sanitary tools 432230",
          "Installation, maintenance, and repair of cooling and air-conditioning systems 432240",
          "Building finishing works 433010",
          "Installation of doors, windows, frames, shutters, railings, stairs, and wooden kitchens 433021",
          "Installation of doors, windows, frames, shutters, railings, stairs, and aluminum kitchens 433022",
          "Installation of doors, windows, frames, shutters, railings, stairs, and metal kitchens 433023",
          "Installation of shades and screens 433024",
          "Installation of internal ceilings, partitions, and wooden wall cladding 433030",
          "Ceramic and tile installation 433041",
          "Marble installation 433042",
          "Stone installation 433043",
          "Roof tile installation 433044",
          "Various decoration and decor works 433061",
          "Plastering and rendering works 433071",
          "Painting works for internal and external buildings 433072",
          "Painting works for civil engineering structures 433073",
          "Installation of glass and mirrors for buildings 433081",
          "Internal installations of elevators, moving buildings, and insulation 433092",
          "Brick installation works 439011",
          "Stone installation works 439012",
          "Swimming pool construction 439030",
          "Rental of construction equipment with operator 439050",
        ],
        managers: [
          "Khaled Mohammed Hamad Al-Bassam"
        ],
      };
    }

    return {
      dir: "rtl",
      pageTitle: "بيانات السجل التجاري",
      browserTitle: "المركز السعودي للتنافسية والأعمال",
      businessPlatform: "منصة الأعمال",
      languageBtn: "En",
      zoomBtn: isZoomed ? "A-" : "A+",
      menuTitle: "القائمة",
      notice:
        "المركز السعودي للتنافسية والأعمال غير مسؤول عن أي نقص أو اختلاف في البيانات، حيث يتم استرجاع البيانات بالتكامل مع الجهات المعنية.",
      companyName: <>شركة <span className="mobile-underline">ميلاد الإبداع</span> للمقاولات</>,
      active: "نشط",
      entityType: "نوع المنشأة",
      entityTypeValue: "شركة",
      companyType: "نوع الشركة",
      companyTypeValue: "ذات مسؤولية محدودة",
      registrationType: "نوع السجل",
      registrationTypeValue: "سجل رئيسي",
      unifiedNumber: "الرقم الوطني الموحد للمنشأة",
      crNumber: "رقم السجل التجاري",
      crIssueDate: "تاريخ قيد السجل التجاري",
      annualConfirmation: "تاريخ التأكيد السنوي للسجل التجاري",
      businessAddress: "مدينة عنوان الأعمال المعتمد للمنشأة",
      crCopyNumber: "رقم نسخة السجل التجاري",
      capital: "قيمة رأس المال الكلي",
      contactTitle: "بيانات الاتصال",
      mobile: "رقم الجوال",
      email: "البريد الإلكتروني",
      website: "عنوان الموقع الإلكتروني",
      activitiesTitle: "قائمة أنشطة السجل التجاري",
      moreActivities: "+ 24 نشاطًا آخر",
      managersTitle: "قائمة المديرين",
      footerText: "تطوير الهيئة السعودية للبيانات والذكاء الاصطناعي",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      faq: "الأسئلة الشائعة",
      rights: "جميع الحقوق محفوظة للمركز السعودي للتنافسية والأعمال 2026",
      version: "الإصدار 1.1.9",
      address: "الرياض حي الملز الأمير منصور بن عبدالعزيز",
      visibleActivities: [
        "الإنشاءات العامة للمباني السكنية 410010",
        "الإنشاءات العامة للمباني الحكومية 410023",
        "إنشاءات المباني الجاهزة في المواقع 410030",
        "ترميمات المباني السكنية وغير السكنية 410040",
      ],
      allActivities: [
        "الإنشاءات العامة للمباني السكنية 410010",
        "الإنشاءات العامة للمباني الحكومية 410023",
        "إنشاءات المباني الجاهزة في المواقع 410030",
        "ترميمات المباني السكنية وغير السكنية 410040",
        "إعداد وتجهيز المواقع من الحفر والتسوية 431210",
        "صب القواعد والأساسات 431220",
        "تركيب الأدوات الصحية وصيانتها وإصلاحها 432230",
        "تركيب أنظمة التبريد وتكييف الهواء وصيانتها وإصلاحها 432240",
        "تشطيب المباني 433010",
        "تركيب الأبواب والشبابيك وإطارات الأبواب الشترشوب والدربزينات والسلالم والمطابخ الخشبية 433021",
        "تركيب الأبواب والشبابيك وإطارات الأبواب الشترشوب والدربزينات والسلالم والمطابخ الألومنيوم 433022",
        "تركيب الأبواب والشبابيك وإطارات الأبواب الشترشوب والدربزينات والسلالم والمطابخ المعدنية 433023",
        "تركيب المظلات والسواتر 433024",
        "تركيب الأسقف الداخلية والحواجز وتلبيس الجدران بالأخشاب 433030",
        "تركيب السيراميك والكاشي 433041",
        "تركيب الرخام 433042",
        "تركيب الحجر 433043",
        "تركيب القرميد 433044",
        "أعمال وتركيب الديكورات المختلفة 433061",
        "أعمال التجصيص والمساح 433071",
        "أعمال الدهانات والطلاء للمباني الداخلية والخارجية 433072",
        "أعمال الدهانات والطلاء لهياكل الهندسة المدنية 433073",
        "تركيب الزجاج والمرايا للمباني 433081",
        "التركيبات الداخلية للمصاعد والمباني المتحركة والعوازل 433092",
        "أعمال تركيب الطابوق 439011",
        "أعمال تركيب الحجر 439012",
        "إنشاء حمامات السباحة 439030",
        "تأجير معدات التشييد والبناء مع مشغل 439050",
      ],
      managers: ["خالد محمد حمد البسام"],
    };
  }, [isEnglish, isZoomed]);

  useEffect(() => {
    document.title = t.browserTitle;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="44"></text>
      </svg>
    `;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      document.head.appendChild(link);
    }
    link.setAttribute("href", faviconUrl);
  }, [t.browserTitle]);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
    setIsHeaderMenuOpen(false);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div
      className={`page ${isZoomed ? "zoomed" : ""}`}
      dir={t.dir}
      lang={isEnglish ? "en" : "ar"}
    >
      <header className="hero">
        <img src={headerImage} alt="header" className="hero-image" />

        <div className="hero-overlay">
          <div className="hero-bottom-glow"></div>

          <div className="hero-inner">
            <div className="top-row">
              <div className="logo-wrap">
                <img src={logo} alt="logo" className="logo-image" />
                <h1 className="page-title">{t.pageTitle}</h1>
              </div>

              <div className="top-actions-wrap">
                <div className="top-actions">
                  <a
                    href={businessLink}
                    target="_blank"
                    rel="noreferrer"
                    className="business-btn"
                  >
                    <img src={arrow} alt="arrow" className="btn-icon-img" />
                    <span>{t.businessPlatform}</span>
                  </a>

                  <div className="divider header-divider"></div>

                  <button
                    className="mini-btn"
                    type="button"
                    onClick={toggleLanguage}
                  >
                    {t.languageBtn}
                  </button>

                  <button
                    className="mini-btn zoom-btn"
                    type="button"
                    onClick={toggleZoom}
                  >
                    <ZoomButtonLabel zoomed={isZoomed} />
                  </button>
                </div>

                <button
                  type="button"
                  className="menu-toggle"
                  aria-label={t.menuTitle}
                  onClick={() => setIsHeaderMenuOpen(true)}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 18H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        className={`content ${
          isActivitiesOpen || isHeaderMenuOpen ? "content-blurred" : ""
        }`}
      >
        <section className="info-card">
          <div className="notice">
            <p className="notice-text">
              <span className="notice-inline-icon">
                <span className="pulse-ring pulse-ring-1"></span>
                <span className="pulse-ring pulse-ring-2"></span>
                <span className="pulse-ring pulse-ring-3"></span>
                <img src={infoIcon} alt="info" className="notice-icon" />
              </span>
              {t.notice}
            </p>
          </div>

          <div className="company-card">
            <div className="company-topbar">
              <img src={saudiLogo} alt="saudi logo" className="saudi-logo" />
              <div className="company-divider"></div>

              <h2 className="company-name">{t.companyName}</h2>

              <span className="status">{t.active}</span>

              <div className="company-divider company-divider-mid"></div>

              <div className="company-topbar-inline-meta">
                <span className="meta-text">{t.entityType}</span>
                <span className="meta-badge meta-badge-white">
                  {t.entityTypeValue}
                </span>

                <span className="meta-text">{t.companyType}</span>
                <span className="meta-badge">{t.companyTypeValue}</span>
              </div>
            </div>

            <div className="company-main-grid">
              <div className="info-item">
                <span>{t.registrationType}</span>
                <strong className="badge-value">{t.registrationTypeValue}</strong>
              </div>

              <div className="info-item">
                <span>{t.unifiedNumber}</span>
                <strong>7003166456</strong>
              </div>

              <div className="info-item">
                <span>{t.crNumber}</span>
                <strong>1010317565</strong>
              </div>

              <div className="info-item">
                <span>{t.crIssueDate}</span>
                <strong>
                  <DatePair
                    hijriDate="1432-11-07"
                    gregDate="05-10-2011"
                    dir={t.dir}
                  />
                </strong>
              </div>

              <div className="info-item">
                <span>{t.annualConfirmation}</span>
                <strong>
                  <DatePair
                    hijriDate="1448-09-24"
                    gregDate="03-03-2027"
                    dir={t.dir}
                  />
                </strong>
              </div>

              <div className="info-item">
                <span>{t.businessAddress}</span>
                <strong>{t.address}</strong>
              </div>

              <div className="info-item">
                <span>{t.crCopyNumber}</span>
                <strong>2</strong>
              </div>

              <div className="info-item">
                <span>{t.capital}</span>
                <strong className="money">
                  <img src={riyalIcon} alt="riyal" className="riyal-icon" />
                  500,000.00
                </strong>
              </div>
            </div>

            <h3 className="contact-title">{t.contactTitle}</h3>

            <div className="contact-grid">
              <div className="info-item">
                <span>{t.mobile}</span>
                <strong>00966555129666</strong>
              </div>

              <div className="info-item">
                <span>{t.email}</span>
                <strong className="mobile-underline">info@m-ebdaa.com</strong>
              </div>

              <div className="info-item">
                <span>{t.website}</span>
                <strong>-</strong>
              </div>
            </div>
          </div>

          <div className="small-card">
            <h3>{t.activitiesTitle}</h3>
            <div className="tags activities-preview">
              {t.visibleActivities.map((activity, index) => (
                <span key={index}>{activity}</span>
              ))}

              <button
                type="button"
                className="more-activities-btn"
                onClick={() => setIsActivitiesOpen(true)}
              >
                {t.moreActivities}
              </button>
            </div>
          </div>

          <div className="small-card">
            <h3>{t.managersTitle}</h3>
            <div className="tags managers">
              {t.managers.map((manager, index) => (
                <span key={index}>{manager}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

     {isHeaderMenuOpen && (
        <div
          className="header-menu-overlay"
          onClick={() => setIsHeaderMenuOpen(false)}
        >
          {/* تم إضافة زر الإغلاق هنا ليكون في الجزء المظلم كما في الصورة */}
          <button
            type="button"
            className="drawer-outside-close-btn"
            onClick={() => setIsHeaderMenuOpen(false)}
          >
            ✕
          </button>

          <aside
            className="header-menu-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="header-menu-body">
              {/* زر منصة الأعمال الرئيسي */}
              <a
                href={businessLink}
                target="_blank"
                rel="noreferrer"
                className="business-sidebar-btn"
              >
                <span>{t.businessPlatform}</span>
                <span className="sidebar-btn-icon">
                  <img src={arrow} alt="arrow" />
                </span>
              </a>

              {/* قائمة الخيارات (اللغة وحجم الخط) */}
              <div className="sidebar-list">
                <div className="sidebar-list-item">
                  <span className="sidebar-item-label">{t.dir === "rtl" ? "اللغة" : "Language"}</span>
                  <button className="sidebar-outline-btn" onClick={toggleLanguage}>
                    {t.languageBtn}
                  </button>
                </div>

                <div className="sidebar-list-item">
                  <span className="sidebar-item-label">{t.dir === "rtl" ? "حجم الخط" : "Font Size"}</span>
                  <button className="sidebar-outline-btn zoom-btn" onClick={toggleZoom}>
                    <ZoomButtonLabel zoomed={isZoomed} />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {isActivitiesOpen && (
        <div
          className="activities-overlay"
          onClick={() => setIsActivitiesOpen(false)}
        >
          <aside
            className="activities-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="activities-drawer-header">
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setIsActivitiesOpen(false)}
              >
                ×
              </button>

              <h3>{t.activitiesTitle}</h3>
            </div>

            <div className="activities-drawer-body">
              {t.allActivities.map((activity, index) => (
                <div key={index} className="activity-chip">
                  {activity}
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-right-group">
            <img
              src={downLogoFooter}
              alt="SDAIA"
              className="footer-logo-image"
            />
            <span className="footer-right-text">{t.footerText}</span>
          </div>

          <div className="footer-links">
            <a href="/">{t.privacy}</a>
            <a href="/">{t.terms}</a>
            <a href="/">{t.faq}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.rights}</span>
          <span className="footer-dot">.</span>
          <span>{t.version}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;