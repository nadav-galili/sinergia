import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות - Sinergia Group",
  description: "מדיניות הפרטיות של Sinergia Group - הגנה על המידע האישי שלך",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="border-b border-gray-200 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מדיניות פרטיות
            </h1>
            <p className="text-gray-600 text-lg">
              עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-right space-y-8">
            {/* Section 1 - Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. מבוא
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ב-Sinergia Group (&quot;החברה&quot;, &quot;אנחנו&quot;,
                &quot;שלנו&quot;), אנו מחויבים להגן על הפרטיות שלך ולכבד את
                הזכויות שלך בנוגע למידע האישי. מדיניות פרטיות זו מתארת כיצד אנו
                אוספים, משתמשים, מאחסנים ומגנים על המידע האישי שלך כאשר אתה
                משתמש באתר שלנו.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. איזה מידע אנחנו אוספים
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800">
                  מידע שאתה מספק לנו:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                  <li>פרטי יצירת קשר (שם, כתובת אימייל, מספר טלפון)</li>
                  <li>מידע שאתה שולח לנו דרך טפסי יצירת קשר</li>
                  <li>כל מידע נוסף שאתה בוחר לחלוק איתנו</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mt-6">
                  מידע שאנו אוספים אוטומטית:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                  <li>מידע על השימוש באתר (דפים שביקרת, זמן השהייה)</li>
                  <li>מידע טכני (כתובת IP, סוג דפדפן, מערכת הפעלה)</li>
                  <li>עוגיות ונתוני מעקב לצורכי אנליטיקה</li>
                </ul>
              </div>
            </section>

            {/* Section 3 - How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. כיצד אנחנו משתמשים במידע
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו משתמשים במידע שאנו אוספים למטרות הבאות:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                <li>מתן שירותים ותמיכה</li>
                <li>יצירת קשר איתך בנוגע לפניות שלך</li>
                <li>שיפור האתר והשירותים שלנו</li>
                <li>ניתוח דפוסי השימוש באתר</li>
                <li>שליחת מידע שיווקי (רק באישורך)</li>
                <li>עמידה בדרישות חוקיות</li>
              </ul>
            </section>

            {/* Section 4 - Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. עוגיות ומעקב
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו משתמשים בעוגיות וטכנולוגיות דומות כדי:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                <li>לאסוף נתונים אנליטיים באמצעות Amplitude Analytics</li>
                <li>לשפר את ביצועי האתר</li>
                <li>להתאים את החוויה שלך</li>
                <li>לזכור את העדפותיך</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                אתה יכול לבחור לקבל או לדחות עוגיות דרך החלון הקופץ באתר. דחייה
                של עוגיות עלולה להשפיע על פונקציונליות מסוימת של האתר.
              </p>
            </section>

            {/* Section 5 - Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. שיתוף מידע עם צדדים שלישיים
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אנו לא מוכרים, סוחרים או משכירים את המידע האישי שלך לצדדים
                שלישיים. אנו עשויים לשתף מידע במקרים הבאים:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                <li>
                  עם ספקי שירותים שעוזרים לנו להפעיל את האתר (כמו Amplitude)
                </li>
                <li>כאשר נדרש על פי חוק</li>
                <li>כדי להגן על הזכויות והבטיחות שלנו או של אחרים</li>
                <li>במקרה של מיזוג או רכישה עסקית</li>
              </ul>
            </section>

            {/* Section 6 - Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. אבטחת המידע
              </h2>
              <p className="text-gray-700 leading-relaxed">
                אנו מיישמים אמצעי אבטחה טכניים, פיזיים וארגוניים מתאימים כדי
                להגן על המידע האישי שלך מפני גישה לא מורשית, שינוי, גילוי או
                הרס. למרות זאת, אף שיטת העברה באינטרנט או אחסון אלקטרוני אינה
                בטוחה ב-100%.
              </p>
            </section>

            {/* Section 7 - Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. הזכויות שלך
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                בהתאם לחוקי הפרטיות החלים, יש לך הזכויות הבאות:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mr-6">
                <li>הזכות לגשת למידע האישי שלך</li>
                <li>הזכות לתקן מידע שגוי</li>
                <li>הזכות למחוק את המידע שלך</li>
                <li>הזכות להגביל את העיבוד של המידע</li>
                <li>הזכות לניידות נתונים</li>
                <li>הזכות להתנגד לעיבוד המידע</li>
              </ul>
            </section>

            {/* Section 8 - Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. פרטיות ילדים
              </h2>
              <p className="text-gray-700 leading-relaxed">
                השירותים שלנו אינם מיועדים לילדים מתחת לגיל 16. אנו לא אוספים
                במודע מידע אישי מילדים מתחת לגיל זה. אם נהיה מודעים לכך שאספנו
                מידע אישי מילד מתחת לגיל 16, אנו נמחק את המידע מהמערכות שלנו.
              </p>
            </section>

            {/* Section 9 - Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. שינויים במדיניות
              </h2>
              <p className="text-gray-700 leading-relaxed">
                אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יפורסם באתר
                עם תאריך העדכון החדש. המשך השימוש באתר לאחר פרסום השינויים יהווה
                הסכמה למדיניות המעודכנת.
              </p>
            </section>

            {/* Section 10 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. יצירת קשר
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                אם יש לך שאלות או בקשות בנוגע למדיניות הפרטיות שלנו או לטיפול
                במידע האישי שלך, אנא פנה אלינו:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 font-medium">Sinergia Group</p>
                <p className="text-gray-700">אימייל: arza@sinergia-group.com</p>
                <p className="text-gray-700">טלפון: 054-4456103</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
