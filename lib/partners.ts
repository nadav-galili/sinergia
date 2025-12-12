export interface Partner {
  slug: string;
  name: string;
  title: string;
  image: string;
  content: string;
}

export const partners: Partner[] = [
  {
    slug: "eli-maron",
    name: "אלי מרון",
    title: "מנכ״ל משותף sinergia-group",
    image: "/partners/eli.jpg",
    content:
      "כיהן בתפקידי מפתח בתחום ניהול השיווק, המכירות והסחר, שהבולטים ביניהם: סמנכ״ל השיווק של קוקה קולה ישראל במשך 12 שנה, סגן נשיא שופרסל לשיווק וסחר ומנכ״ל דחף. מרצה בבית הספר למנהל עסקים של המכללה למנהל - הערוץ האקדמי, אוניברסיטת בן גוריון, המי״ל והקריה האקדמית אונו.",
  },
  {
    slug: "irit-galili",
    name: "עירית גלילי",
    title: "מנכ״ל משותף sinergia-group",
    image: "/partners/irit.jpg",
    content:
      "פרשה מצה״ל בדרגת סא״ל, לאחר מגוון תפקידים תחום הפיתוח הארגוני, מומחית בניתוח ביצועים ואופטימיזציה של תהליכי תפעול, מכירות, שרשרת אספקה, ניהול מלאי ומבצעים, פיתוח מערכות BI, פיתוח תוכניות הדרכה ייחודיות לכל ארגון, ופיתוח ולומדות ב-E LEARNING",
  },
  {
    slug: "arza-ben-ami",
    name: "ארזה בן עמי ארמה",
    title: "מנכ״ל משותף sinergia-group",
    image: "/partners/arza.jpg",
    content:
      "לשעבר מנכ״ל A.b data מקבוצת Publicis מתמחה בתקשורת שיווקית, ניהול קשרי לקוחות, Database Marketing, הבנת התנהגות וצרכי הקונים והקמת מועדוני לקוחות.",
  },
];

export const getPartnerBySlug = (slug: string): Partner | undefined => {
  return partners.find((partner) => partner.slug === slug);
};
