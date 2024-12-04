import React from "react";

const page = () => {
  return (
    <div className="container mx-auto mt-4 text-white">
      <h1 className="text-center">הצהרת הנגישות של אתר sinergia-group</h1>

      <section className="text-right px-4 py-8">
        <p>האתר הונגש באופן הבא:</p>
        <ol>
          <li>התאמת האתר לכל סוגי הדפדפנים המודרניים</li>
          <li>התאמת האתר לכל סוגי הפלטפורמות – מובייל, טבלטים ודסקטופים.</li>
          <li>התאמת האתר מבחינת שימוש במקלדת בלבד.</li>
          <li>התאמת האתר לאנשים עם לקות ראיה חלקית או מלאה.</li>
          <li>התאמת האתר והתכנים באתר לאנשים עם לקות שמיעתית חלקית או מלאה.</li>
        </ol>
        <p>על מנת להנגיש את האתר ותכניו, נעשו השינויים הבאים:</p>
        <ol>
          <li>
            שינויים ובדיקות באתר על מנת שיתאים לכל הדפדפנים ולכל הפלטפורמות
            (ריספונסיביות).
          </li>
          <li>
            בדיקת ניגודיות בצבעים, הוספת טקסט הסבר לכל תמונה באתר כולל במדריכים
            השונים, הוספת label בטפסים שונים.
          </li>
        </ol>
        <p>הכלים בהם השתמשתי לבדיקת הנגישות הם:</p>
        <ol>
          <li>
            <a href="https://www.w3.org/TR/WCAG20/" target="_blank">
              תקן הנגישות עצמו כפי שמפורט באתר ה-{" "}
              <span className="font-bold underline">W3C</span>.
            </a>
          </li>
          <li>
            <a
              href="http://www.aisrael.org/?CategoryID=2764&ArticleID=45083"
              target="_blank"
              className="underline">
              קריטריוני הבדיקה כפי שמופיעים באתר הנגישות הישראלי .
            </a>
          </li>
          <li>סריקה ידנית של קוד המקור של האתר.</li>
          <li>שימוש בכלים חצי אוטומטיים כמו google lighthouse</li>
          <p>מצ״ב תמונת מסך של אחת מהבדיקות</p>
          <div className="img-container">
            <img
              src="./accessability.png"
              alt="lighthouse-test-score"
              className="w-100 h-100"
            />
          </div>
        </ol>
      </section>
      <p className="p-4">
        כפי שניתן לראות, בהנגשת האתר הושקעו זמן ומאמצים מרובים. ייתכן שיש בו
        בעיות נגישות בחלק קטן מהדפים.
      </p>
      <p className="p-4">
        במידה ויש בעיות נגישות, אשמח מאוד אם יפנו אלי. ניתן לפנות אלי באמצעות
        המייל:
        <a href="mailto:arza@sinergia-group.co.il">arza@sinergia-group.co.il</a>
      </p>
    </div>
  );
};

export default page;
