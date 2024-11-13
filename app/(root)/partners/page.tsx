import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface Partner {
  slug: string;
  name: string;
  title: string;
  image: string;
  content: string;
}

const partners: Partner[] = [
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
const Page = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.slug}
            className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {partner.image && (
              <div className="flex justify-center mb-8">
                <Avatar className="w-32 h-32">
                  <AvatarImage
                    src={partner.image}
                    alt={`${partner.name}'s profile`}
                  />
                  <AvatarFallback>
                    {partner.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}

            <h1 className="text-2xl font-bold text-primary text-center">
              {partner.name}
            </h1>
            <h2 className="text-xl font-bold text-gray-500 text-center">
              {partner.title}
            </h2>

            {partner.content && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right">
                {partner.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
