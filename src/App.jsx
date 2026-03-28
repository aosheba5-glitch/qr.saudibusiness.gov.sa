import { useState } from "react";
import "./App.css";
import headerImage from "./assets/header.jpg";
import logo from "./assets/logo.svg";
import arrow from "./assets/arrow.svg";
import infoIcon from "./assets/info.svg";
import saudiLogo from "./assets/sudia_logo_small.svg";
import riyalIcon from "./assets/reyal.svg";
import downLogoFooter from "./assets/downlogofooter.svg";

function App() {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const visibleActivities = [
    "الإنشاءات العامة للمباني السكنية 410010",
    "الإنشاءات العامة للمباني الحكومية 410023",
    "إنشاءات المباني الجاهزة في المواقع 410030",
    "ترميمات المباني السكنية وغير السكنية 410040",
  ];

  const allActivities = [
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
  ];

  return (
    <div className="page" dir="rtl">
      <header className="hero">
        <img src={headerImage} alt="header" className="hero-image" />

        <div className="hero-overlay">
          <div className="hero-inner">
            <div className="top-row">
              <div className="top-actions">
                <button className="business-btn">
                  <img src={arrow} alt="arrow" className="btn-icon-img" />
                  <span>منصة الأعمال</span>
                </button>

                <div className="divider"></div>

                <button className="mini-btn">En</button>
                <button className="mini-btn">A+</button>
              </div>

              <div className="logo-wrap">
                <img src={logo} alt="logo" className="logo-image" />
                <h1 className="page-title">بيانات السجل التجاري</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={`content ${isActivitiesOpen ? "content-blurred" : ""}`}>
        <section className="info-card">
          <div className="notice">
            <p className="notice-text">
              <span className="notice-inline-icon">
                <span className="pulse-ring pulse-ring-1"></span>
                <span className="pulse-ring pulse-ring-2"></span>
                <span className="pulse-ring pulse-ring-3"></span>
                <img src={infoIcon} alt="info" className="notice-icon" />
              </span>
              <strong>المركز السعودي للتنافسية والأعمال</strong> غير مسؤول عن أي
              نقص أو اختلاف في البيانات، حيث يتم استرجاع البيانات بالتكامل مع
              الجهات المعنية.
            </p>
          </div>

          <div className="company-card">
            <div className="company-topbar">
              <div className="company-topbar-right">
                <img
                  src={saudiLogo}
                  alt="saudi logo"
                  className="saudi-logo"
                />
                <div className="company-divider"></div>
                <h2 className="company-name">شركة ميلاد الإبداع للمقاولات</h2>
                <span className="status">نشط</span>
                <div className="company-divider"></div>
              </div>

              <div className="company-topbar-left">
                <span className="meta-text">نوع المنشأة</span>
                <span className="meta-badge">شركة</span>
                <span className="meta-text">نوع الشركة</span>
                <span className="meta-badge">ذات مسؤولية محدودة</span>
              </div>
            </div>

            <div className="company-main-grid">
              <div className="info-item">
                <span>نوع السجل</span>
                <strong className="badge-value">سجل رئيسي</strong>
              </div>

              <div className="info-item">
                <span>الرقم الوطني الموحد للمنشأة</span>
                <strong>7003166456</strong>
              </div>

              <div className="info-item">
                <span>رقم السجل التجاري</span>
                <strong>1010317565</strong>
              </div>

              <div className="info-item">
                <span>تاريخ قيد السجل التجاري</span>
                <strong className="dates-row">
                  <span className="date-chip">1432-11-07 هـ</span>
                  <span className="date-chip">05-10-2011 م</span>
                </strong>
              </div>

              <div className="info-item">
                <span>تاريخ التأكيد السنوي للسجل التجاري</span>
                <strong className="dates-row">
                  <span className="date-chip">1448-09-24 هـ</span>
                  <span className="date-chip">03-03-2027 م</span>
                </strong>
              </div>

              <div className="info-item">
                <span>مدينة عنوان الأعمال المعتمد للمنشأة</span>
                <strong>الرياض حي الملز الأمير منصور بن عبدالعزيز</strong>
              </div>

              <div className="info-item">
                <span>رقم نسخة السجل التجاري</span>
                <strong>2</strong>
              </div>

              <div className="info-item">
                <span>قيمة رأس المال الكلي</span>
                <strong className="money">
                  <img src={riyalIcon} alt="riyal" className="riyal-icon" />
                  500,000.00
                </strong>
              </div>
            </div>

            <h3 className="contact-title">بيانات الاتصال</h3>

            <div className="contact-grid">
              <div className="info-item">
                <span>رقم الجوال</span>
                <strong>00966555129666</strong>
              </div>

              <div className="info-item">
                <span>البريد الإلكتروني</span>
                <strong>info@m-ebdaa.com</strong>
              </div>

              <div className="info-item">
                <span>عنوان الموقع الإلكتروني</span>
                <strong>-</strong>
              </div>
            </div>
          </div>

          <div className="small-card">
            <h3>قائمة أنشطة السجل التجاري</h3>
            <div className="tags activities-preview">
              {visibleActivities.map((activity, index) => (
                <span key={index}>{activity}</span>
              ))}

              <button
                type="button"
                className="more-activities-btn"
                onClick={() => setIsActivitiesOpen(true)}
              >
                + 24 نشاطًا آخر
              </button>
            </div>
          </div>

          <div className="small-card">
            <h3>قائمة المديرين</h3>
            <div className="tags managers">
              <span>خالد محمد حمد البسام</span>
            
            </div>
          </div>
        </section>
      </main>

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

              <h3>قائمة أنشطة السجل التجاري</h3>
            </div>

            <div className="activities-drawer-body">
              {allActivities.map((activity, index) => (
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
            <span className="footer-right-text">
              تطوير الهيئة السعودية للبيانات والذكاء الاصطناعي
            </span>
          </div>

          <div className="footer-links">
            <a href="/">سياسة الخصوصية</a>
            <a href="/">الشروط والأحكام</a>
            <a href="/">الأسئلة الشائعة</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>جميع الحقوق محفوظة للمركز السعودي للتنافسية والأعمال 2026</span>
          <span className="footer-dot">.</span>
          <span>الإصدار 1.1.9</span>
        </div>
      </footer>
    </div>
  );
}

export default App;