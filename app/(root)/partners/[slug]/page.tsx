"use client";

import { useParams } from "next/navigation";
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
    image:
      "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef04f8f3ab29_5ef04f7861b01.jpg",
    content:
      "כיהן בתפקידי מפתח בתחום ניהול השיווק, המכירות והסחר, שהבולטים ביניהם: סמנכ״ל השיווק של קוקה קולה ישראל במשך 12 שנה, סגן נשיא שופרסל לשיווק וסחר ומנכ״ל דחף. מרצה בבית הספר למנהל עסקים של המכללה למנהל - הערוץ האקדמי, אוניברסיטת בן גוריון, המי״ל והקריה האקדמית אונו.",
  },
  {
    slug: "irit-galili",
    name: "עירית גלילי",
    title: "מנכ״ל משותף sinergia-group",
    image:
      "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef055c5a68b9_5ef0557891268.jpg",
    content:
      "פרשה מצה״ל בדרגת סא״ל, לאחר מגוון תפקידים תחום הפיתוח הארגוני, מומחית בניתוח ביצועים ואופטימיזציה של תהליכי תפעול, מכירות, שרשרת אספקה, ניהול מלאי ומבצעים, פיתוח מערכות BI, פיתוח תוכניות הדרכה ייחודיות לכל ארגון, ופיתוח ולומדות ב-E LEARNING",
  },
  {
    slug: "arza-ben-ami",
    name: "ארזה בן עמי ארמה",
    title: "מנכ״ל משותף sinergia-group",
    image:
      "https://images.cdn-files-a.com/uploads/3440451/800_crop_5ef0560bb4a39_5ef055f943d4e.jpg",
    content:
      "לשעבר מנכ״ל A.b data מקבוצת Publicis מתמחה בתקשורת שיווקית, ניהול קשרי לקוחות, Database Marketing, הבנת התנהגות וצרכי הקונים והקמת מועדוני לקוחות.",
  },
];
const Page = () => {
  const params = useParams<{ slug: string }>();
  const partner = partners.find((p) => p.slug === params.slug);

  if (!partner) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Partner not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        {partner.image && (
          <div className="flex justify-center mb-8 w-1/4 h-1/3 mx-auto">
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

        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          {partner.name}
        </h1>
        <h2 className="text-2xl font-bold text-gray-500 text-center mb-8">
          {partner.title}
        </h2>

        {partner.content && (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right">
            {partner.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
